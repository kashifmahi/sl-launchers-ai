import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { ArrowRight, CheckCircle2, Quote, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { Button } from "../components/ui/button";
import { SERVICES, PROCESS, WHY_US, INDUSTRIES, STATS, TESTIMONIALS, IMAGES, CONTACT } from "../data/content";

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-20 sm:pb-28" data-testid="hero-section">
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/25 -top-40 -left-40" />
        <div className="hero-glow w-[400px] h-[400px] bg-cyan-500/15 top-20 right-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500" data-testid="hero-eyebrow">
                Software House - USA, Serving Worldwide
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mt-5 leading-[1.05]" data-testid="hero-heading">
                Everything Under <span className="text-gradient-blue">One Roof.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mt-6 max-w-2xl" data-testid="hero-subheading">
                SL Launchers builds your website, grows your traffic, and engineers the AI and blockchain products most software houses can't - one accountable team for startups, businesses and enterprises.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-9">
                <Button asChild size="lg" className="rounded-md bg-blue-600 hover:bg-blue-500 text-white px-7" data-testid="hero-cta-primary">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-md bg-white/5 hover:bg-white/10 border-white/10 text-white px-7" data-testid="hero-cta-secondary">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST TICKER */}
      <section className="border-y border-white/5 py-8 bg-zinc-950" data-testid="trust-ticker">
        <p className="text-center text-xs tracking-[0.25em] uppercase font-bold text-zinc-500 mb-6">
          Trusted by startups and businesses across the USA & worldwide
        </p>
        <Marquee speed={40} gradient={false}>
          {["SaaS & Startups", "E-commerce", "Healthcare", "Real Estate", "Fintech & Web3", "Professional Services", "Hospitality", "AI Products"].map((n) => (
            <span key={n} className="mx-8 text-zinc-500 font-heading font-semibold text-sm tracking-wide" data-testid="ticker-item">
              {n}
            </span>
          ))}
        </Marquee>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 sm:py-32" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Our Services</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4 max-w-2xl">
              One team for software, marketing, AI and blockchain
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.07}>
                <Link to="/services" className="block h-full" data-testid={`service-card-${s.id}`}>
                  <div className="card-lift h-full rounded-lg bg-zinc-900 border border-white/5 p-7">
                    <s.icon className="w-9 h-9 text-blue-500" />
                    <h3 className="font-heading text-xl font-semibold mt-5">{s.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">{s.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-blue-500 font-medium mt-5">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 sm:py-32 bg-zinc-950 border-y border-white/5" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Our Process</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4 max-w-2xl">
              A simple, transparent path to launch
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="card-lift rounded-lg bg-black border border-white/5 p-7 h-full" data-testid={`process-step-${i}`}>
                  <span className="font-heading text-4xl font-black text-blue-600/40">{p.step}</span>
                  <h3 className="font-heading text-lg font-semibold mt-4">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2.5">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 sm:py-32 relative overflow-hidden" data-testid="why-section">
        <div className="hero-glow w-[400px] h-[400px] bg-blue-600/15 top-1/3 -right-40" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Why SL Launchers</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4">
                Blockchain & AI expertise most software houses can't offer
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mt-5">
                From your first landing page to a full decentralised platform, you get one senior team that designs, builds and markets it all.
              </p>
              <div className="mt-8 rounded-lg overflow-hidden border border-white/10">
                <img src={IMAGES.office} alt="SL Launchers team at work" className="w-full h-64 object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="card-lift rounded-lg bg-zinc-900 border border-white/5 p-6 h-full" data-testid={`why-item-${i}`}>
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    <h3 className="font-heading text-base font-semibold mt-3.5">{w.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2">{w.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 sm:py-32 bg-zinc-950 border-y border-white/5" data-testid="industries-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Industries We Serve</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4 max-w-2xl">
              Built for high-growth sectors, B2B and B2C
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.06}>
                <div className="card-lift rounded-lg bg-black border border-white/5 p-7 h-full" data-testid={`industry-card-${i}`}>
                  <ind.icon className="w-8 h-8 text-blue-500" />
                  <h3 className="font-heading text-lg font-semibold mt-4">{ind.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2">{ind.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="text-center py-8 rounded-lg bg-zinc-900 border border-white/5" data-testid={`stat-${i}`}>
                  <div className="font-heading text-4xl sm:text-5xl font-black text-gradient-blue">{s.value}</div>
                  <div className="text-sm text-zinc-400 mt-2">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 sm:py-32 bg-zinc-950 border-y border-white/5" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Testimonials</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4 max-w-2xl">
              What our clients say
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card-lift rounded-lg bg-black border border-white/5 p-7 h-full" data-testid={`testimonial-${i}`}>
                  <Quote className="w-7 h-7 text-blue-600/60" />
                  <p className="text-sm text-zinc-300 leading-relaxed mt-4">{t.quote}</p>
                  <div className="mt-6">
                    <div className="font-heading font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-24 sm:py-32 relative overflow-hidden" data-testid="cta-section">
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/20 -bottom-40 -left-40" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Let's Talk</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4">
                Ready to launch your next big thing?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mt-5">
                Tell us about your project and we'll map out a clear path to scale - software, marketing, AI or blockchain.
              </p>
              <div className="mt-8 space-y-3">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors duration-200" data-testid="cta-phone-link">
                  <span className="w-10 h-10 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center"><Phone className="w-4 h-4 text-blue-500" /></span>
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors duration-200" data-testid="cta-email-link">
                  <span className="w-10 h-10 rounded-md bg-zinc-900 border border-white/10 flex items-center justify-center"><ArrowRight className="w-4 h-4 text-blue-500" /></span>
                  {CONTACT.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-lg bg-zinc-900 border border-white/10 p-7 sm:p-9">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
