import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { Button } from "../components/ui/button";
import { SERVICES, INDUSTRIES, IMAGES } from "../data/content";

export default function Services() {
  return (
    <div data-testid="services-page">
      <Seo
        title="Services — Web Development, SEO, AI, Blockchain & Marketing"
        description="Full-stack growth services from SL Launchers: web design & development, SEO, social media marketing, PPC, blockchain development and AI development."
        path="/services"
      />
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-16 sm:pb-24" data-testid="services-hero">
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/20 -top-40 -right-40" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Our Expertise</span>
            <h1 className="font-heading text-5xl sm:text-6xl font-black tracking-tighter mt-5 max-w-3xl leading-[1.05]">
              Full-stack growth, from <span className="text-gradient-blue">code to customers</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mt-6 max-w-2xl">
              Every service your business needs to build, launch and scale - delivered by one accountable team in the USA, serving clients worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="pb-24 sm:pb-32" data-testid="services-detail">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.08}>
              <div className="card-lift rounded-lg bg-zinc-900 border border-white/5 p-8 h-full flex flex-col" data-testid={`service-detail-${s.id}`}>
                <div className="flex items-start justify-between">
                  <s.icon className="w-10 h-10 text-blue-500" />
                  <span className="font-heading text-xs font-bold text-zinc-600 tracking-widest">0{i + 1}</span>
                </div>
                <h2 className="font-heading text-2xl font-bold mt-6">{s.title}</h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mt-3">{s.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mt-6 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button asChild variant="outline" className="rounded-md bg-white/5 hover:bg-white/10 border-white/10 text-white" data-testid={`service-cta-${s.id}`}>
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

      {/* FEATURED IMAGE STRIP */}
      <section className="pb-24 sm:pb-32" data-testid="services-strip">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-lg overflow-hidden border border-white/10 relative h-72">
              <img src={IMAGES.hero} alt="Artificial intelligence technology" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase font-bold text-cyan-400">AI Development</div>
                  <div className="font-heading font-bold text-lg mt-1">Chatbots, ML models & automation</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-lg overflow-hidden border border-white/10 relative h-72">
              <img src={IMAGES.blockchain} alt="Blockchain network" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase font-bold text-blue-400">Blockchain Development</div>
                  <div className="font-heading font-bold text-lg mt-1">Smart contracts, dApps & Web3</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 sm:py-32 bg-zinc-950 border-y border-white/5" data-testid="services-industries">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Industries We Serve</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-4 max-w-2xl">
              Sector-specific strategies that convert
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.06}>
                <div className="card-lift rounded-lg bg-black border border-white/5 p-7 h-full" data-testid={`services-industry-${i}`}>
                  <ind.icon className="w-8 h-8 text-blue-500" />
                  <h3 className="font-heading text-lg font-semibold mt-4">{ind.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2">{ind.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden" data-testid="services-cta">
        <div className="hero-glow w-[400px] h-[400px] bg-blue-600/20 top-0 left-1/3" />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
          <Reveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Not sure which service is right for you?
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-5">
              Tell us what you're trying to achieve and we'll identify the right mix for your goals and budget.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-8" data-testid="services-cta-button">
              <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
