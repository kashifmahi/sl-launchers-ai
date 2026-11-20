import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { Button } from "../components/ui/button";
import { SERVICES, INDUSTRIES } from "../data/content";

export default function Services() {
  return (
    <div data-testid="services-page">
      <Seo
        title="Services — Web Development, AI, Blockchain & Marketing"
        description="Full-stack growth services from SL Launchers: web design & software development, AI development & automation, blockchain, SEO, PPC and social media marketing."
        path="/services"
      />

      <PageHero eyebrow="Our Expertise" title="Full-stack growth, from" highlight="code to customers" testid="services-hero">
        <p>Every service your business needs to build, launch and scale — delivered by one accountable team.</p>
      </PageHero>

      {/* QUICK NAV */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/90 backdrop-blur border-b border-slate-200" data-testid="services-subnav">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex gap-2 overflow-x-auto py-3">
          {SERVICES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
              {s.title.split(" & ")[0].replace("Search Engine Optimization", "SEO").replace("PPC", "PPC & Ads")}
            </a>
          ))}
        </div>
      </div>

      {/* DETAILED SERVICES */}
      <section className="py-16 sm:py-24 bg-white" data-testid="services-detail">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.05}>
              <div id={s.id} className="card-lift scroll-mt-40 rounded-2xl bg-white border border-slate-200 p-8 h-full flex flex-col" data-testid={`service-detail-${s.id}`}>
                <div className="flex items-start justify-between">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-600/20"><s.icon className="w-6 h-6 text-white" /></span>
                  <span className="font-heading text-xs font-bold text-slate-300 tracking-widest">0{i + 1}</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#0B1739] mt-6">{s.title}</h2>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-3">{s.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mt-6 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button asChild variant="outline" className="rounded-full bg-white hover:bg-slate-50 border-slate-300 text-[#0B1739] min-h-11" data-testid={`service-cta-${s.id}`}>
                    <Link to={`/contact?service=${encodeURIComponent(s.title)}`}>
                      Enquire about this <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="pb-16 sm:pb-24 bg-white" data-testid="services-strip">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-slate-200 relative h-72">
              <img src="/sl-hero.webp" alt="Artificial intelligence concept" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1739]/80 to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-300">AI Development</div>
                  <div className="font-heading font-bold text-lg text-white mt-1">Chatbots, ML models & automation</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 relative h-72">
              <img src="/sl-blockchain.webp" alt="Blockchain network concept" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1739]/80 to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-300">Blockchain Development</div>
                  <div className="font-heading font-bold text-lg text-white mt-1">Smart contracts, dApps & Web3</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 sm:py-24 bg-[#F5F8FF]" data-testid="services-industries">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Industries We Serve</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739] mt-4 max-w-2xl">
              Sector-specific strategies that convert
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.05}>
                <div className="card-lift rounded-2xl bg-white border border-slate-200 p-7 h-full" data-testid={`services-industry-${i}`}>
                  <ind.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="font-heading text-lg font-semibold text-[#0B1739] mt-4">{ind.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2">{ind.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 sm:py-28 bg-white" data-testid="services-approach">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">How We Work</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739] mt-4">
              One team, from first sketch to live product
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mt-5">
              Most businesses outgrow the patchwork approach — a freelancer for the website, another vendor for ads, a third for anything technical. Every handover loses context, and nobody owns the final result. We built SL Launchers to remove that friction: strategy, design, engineering and marketing sit in one team, so the people who plan your project are the same people who build and grow it.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mt-4">
              That structure matters most when a project spans more than one discipline. A new website rarely succeeds on design alone — it needs to rank, convert and connect to the systems your business already runs on. Because our developers work alongside our marketing specialists from day one, those requirements are designed in from the start rather than bolted on afterwards.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-[#F5F8FF] border border-slate-200 p-8">
              <h3 className="font-heading text-lg font-bold text-[#0B1739]">What you can expect</h3>
              <ul className="mt-5 space-y-4">
                {[
                  "A dedicated point of contact from discovery through launch",
                  "Clear scope, timeline and pricing agreed before any work begins",
                  "Regular progress updates in plain language, not technical jargon",
                  "Transparent reporting on what was delivered and what it achieved",
                  "Support and maintenance options for after your project goes live",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 bg-ink overflow-hidden" data-testid="services-cta">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow w-[460px] h-[460px] bg-blue-600/25 left-1/2 -translate-x-1/2 -top-20" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight !text-white">
              Not sure which service is right for you?
            </h2>
            <p className="text-base sm:text-lg text-slate-400 mt-5">
              Tell us what you're trying to achieve and we'll identify the right mix for your goals and budget. There's no obligation — the first conversation is about understanding your business, not selling you something you don't need.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 min-h-12 shadow-lg shadow-blue-600/30" data-testid="services-cta-button">
              <Link to="/contact">Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
