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
  email: "hello@sllaunchers.com", // placeholder - confirm real email
  phone: "+1 555 010 2244", // placeholder - confirm real phone
  whatsapp: "15550102244", // placeholder - confirm real WhatsApp number
  location: "USA - serving clients worldwide",
};

export const SERVICES = [
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimisation",
    tagline: "Own the search results your buyers actually use.",
    description:
      "We build high-ranking organic systems that scale your business - from technical foundations to AI-era search visibility.",
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
    id: "web",
    icon: Code2,
    title: "Web Design & Development",
    tagline: "Fast, conversion-focused websites engineered as commercial assets.",
    description:
      "We design and engineer fast, responsive, purpose-driven websites and web applications built to convert visitors into customers.",
    items: [
      "UI/UX Design",
      "Landing Pages",
      "Custom Web Apps",
      "WordPress & Shopify",
      "E-commerce Development",
      "Maintenance & Support",
    ],
  },
  {
    id: "blockchain",
    icon: Boxes,
    title: "Blockchain Development",
    tagline: "Decentralised products, built and launched properly.",
    description:
      "From smart contracts to full decentralised applications, we design, audit and ship blockchain products you can trust in production.",
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
    id: "ai",
    icon: BrainCircuit,
    title: "AI Development",
    tagline: "Practical AI that cuts costs and opens new revenue.",
    description:
      "We build AI into your product and operations - chatbots, machine learning models and automation that deliver measurable outcomes.",
    items: [
      "AI Chatbots & Assistants",
      "Machine Learning Models",
      "Workflow Automation",
      "AI-Powered Analytics",
      "Custom LLM Integrations",
      "Computer Vision",
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
      "Software, marketing, AI and blockchain from one accountable team - no juggling multiple agencies.",
  },
  {
    title: "Blockchain & AI Expertise",
    description:
      "We ship the emerging-tech projects most software houses can't - smart contracts, ML models, automation.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear communication and honest reporting from day one. You always know what we did and what it delivered.",
  },
  {
    title: "Customised Plans",
    description:
      "Every business is unique. We craft strategies around your goals, budget and market - never templates.",
  },
  {
    title: "Focused on Results",
    description:
      "Everything we do has a clear purpose and measurable goal. Results aren't delayed, they're delivered.",
  },
  {
    title: "Built for Long-Term Growth",
    description:
      "Quick wins that also form the foundation for durable, compounding digital growth.",
  },
];

export const INDUSTRIES = [
  { icon: Building2, name: "Property & Construction", detail: "High-value pipelines and portfolio showcases." },
  { icon: HeartPulse, name: "Healthcare & Wellness", detail: "Compliant patient generation and booking funnels." },
  { icon: Briefcase, name: "Professional & B2B Services", detail: "Authority positioning for high-value contracts." },
  { icon: Wrench, name: "Home & Trade Services", detail: "Dominating local search for consistent leads." },
  { icon: Hotel, name: "Hospitality & Leisure", detail: "Direct reservation and acquisition campaigns." },
  { icon: ShoppingCart, name: "Retail & E-commerce", detail: "Targeted campaigns for commercial growth." },
];

export const STATS = [
  { value: "100+", label: "Projects Delivered" }, // placeholder
  { value: "40+", label: "Happy Clients" }, // placeholder
  { value: "6+", label: "Industries Served" }, // placeholder
  { value: "24/7", label: "Support & Communication" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sample client feedback - replace with a real testimonial from one of your clients.",
    name: "Client Name",
    role: "Founder, Company Name",
  },
  {
    quote:
      "Sample client feedback - replace with a real testimonial from one of your clients.",
    name: "Client Name",
    role: "CEO, Company Name",
  },
  {
    quote:
      "Sample client feedback - replace with a real testimonial from one of your clients.",
    name: "Client Name",
    role: "Director, Company Name",
  },
];

export const BLOG_POSTS = [
  {
    slug: "how-ai-is-changing-software-development",
    category: "AI Development",
    title: "How AI Is Changing Software Development in 2026",
    excerpt:
      "From AI-assisted coding to autonomous testing, here's how artificial intelligence is reshaping how modern software gets built - and what it means for your next project.",
    date: "Jan 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "blockchain-beyond-crypto",
    category: "Blockchain",
    title: "Blockchain Beyond Crypto: Real Business Use Cases",
    excerpt:
      "Supply chains, digital identity, smart contracts - where blockchain actually delivers business value today.",
    date: "Jan 2026",
    readTime: "5 min read",
  },
  {
    slug: "choosing-web-development-partner",
    category: "Web Solutions",
    title: "How to Choose the Right Software Development Partner",
    excerpt:
      "The questions to ask, the red flags to avoid, and how to protect your budget and timeline.",
    date: "Dec 2025",
    readTime: "7 min read",
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    category: "SEO",
    title: "SEO in the Age of AI Search: What Still Works",
    excerpt:
      "AI overviews are changing search. Here's what still drives organic growth - and what's changed forever.",
    date: "Dec 2025",
    readTime: "5 min read",
  },
  {
    slug: "ppc-vs-seo-where-to-invest",
    category: "PPC",
    title: "PPC vs SEO: Where Should You Invest First?",
    excerpt:
      "A practical framework for deciding between paid and organic channels based on your stage and goals.",
    date: "Nov 2025",
    readTime: "4 min read",
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
