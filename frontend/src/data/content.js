import {
  Search,
  Code2,
  Megaphone,
  Target,
  Boxes,
  BrainCircuit,
  Building2,
  HeartPulse,
  Briefcase,
  Wrench,
  Hotel,
  ShoppingCart,
} from "lucide-react";

export const CONTACT = {
  email: "info@sllaunchers.com",
  phone: "+61 468 187 586",
  whatsapp: "61468187586",
  location: "Serving clients worldwide", // owner to confirm physical office location
};

export const SERVICES = [
  {
    id: "web",
    icon: Code2,
    title: "Web Design & Software Development",
    tagline: "Websites and applications engineered as commercial assets.",
    description:
      "We design and engineer fast, responsive websites and custom web applications that turn visitors into customers.",
    items: [
      "UI/UX Design",
      "Landing Pages & Marketing Sites",
      "Custom Web Applications",
      "WordPress & Shopify Builds",
      "E-commerce Storefronts",
      "Maintenance & Support",
    ],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI Development & Automation",
    tagline: "Practical AI that cuts costs and opens new revenue.",
    description:
      "We build AI into your product and operations — chatbots, machine learning models and automation that deliver measurable outcomes.",
    items: [
      "AI Chatbots & Assistants",
      "Custom LLM Integrations",
      "Workflow & Process Automation",
      "Machine Learning Models",
      "AI-Powered Analytics",
      "Computer Vision Solutions",
    ],
  },
  {
    id: "blockchain",
    icon: Boxes,
    title: "Blockchain Development",
    tagline: "Decentralised products, designed and shipped properly.",
    description:
      "From smart contracts to full decentralised applications, we design, audit and launch blockchain products built for production.",
    items: [
      "Smart Contract Development",
      "dApp Development",
      "Token & Web3 Platforms",
      "Smart Contract Audits",
      "Wallet & Payment Integration",
      "Blockchain Consulting",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Own the search results your buyers actually use.",
    description:
      "We build high-ranking organic systems that scale your business — from technical foundations to AI-era search visibility.",
    items: [
      "AI SEO (GEO & AEO)",
      "Local SEO",
      "Technical SEO",
      "On-Page & Off-Page SEO",
      "E-commerce SEO",
      "SEO Audits",
    ],
  },
  {
    id: "ppc",
    icon: Target,
    title: "PPC & Paid Advertising",
    tagline: "Predictable growth from every advertising dollar.",
    description:
      "We develop and refine Google, social and retargeting campaigns that reduce acquisition costs and scale revenue predictably.",
    items: [
      "Google Ads Management",
      "Meta & Social Ads",
      "Retargeting Funnels",
      "High-Converting Landing Pages",
      "Ad Copy & Creative",
      "Performance Reporting",
    ],
  },
  {
    id: "smm",
    icon: Megaphone,
    title: "Social Media Marketing",
    tagline: "Content strategies that turn followers into customers.",
    description:
      "We combine clear content strategy with AI-enhanced creative and active community management to grow your brand authority.",
    items: [
      "Social Media Management",
      "Content Strategy",
      "Brand Storytelling",
      "AI-Enhanced Creative",
      "Community Engagement",
      "Brand Authority Building",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your business, customers, competitors and goals to identify your biggest growth levers.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description:
      "We audit your current setup and deliver a clear plan - scope, timeline and the fastest path to results.",
  },
  {
    step: "03",
    title: "Build & Launch",
    description:
      "Our team designs, develops and deploys in coordinated sprints, keeping you updated at every stage.",
  },
  {
    step: "04",
    title: "Scale & Optimise",
    description:
      "We measure real data, refine continuously and report transparently so growth never plateaus.",
  },
];

export const WHY_US = [
  {
    title: "Everything Under One Roof",
    description:
      "Software, marketing, AI and blockchain from one accountable team — no juggling multiple agencies.",
  },
  {
    title: "Blockchain & AI Expertise",
    description:
      "We design and ship smart contracts, ML models and automation — delivered by one senior team.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear communication and honest reporting from day one. You always know what we did and what it delivered.",
  },
  {
    title: "Customised Plans",
    description:
      "Every business is unique. We craft strategies around your goals, budget and market — never templates.",
  },
  {
    title: "Focused on Results",
    description:
      "Every piece of work is tied to a measurable goal agreed up front, so you can see exactly what it delivered.",
  },
  {
    title: "Built for Long-Term Growth",
    description:
      "Quick wins that also form the foundation for durable, compounding digital growth.",
  },
];

export const INDUSTRIES = [
  { icon: Building2, name: "Property & Construction", detail: "Listing portals, project showcases and lead pipelines for high-value deals.", service: "web" },
  { icon: HeartPulse, name: "Healthcare & Wellness", detail: "Booking funnels, patient portals and privacy-conscious enquiry handling.", service: "web" },
  { icon: Briefcase, name: "Professional & B2B Services", detail: "Authority content, SEO and client portals that win bigger contracts.", service: "seo" },
  { icon: Wrench, name: "Home & Trade Services", detail: "Local SEO and call-ready landing pages that keep the diary full.", service: "seo" },
  { icon: Hotel, name: "Hospitality & Leisure", detail: "Direct-booking sites and paid campaigns that cut commission fees.", service: "ppc" },
  { icon: ShoppingCart, name: "Retail & E-commerce", detail: "Fast Shopify and custom stores with AI-powered product discovery.", service: "web" },
];

export const TECH_STACK = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "OpenAI", "Claude", "LangChain",
  "Solidity", "Ethereum", "Solana", "Polygon", "Shopify", "WordPress", "AWS", "Google Cloud",
  "PostgreSQL", "MongoDB", "Google Ads", "Meta Ads",
];

export const ENGAGEMENTS = [
  {
    name: "Fixed-Scope Project",
    best: "Best for websites, MVPs and one-off builds",
    points: [
      "Scope, timeline and price agreed before work starts",
      "Milestone-based delivery and sign-off",
      "Launch support and handover documentation",
    ],
  },
  {
    name: "Dedicated Product Team",
    best: "Best for funded startups and ongoing products",
    points: [
      "Designers, engineers and a lead who know your product",
      "Two-week sprints with demos you can see",
      "Scale the team up or down as you grow",
    ],
    highlight: true,
  },
  {
    name: "Monthly Growth Retainer",
    best: "Best for SEO, PPC and social media",
    points: [
      "A clear monthly plan tied to your targets",
      "Plain-English reports on what moved and why",
      "No long lock-in contracts",
    ],
  },
];

export const FAQS = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. After a short discovery call we send a fixed quote with a clear breakdown, so you know the full cost before anything starts. There's no charge for the first conversation.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "A marketing website typically takes a few weeks; a custom web application or MVP usually runs a few months. You get a realistic timeline in your proposal, with milestones you can track.",
  },
  {
    q: "Do you work with clients outside your time zone?",
    a: "Yes. We work with clients worldwide and schedule calls in your business hours. Day-to-day updates happen over email, WhatsApp or your preferred project tool.",
  },
  {
    q: "Do I own the code and designs?",
    a: "Yes. Once the project is paid for, the source code, designs and accounts are yours. We hand everything over with documentation.",
  },
  {
    q: "Do I actually need AI or blockchain?",
    a: "Often you don't, and we'll say so. We recommend AI or blockchain only where it saves real time or money, or opens new revenue. Otherwise a well-built conventional system is faster and cheaper.",
  },
  {
    q: "What happens after launch?",
    a: "We offer maintenance, hosting support and growth retainers for SEO, ads and social, so the people who built your product can keep improving it.",
  },
];

