import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
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

      {/* HERO */}
      <section className="bg-[#F3F7FF] border-b border-slate-200 pt-28 sm:pt-40 pb-14 sm:pb-20" data-testid="services-hero">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Our Expertise</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1739] mt-5 max-w-3xl leading-[1.1]">
              Full-stack growth, from <span className="text-gradient-blue">code to customers</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mt-6 max-w-2xl">
              Every service your business needs to build, launch and scale — delivered by one accountable team serving clients worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-16 sm:py-24 bg-white" data-testid="services-detail">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.05}>
              <div id={s.id} className="card-lift scroll-mt-28 rounded-xl bg-white border border-slate-200 p-8 h-full flex flex-col" data-testid={`service-detail-${s.id}`}>
                <div className="flex items-start justify-between">
                  <s.icon className="w-10 h-10 text-blue-600" />
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
                  <Button asChild variant="outline" className="rounded-md bg-white hover:bg-slate-50 border-slate-300 text-[#0B1739] min-h-11" data-testid={`service-cta-${s.id}`}>
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
            <div className="rounded-xl overflow-hidden border border-slate-200 relative h-72">
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
            <div className="rounded-xl overflow-hidden border border-slate-200 relative h-72">
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
      <section className="py-16 sm:py-24 bg-[#F3F7FF] border-y border-slate-200" data-testid="services-industries">
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
                <div className="card-lift rounded-xl bg-white border border-slate-200 p-7 h-full" data-testid={`services-industry-${i}`}>
                  <ind.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="font-heading text-lg font-semibold text-[#0B1739] mt-4">{ind.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2">{ind.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-white" data-testid="services-cta">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1739]">
              Not sure which service is right for you?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 mt-5">
              Tell us what you're trying to achieve and we'll identify the right mix for your goals and budget.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-8 min-h-12" data-testid="services-cta-button">
              <Link to="/contact">Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
