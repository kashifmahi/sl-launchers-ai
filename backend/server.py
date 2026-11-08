import asyncio
from contextlib import suppress
from fastapi import FastAPI, APIRouter, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import ASCENDING, DESCENDING, IndexModel
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

INDEXES: dict[str, list[IndexModel]] = {
    "enquiries": [
        IndexModel([("id", ASCENDING)], name="id", unique=True),
        IndexModel([("created_at", DESCENDING)], name="created_at_desc"),
    ],
    "newsletter_subscribers": [
        IndexModel([("id", ASCENDING)], name="id", unique=True),
        IndexModel([("email", ASCENDING)], name="email", unique=True),
    ],
}


async def ensure_indexes() -> None:
    for collection, models in INDEXES.items():
        for model in models:
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:
                logging.getLogger(__name__).error("ensure_indexes(%s.%s): %s", collection, model.document["name"], exc)


app = FastAPI()
api_router = APIRouter(prefix="/api")


class EnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    company: Optional[str] = Field(default=None, max_length=160)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    service: Optional[str] = Field(default=None, max_length=120)
    message: str = Field(min_length=10, max_length=4000)


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterSubscribe(BaseModel):
    email: EmailStr


class NewsletterSubscriber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "SL Launchers API"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    obj = Enquiry(**input.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.enquiries.insert_one(doc)
    return obj


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries(limit: int = Query(50, ge=1, le=200)):
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).limit(limit).to_list(limit)
    for d in docs:
        if isinstance(d['created_at'], str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
    return docs


@api_router.post("/newsletter", response_model=NewsletterSubscriber)
async def subscribe_newsletter(input: NewsletterSubscribe):
    existing = await db.newsletter_subscribers.find_one({"email": input.email}, {"_id": 0})
    if existing:
        if isinstance(existing['created_at'], str):
            existing['created_at'] = datetime.fromisoformat(existing['created_at'])
        return NewsletterSubscriber(**existing)
    obj = NewsletterSubscriber(email=input.email)
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter_subscribers.insert_one(doc)
    return obj


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def start_index_build():
    app.state.index_task = asyncio.create_task(ensure_indexes())


@app.on_event("shutdown")
async def shutdown_db_client():
    app.state.index_task.cancel()
    with suppress(asyncio.CancelledError):
        await app.state.index_task
    client.close()