// Placeholder stats removed pending confirmed numbers from the owner.

// Placeholder testimonials hidden until real quotes are supplied.

export const BLOG_POSTS = [
  {
    slug: "how-ai-is-changing-software-development",
    category: "AI Development",
    title: "How AI Is Changing Software Development in 2026",
    excerpt:
      "From AI-assisted coding to automated testing and deployment, artificial intelligence is reshaping how modern software gets built — and what it means for your next project.",
    date: "Jan 2026",
    readTime: "6 min read",
    featured: true,
    content: [
      {
        heading: "AI is now part of the development workflow",
        body: "A few years ago, AI in software development meant autocomplete on a good day. Today it touches every stage of the build. Developers use AI pair-programmers to draft boilerplate, generate test cases, review pull requests and explain unfamiliar code. The result is not fewer engineers — it's engineers spending their time on architecture, business logic and the parts of a system that genuinely need human judgement.",
      },
      {
        heading: "Faster prototyping changes how products get scoped",
        body: "The biggest commercial impact is speed at the start of a project. A working prototype that once took six weeks can now be on a founder's desk in days. That changes the conversation: instead of paying to discover what a product should be, clients validate the idea early and invest the budget in the version that survives contact with real users.",
      },
      {
        heading: "Quality assurance is getting a second set of eyes",
        body: "AI-driven testing tools generate edge cases humans rarely think to write, and they never get tired of running them. Combined with a disciplined review process, they catch regressions earlier and make continuous deployment safer for teams of any size.",
      },
      {
        heading: "What this means for your next project",
        body: "AI does not replace a good development partner — it amplifies one. The teams worth hiring are the ones using these tools to deliver faster without cutting corners on architecture, security or testing. When you evaluate a software house, ask how they use AI in their workflow. A clear, specific answer tells you a great deal about how your project will run.",
      },
    ],
  },
  {
    slug: "blockchain-beyond-crypto",
    category: "Blockchain",
    title: "Blockchain Beyond Crypto: Real Business Use Cases",
    excerpt:
      "Supply chains, digital identity, smart contracts — where blockchain actually delivers measurable business value today.",
    date: "Jan 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        heading: "Blockchain is a tool, not a trend",
        body: "Strip away the speculation and a blockchain is simply a shared, tamper-evident record that no single party controls. That property is genuinely useful in a small number of situations — and those situations are where real products are being built.",
      },
      {
        heading: "Supply chain transparency",
        body: "When goods pass through many hands, everyone wants to trust the record of where they've been. Blockchain lets producers, shippers and retailers write to one shared ledger, so provenance claims can be verified rather than taken on faith. Food safety and pharmaceutical tracking are the strongest examples in production today.",
      },
      {
        heading: "Smart contracts for automated agreements",
        body: "A smart contract executes agreed logic automatically when conditions are met — releasing payment on delivery, distributing royalties, or settling insurance triggers. They remove manual reconciliation between parties who don't fully trust each other, which is exactly where paperwork and disputes used to live.",
      },
      {
        heading: "Digital identity and credentials",
        body: "Verifiable credentials let people prove qualifications, licences or membership without calling the issuer every time. Universities, certifying bodies and governments are piloting systems where the holder controls their own verified record.",
      },
      {
        heading: "Should your business use it?",
        body: "Ask one question: do multiple parties need to share a record none of them should control alone? If yes, blockchain may be the right foundation. If no, a conventional database will almost always serve you better — faster, cheaper and simpler. A good technology partner will tell you which side of that line you're on before a line of code is written.",
      },
    ],
  },
  {
    slug: "choosing-web-development-partner",
    category: "Web Solutions",
    title: "How to Choose the Right Software Development Partner",
    excerpt:
      "The questions to ask, the red flags to avoid, and how to protect your budget and timeline.",
    date: "Dec 2025",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        heading: "Start with outcomes, not features",
        body: "Before you talk to any agency, write down what success looks like in business terms: more qualified leads, a product launch by a date, hours saved on a manual process. Partners who ask about these outcomes first are the ones who build software that pays for itself.",
      },
      {
        heading: "Questions worth asking",
        body: "Ask who will actually work on your project and meet them. Ask how they handle a requirement that changes mid-build — because one always does. Ask what happens after launch: who maintains it, how updates are priced, and how quickly they respond when something breaks.",
      },
      {
        heading: "Red flags to walk away from",
        body: "Be cautious of quotes given before anyone has asked about your business, timelines with no discovery phase, and proposals that are all design and no engineering plan. The cheapest quote is rarely the cheapest project — rebuilds cost far more than doing it properly once.",
      },
      {
        heading: "The value of one accountable team",
        body: "Splitting strategy, development and marketing across three vendors means three sets of handovers and nobody owning the result. A single team that designs, builds and promotes your product keeps accountability in one place — and one place is where problems get solved fastest.",
      },
    ],
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    category: "SEO",
    title: "SEO in the Age of AI Search: What Still Works",
    excerpt:
      "AI overviews are changing search. Here's what still drives organic growth — and what has changed for good.",
    date: "Dec 2025",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        heading: "Search is answering, not just listing",
        body: "AI-powered search increasingly answers questions directly on the results page. That means fewer clicks for shallow content — and more value for content that gives the search engines something worth quoting.",
      },
      {
        heading: "What still works",
        body: "The fundamentals have not moved. A technically sound, fast website. Content that answers real customer questions better than anyone else. Genuine authority signals — mentions, links and reviews from the real world. None of that has been replaced; it has simply become the price of entry.",
      },
      {
        heading: "What has changed",
        body: "Thin pages written to target a keyword no longer earn their keep. AI engines favour clear, well-structured, demonstrably experienced content — case studies, original data, real expertise. Structured data matters more too, because machines cite what they can parse.",
      },
      {
        heading: "Where to focus next",
        body: "Invest in fewer, better pages that genuinely help your buyers, and make sure your technical foundations — speed, mobile experience, structured markup — let both Google and the AI engines read them clearly. The businesses that win the next few years of search will be the ones AI tools trust enough to quote.",
      },
    ],
  },
  {
    slug: "ppc-vs-seo-where-to-invest",
    category: "PPC",
    title: "PPC vs SEO: Where Should You Invest First?",
    excerpt:
      "A practical framework for deciding between paid and organic channels based on your stage and goals.",
    date: "Nov 2025",
    readTime: "4 min read",
    featured: false,
    content: [
      {
        heading: "The honest trade-off",
        body: "Paid ads buy attention today; SEO earns it over months. Neither is universally better — the right choice depends on how quickly you need results and how durable you need them to be.",
      },
      {
        heading: "When PPC comes first",
        body: "Choose paid advertising when you're launching something new, entering a market, or validating an offer. Ads give you immediate traffic and, just as valuable, immediate data: which messages convert, which audiences respond, what a lead actually costs.",
      },
      {
        heading: "When SEO takes the lead",
        body: "Choose organic search when you're playing a longer game. Rankings compound: the page that wins today keeps working next year without a daily media bill. For established businesses with proven offers, SEO usually delivers the lowest cost per acquisition over time.",
      },
      {
        heading: "Most businesses need both",
        body: "In practice the channels reinforce each other. PPC data tells you which keywords convert, so your SEO targets the right ones; organic rankings reduce what you must spend on ads. A sensible plan usually starts paid for speed while building organic for durability — then rebalances as the organic engine takes hold.",
      },
    ],
  },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc5NDEzNDQyMnww&ixlib=rb-4.1.0&q=85",
  blockchain:
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MHx8fHwxNzk0MTM0NDIyfDA&ixlib=rb-4.1.0&q=85",
  office:
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBzb2Z0d2FyZSUyMGFnZW5jeXxlbnwwfHx8fDE3OTQxMzQ0MjJ8MA&ixlib=rb-4.1.0&q=85",
  meeting:
    "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2UlMjBzb2Z0d2FyZSUyMGFnZW5jeXxlbnwwfHx8fDE3OTQxMzQ0MjJ8MA&ixlib=rb-4.1.0&q=85",
};
