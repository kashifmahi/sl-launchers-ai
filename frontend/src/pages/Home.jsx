import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  Bot,
  ShieldCheck,
  Gauge,
  Clock,
  Globe2,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  SERVICES,
  PROCESS,
  WHY_US,
  INDUSTRIES,
  CONTACT,
  TECH_STACK,
  ENGAGEMENTS,
  FAQS,
} from "../data/content";

const Eyebrow = ({ children, dark = false }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-bold ${
      dark ? "text-cyan-300" : "text-blue-600"
    }`}
  >
    <span className={`w-6 h-px ${dark ? "bg-cyan-300" : "bg-blue-600"}`} />
    {children}
  </span>
);

function HeroVisual() {
  return (
    <div className="relative h-[400px] sm:h-[480px] w-full max-w-[520px] mx-auto lg:mx-0" aria-hidden="true">
      {/* Main code card */}
      <div className="absolute left-0 right-6 top-6 rounded-2xl glass-dark shadow-2xl shadow-black/40 overflow-hidden floaty-slow">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-[11px] text-slate-400 font-mono">launch.ts</span>
        </div>
        <pre className="px-5 py-4 text-[12.5px] leading-6 font-mono text-slate-300 overflow-hidden">
          <span className="text-violet-300">const</span> project = <span className="text-violet-300">await</span> sl.<span className="text-sky-300">launch</span>({"{"}
          {"\n"}  web: <span className="text-emerald-300">"React · Next.js"</span>,
          {"\n"}  ai: <span className="text-emerald-300">"LLM agents + automation"</span>,
          {"\n"}  chain: <span className="text-emerald-300">"Solidity · Solana"</span>,
          {"\n"}  growth: [<span className="text-emerald-300">"SEO"</span>, <span className="text-emerald-300">"PPC"</span>, <span className="text-emerald-300">"Social"</span>],
          {"\n"}{"}"});
          {"\n"}
          {"\n"}<span className="text-slate-500">// ✓ one team · one roadmap</span>
          {"\n"}project.<span className="text-sky-300">ship</span>()<span className="caret text-cyan-300">▍</span>
        </pre>
      </div>

      {/* AI chat card */}
      <div className="absolute left-2 sm:-left-8 bottom-0 sm:bottom-10 w-[240px] rounded-2xl bg-white shadow-2xl shadow-blue-900/30 p-4 floaty">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </span>
          <div>
            <div className="text-xs font-semibold text-[#0B1739]">AI Assistant</div>
            <div className="text-[10px] text-emerald-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" /> Online 24/7
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-slate-100 px-3 py-2 text-[11px] text-slate-600">
          Booked your demo for Tuesday 10:00. Confirmation sent ✓
        </div>
      </div>

      {/* Smart contract card */}
      <div className="hidden sm:block absolute right-0 bottom-0 w-[220px] rounded-2xl glass-dark p-4 shadow-2xl shadow-black/40 floaty" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">Contract.sol</span>
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="mt-2 text-sm font-semibold text-white">Deployed &amp; verified</div>
        <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-violet-400 to-cyan-300" />
        </div>
        <div className="mt-2 text-[10px] text-slate-500 font-mono">0x7f3a…c91e · mainnet</div>
      </div>

      {/* Performance badge */}
      <div className="absolute right-2 sm:-right-4 top-0 rounded-xl bg-white px-3.5 py-2.5 shadow-xl shadow-blue-900/30 flex items-center gap-2.5 floaty" style={{ animationDelay: "0.8s" }}>
        <Gauge className="w-5 h-5 text-emerald-500" />
        <div>
          <div className="text-[10px] text-slate-500 leading-none">Core Web Vitals</div>
          <div className="text-xs font-bold text-[#0B1739] mt-1">Built to pass</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [ai, chain, ...others] = [
    SERVICES.find((s) => s.id === "ai"),
    SERVICES.find((s) => s.id === "blockchain"),
    ...SERVICES.filter((s) => s.id !== "ai" && s.id !== "blockchain"),
  ];

  return (
    <div data-testid="home-page">
      <Seo
        title="SL Launchers — Software, AI & Blockchain. Built for Your Business."
        description="From websites and custom applications to intelligent automation and blockchain platforms, SL Launchers brings development and digital growth together in one team."
        path="/"
      />

      {/* HERO */}
      <section className="relative bg-ink overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28" data-testid="hero-section">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow w-[520px] h-[520px] bg-blue-600/30 -top-40 -left-20" />
        <div className="glow w-[420px] h-[420px] bg-cyan-400/20 top-40 right-0" />
        <div className="glow w-[360px] h-[360px] bg-violet-500/20 bottom-0 left-1/3" />

        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300" data-testid="hero-eyebrow">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                Software · AI · Blockchain · Growth
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.1rem] font-bold tracking-tight !text-white mt-6" data-testid="hero-heading">
                We build the tech.{" "}
                <span className="text-gradient-hero">Then we grow it.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400 mt-6 max-w-xl" data-testid="hero-subheading">
                Websites, custom apps, AI automation and blockchain platforms — designed, engineered and marketed by one senior team, so nothing gets lost between vendors.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3.5 mt-9">
                <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-7 min-h-12 shadow-lg shadow-blue-600/30 transition-transform duration-200 hover:-translate-y-0.5" data-testid="hero-cta-primary">
                  <Link to="/book">
                    Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-white/5 hover:bg-white/10 border-white/20 text-white hover:text-white px-7 min-h-12" data-testid="hero-cta-secondary">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2.5 mt-9 text-sm text-slate-400">
                {["Fixed quotes, no surprises", "Reply within 1 business day", "You own the code"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="bg-white border-b border-slate-200 py-9" data-testid="trust-ticker">
        <p className="text-center text-xs tracking-[0.22em] uppercase font-bold text-slate-400 mb-6">
          Technologies and platforms we build with
        </p>
        <div className="marquee overflow-hidden">
          <div className="marquee-track">
            {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
              <span key={i} className="mx-7 font-heading font-semibold text-lg text-slate-400 hover:text-[#0B1739] transition-colors duration-200 whitespace-nowrap" data-testid="ticker-item">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="py-20 sm:py-28 bg-white" data-testid="services-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-[2.6rem] font-bold tracking-tight mt-4 max-w-2xl leading-tight">
                Six capabilities. <span className="text-gradient-blue">One accountable team.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-500" data-testid="services-all-link">
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Feature pair: AI + Blockchain */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
            {[
              { s: ai, img: "/sl-hero.webp", alt: "AI circuit brain illustration" },
              { s: chain, img: "/sl-blockchain.webp", alt: "Connected blockchain blocks" },
            ].map(({ s, img, alt }, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <Link to={`/services#${s.id}`} className="group block h-full" data-testid={`service-card-${s.id}`}>
                  <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden bg-ink">
                    <img src={img} alt={alt} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B1D] via-[#060B1D]/80 to-[#060B1D]/10" />
                    <div className="relative h-full flex flex-col justify-end p-8">
                      <span className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 backdrop-blur flex items-center justify-center">
                        <s.icon className="w-5 h-5 text-cyan-300" />
                      </span>
                      <h3 className="font-heading text-2xl font-bold !text-white mt-5">{s.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed mt-2 max-w-md">{s.description}</p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {s.items.slice(0, 4).map((item) => (
                          <span key={item} className="text-xs text-slate-200 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-cyan-300 font-semibold mt-6">
                        Learn more <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Remaining four */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {others.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <Link to={`/services#${s.id}`} className="group block h-full" data-testid={`service-card-${s.id}`}>
                  <div className="card-lift h-full rounded-2xl bg-white border border-slate-200 p-7 flex flex-col">
                    <span className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-600">
                      <s.icon className="w-5 h-5 text-blue-600 transition-colors duration-200 group-hover:text-white" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold mt-5 leading-snug">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-2">{s.tagline}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.items.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-500 mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold mt-auto pt-5">
                      Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-20 sm:py-28 bg-ink overflow-hidden" data-testid="why-section">
        <div className="glow w-[500px] h-[500px] bg-blue-600/20 -right-40 top-0" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
            <Reveal>
              <Eyebrow dark>Why SL Launchers</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-[2.6rem] font-bold tracking-tight !text-white mt-4 leading-tight">
                No more juggling a developer, an agency and a freelancer.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400 mt-5">
                The people who plan your product are the same people who build it and bring in customers. Fewer handovers, faster decisions, and one team that owns the result.
              </p>
              <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 relative">
                <img src="/sl-office.webp" alt="SL Launchers team collaborating in the office" className="w-full h-64 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B1D]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {[{ i: Globe2, t: "Clients worldwide" }, { i: Clock, t: "Your time zone" }].map(({ i: I, t }) => (
                    <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0B1739]">
                      <I className="w-3.5 h-3.5 text-blue-600" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl glass-dark p-6 transition-colors duration-300 hover:border-cyan-300/40" data-testid={`why-item-${i}`}>
                    <span className="font-heading text-sm font-bold text-cyan-300">0{i + 1}</span>
                    <h3 className="font-heading text-lg font-semibold !text-white mt-2">{w.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mt-2">{w.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-28 bg-[#F5F8FF]" data-testid="process-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-[2.6rem] font-bold tracking-tight mt-4 leading-tight">
                From first call to launch in four clear steps
              </h2>
            </div>
          </Reveal>
          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-300" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.08}>
                  <div className="relative text-center px-2" data-testid={`process-step-${i}`}>
                    <span className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-white border border-blue-200 shadow-lg shadow-blue-600/10 flex items-center justify-center font-heading text-lg font-bold text-blue-600">
                      {p.step}
                    </span>
                    <h3 className="font-heading text-lg font-semibold mt-6">{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-2.5">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 sm:py-28 bg-white" data-testid="engagement-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow>Ways to work with us</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-[2.6rem] font-bold tracking-tight mt-4 leading-tight">
                Pick the model that fits your stage
              </h2>
              <p className="text-base text-slate-500 mt-4">
                Every engagement starts with a free discovery call and a fixed, written proposal.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-stretch">
            {ENGAGEMENTS.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.06}>
                <div
                  className={`h-full rounded-2xl p-8 flex flex-col ${
                    e.highlight
                      ? "bg-ink ring-gradient shadow-2xl shadow-blue-900/30"
                      : "card-lift bg-white border border-slate-200"
                  }`}
                  data-testid={`engagement-${i}`}
                >
                  {e.highlight && (
                    <span className="self-start rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white mb-4">
                      Most popular
                    </span>
                  )}
                  <h3 className={`font-heading text-xl font-bold ${e.highlight ? "!text-white" : ""}`}>{e.name}</h3>
                  <p className={`text-sm mt-2 ${e.highlight ? "text-slate-400" : "text-slate-500"}`}>{e.best}</p>
                  <ul className="mt-6 space-y-3.5 flex-1">
                    {e.points.map((pt) => (
                      <li key={pt} className={`flex items-start gap-2.5 text-sm ${e.highlight ? "text-slate-300" : "text-slate-600"}`}>
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${e.highlight ? "text-cyan-300" : "text-blue-600"}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`mt-8 rounded-full min-h-11 ${
                      e.highlight ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                    data-testid={`engagement-cta-${i}`}
                  >
                    <Link to="/contact">Get a quote</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 sm:py-28 bg-[#F5F8FF] scroll-mt-20" data-testid="industries-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Industries</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-[2.6rem] font-bold tracking-tight mt-4 max-w-2xl leading-tight">
              Built around how your sector actually wins customers
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.05}>
                <Link to={`/services#${ind.service}`} className="group block h-full" data-testid={`industry-card-${i}`}>
                  <div className="card-lift h-full rounded-2xl bg-white border border-slate-200 p-7 flex gap-5">
                    <span className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-600/20">
                      <ind.icon className="w-5 h-5 text-white" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold flex items-center gap-1.5">
                        {ind.name}
                        <ArrowUpRight className="w-4 h-4 text-slate-300 transition-colors duration-200 group-hover:text-blue-600" />
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mt-1.5">{ind.detail}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-white" data-testid="faq-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-heading text-3xl sm:text-[2.6rem] font-bold tracking-tight mt-4 leading-tight">
              Questions we hear before every project
            </h2>
            <p className="text-base text-slate-500 mt-5">
              Something else on your mind? Message us on WhatsApp and a real person will reply.
            </p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi SL Launchers, I have a question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#0B1739] hover:border-emerald-500 hover:text-emerald-600 transition-colors duration-200"
              data-testid="faq-whatsapp"
            >
              <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-slate-200">
                  <AccordionTrigger className="text-left font-heading text-base sm:text-lg font-semibold text-[#0B1739] hover:no-underline py-5" data-testid={`faq-q-${i}`}>
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-slate-500 leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="relative py-20 sm:py-28 bg-ink overflow-hidden" data-testid="cta-section">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow w-[520px] h-[520px] bg-blue-600/25 -left-40 top-10" />
        <div className="glow w-[400px] h-[400px] bg-cyan-400/15 right-0 bottom-0" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <Eyebrow dark>Let's talk</Eyebrow>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight !text-white mt-4 leading-tight">
                Have an idea? <span className="text-gradient-hero">Let's launch it.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-400 mt-5 max-w-lg">
                Tell us what you're building. Within one business day you'll get a reply from a senior team member with honest next steps — even if that means we're not the right fit.
              </p>
              <div className="mt-9 space-y-3 max-w-md">
                {[
                  { icon: Phone, label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, id: "cta-phone-link" },
                  { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}`, id: "cta-email-link" },
                  { icon: MessageCircle, label: "Chat on WhatsApp", href: `https://wa.me/${CONTACT.whatsapp}`, id: "cta-whatsapp-link", ext: true },
                ].map((c) => (
                  <a
                    key={c.id}
                    href={c.href}
                    {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 rounded-xl glass-dark px-4 py-3.5 text-slate-200 hover:border-cyan-300/40 hover:text-white transition-colors duration-200"
                    data-testid={c.id}
                  >
                    <span className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-cyan-300" />
                    </span>
                    {c.label}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl bg-white p-7 sm:p-9 shadow-2xl shadow-black/40">
                <h3 className="font-heading text-xl font-bold">Request your free project plan</h3>
                <p className="text-sm text-slate-500 mt-1.5 mb-6">Takes about a minute. No obligation.</p>
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
