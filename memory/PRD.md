# SL Launchers — PRD

## Original Problem Statement
"Build a landing page: https://xoomplus.co.uk/ iwant to get this on board as i am running a software house with the name of SL launchers in usa and we can provide all these services and blockchain as well and ai plesae create it"

## Business Brief (from discovery)
- Business: SL Launchers — USA software house, serving USA + worldwide clients
- Goal: bring in project enquiries + book discovery calls
- Audience: startups/founders, SMBs, enterprises
- Differentiator: "Everything under one roof; Blockchain and AI expertise" (hero carries this meaning)
- Reach-out: contact form + WhatsApp button + call button + book-a-call
- Reference site: xoomplus.co.uk (digital marketing agency, Manchester). User asked for a multi-page site like the reference: services page, blog, details (process, industries, why-us, stats, testimonials, contact).

## Architecture
- Frontend: React (CRA/craco) at /app/frontend — react-router-dom, Tailwind, shadcn/ui, framer-motion, react-fast-marquee, @fontsource/outfit + inter
- Backend: FastAPI at /app/backend/server.py — MongoDB via MONGO_URL/DB_NAME
- Pages: Home, Services, Blog, Contact (+ shared Navbar, Footer, FloatingActions, EnquiryForm)
- API endpoints: POST/GET /api/enquiries, POST /api/newsletter, GET /api/

## What's Been Implemented
- 2026-11-08: Initial build. Multi-page dark-theme marketing site (Home: hero, trust ticker, services, process, why-us, industries, stats, testimonials, CTA form; Services: 6 detailed services incl. Blockchain + AI; Blog: featured + grid + newsletter signup; Contact: info cards + enquiry form). Backend: enquiries + newsletter collections with indexes. Contact form and newsletter submit to backend (verified end-to-end). Floating WhatsApp + call buttons. Mobile responsive (verified at 390px).

## Placeholders Still Needed From User
- Contact details confirmed: info@sllaunchers.com, +61 468 187 586 (call/WhatsApp). Note: phone is Australian but location says USA — confirm if that should change
- Real stats and client testimonials still placeholders in /app/frontend/src/data/content.js
- Real stats (currently 100+ projects, 40+ clients placeholders), real client testimonials, real client logos
- Logo file if they have one (currently Rocket icon + text)

## Backlog
- P1: Real contact details + real testimonials/stats from user
- P1: Book-a-call scheduling (Calendly embed or custom booking)
- P2: Individual blog article pages, case studies page
- P2: SEO meta/OG tags, sitemap, AI-crawler setup
- P2: Email notification on new enquiry (Resend managed integration)
