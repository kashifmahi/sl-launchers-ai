import { CalendarCheck, Video, Clock, Globe2, ExternalLink, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { BOOKING_URL, CONTACT } from "../data/content";

const perks = [
  { icon: Clock, title: "30 minutes, free", text: "A focused call about your goals — no sales pitch." },
  { icon: Video, title: "Google Meet", text: "The Meet link arrives in your calendar invite instantly." },
  { icon: Globe2, title: "Your time zone", text: "Times are shown in your local time automatically." },
  { icon: CalendarCheck, title: "Clear next steps", text: "You leave with a plan, timeline and rough budget." },
];

export default function Book() {
  return (
    <div data-testid="book-page">
      <Seo
        title="Book a Free Strategy Call"
        description="Pick a time for a free 30-minute Google Meet call with SL Launchers about your website, app, AI, blockchain or marketing project."
        path="/book"
      />

      <PageHero eyebrow="Book a call" title="Pick a time that" highlight="works for you" testid="book-hero" compact>
        <p>Choose a slot below and you'll get a calendar invite with a Google Meet link straight away.</p>
      </PageHero>

      <section className="bg-[#F5F8FF] pb-20 sm:pb-28" data-testid="book-body">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-8 pt-14">
          <div className="space-y-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl bg-white border border-slate-200 p-5">
                  <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{p.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <p className="text-sm text-slate-500 px-1 pt-2">
                No slot that suits you?{" "}
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi SL Launchers, I'd like to book a call.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-500"
                  data-testid="book-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" /> Message us on WhatsApp
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-900/5 overflow-hidden" data-testid="booking-widget">
              <iframe
                src={`${BOOKING_URL}?gv=true`}
                title="Book a call with SL Launchers"
                className="w-full h-[720px] border-0"
                loading="lazy"
              />
              <div className="border-t border-slate-200 px-5 py-3 text-right">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-blue-600"
                  data-testid="booking-open-new-tab"
                >
                  Open booking page in a new tab <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
