import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, highlight, children, testid, compact = false }) {
  return (
    <section
      className={`relative bg-ink overflow-hidden pt-32 sm:pt-40 ${compact ? "pb-14 sm:pb-16" : "pb-16 sm:pb-24"}`}
      data-testid={testid}
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="glow w-[480px] h-[480px] bg-blue-600/30 -top-40 -left-24" />
      <div className="glow w-[380px] h-[380px] bg-cyan-400/15 top-10 right-0" />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-bold text-cyan-300">
              <span className="w-6 h-px bg-cyan-300" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight !text-white mt-5 max-w-3xl leading-[1.08]">
            {title} {highlight && <span className="text-gradient-hero">{highlight}</span>}
          </h1>
          {children && <div className="text-base sm:text-lg leading-relaxed text-slate-400 mt-6 max-w-2xl space-y-4">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
