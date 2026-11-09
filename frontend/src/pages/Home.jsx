import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { Button } from "../components/ui/button";
import { SERVICES, PROCESS, WHY_US, INDUSTRIES, CONTACT } from "../data/content";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Seo
        title="SL Launchers — Software, AI & Blockchain. Built for Your Business."
        description="From websites and custom applications to intelligent automation and blockchain platforms, SL Launchers brings development and digital growth together in one team."
        path="/"
      />

      {/* HERO */}
      <section className="bg-[#F3F7FF] pt-28 sm:pt-40 pb-16 sm:pb-24" data-testid="hero-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600" data-testid="hero-eyebrow">
              Serving Clients Worldwide
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#0B1739] mt-5 leading-[1.1] max-w-4xl mx-auto" data-testid="hero-heading">
              Software, AI & Blockchain.{" "}
              <span className="text-gradient-blue">Built for Your Business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mt-6 max-w-2xl mx-auto" data-testid="hero-subheading">
              From websites and custom applications to intelligent automation and blockchain platforms, SL Launchers brings development and digital growth together in one team.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Button asChild size="lg" className="rounded-md bg-blue-600 hover:bg-blue-500 text-white px-7 min-h-12" data-testid="hero-cta-primary">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white hover:bg-slate-50 border-slate-300 text-[#0B1739] px-7 min-h-12" data-testid="hero-cta-secondary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="border-y border-slate-200 py-8 bg-white" data-testid="trust-ticker">
        <p className="text-center text-xs tracking-[0.25em] uppercase font-bold text-slate-400 mb-6">
          Serving startups, businesses and enterprises worldwide
        </p>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {["SaaS & Startups", "E-commerce", "Healthcare", "Real Estate", "Fintech & Web3", "Professional Services", "Hospitality", "AI Products"].map((n) => (
            <span key={n} className="text-slate-500 font-heading font-semibold text-sm tracking-wide" data-testid="ticker-item">
              {n}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 sm:py-28 bg-white" data-testid="services-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Our Services</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739] mt-4 max-w-2xl">
              One team for software, marketing, AI and blockchain
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <Link to={`/services#${s.id}`} className="block h-full" data-testid={`service-card-${s.id}`}>
                  <div className="card-lift h-full rounded-xl bg-white border border-slate-200 p-7 flex flex-col">
                    <s.icon className="w-9 h-9 text-blue-600" />
                    <h3 className="font-heading text-xl font-semibold text-[#0B1739] mt-5">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-2.5">{s.tagline}</p>
                    <ul className="mt-4 space-y-1.5">
                      {s.items.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-600 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium mt-auto pt-5">
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
      <section className="py-20 sm:py-28 bg-[#F3F7FF] border-y border-slate-200" data-testid="process-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Our Process</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739] mt-4 max-w-2xl">
              A simple, transparent path to launch
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="card-lift rounded-xl bg-white border border-slate-200 p-7 h-full" data-testid={`process-step-${i}`}>
                  <span className="font-heading text-4xl font-black text-blue-600/20">{p.step}</span>
                  <h3 className="font-heading text-lg font-semibold text-[#0B1739] mt-4">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2.5">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 sm:py-28 bg-[#0B1739] text-white" data-testid="why-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-cyan-300">Why SL Launchers</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mt-4">
                Development, marketing and emerging tech from one team
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-blue-100/70 mt-5">
                From your first landing page to a full decentralised platform, you get one senior team that designs, builds and markets it all.
              </p>
              <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
                <img src="/sl-office.webp" alt="SL Launchers team at work" className="w-full h-64 object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="card-lift rounded-xl bg-white/5 border border-white/10 p-6 h-full" data-testid={`why-item-${i}`}>
                    <CheckCircle2 className="w-6 h-6 text-cyan-300" />
                    <h3 className="font-heading text-base font-semibold text-white mt-3.5">{w.title}</h3>
                    <p className="text-sm text-blue-100/70 leading-relaxed mt-2">{w.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 sm:py-28 bg-white" data-testid="industries-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Industries We Serve</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739] mt-4 max-w-2xl">
              Built for high-growth sectors, B2B and B2C
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.05}>
                <div className="card-lift rounded-xl bg-[#F3F7FF] border border-slate-200 p-7 h-full" data-testid={`industry-card-${i}`}>
                  <ind.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="font-heading text-lg font-semibold text-[#0B1739] mt-4">{ind.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2">{ind.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-20 sm:py-28 bg-[#F3F7FF] border-t border-slate-200" data-testid="cta-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Let's Talk</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739] mt-4">
                Ready to build something great together?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500 mt-5">
                Tell us about your project and we'll map out a clear path forward — software, marketing, AI or blockchain.
              </p>
              <div className="mt-8 space-y-3">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-slate-600 hover:text-[#0B1739] transition-colors duration-200" data-testid="cta-phone-link">
                  <span className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-blue-600" /></span>
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-slate-600 hover:text-[#0B1739] transition-colors duration-200" data-testid="cta-email-link">
                  <span className="w-10 h-10 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0"><ArrowRight className="w-4 h-4 text-blue-600" /></span>
                  {CONTACT.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-xl bg-white border border-slate-200 p-7 sm:p-9 shadow-sm">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
