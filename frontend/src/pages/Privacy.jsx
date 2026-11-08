import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { CONTACT } from "../data/content";

export default function Privacy() {
  return (
    <div data-testid="privacy-page">
      <Seo
        title="Privacy Policy"
        description="How SL Launchers collects, uses and protects your information."
        path="/privacy"
      />

      <section className="bg-[#F3F7FF] border-b border-slate-200 pt-28 sm:pt-40 pb-14 sm:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1739]">
              Privacy Policy
            </h1>
            <p className="text-base text-slate-500 mt-4">Last updated: November 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
          {[
            {
              h: "What we collect",
              p: "When you contact us through our forms, we collect your name, email address, phone number, company name and the project details you choose to share. We use this only to respond to your inquiry and discuss potential work together.",
            },
            {
              h: "How we use it",
              p: "We use your details to reply to your message, prepare a proposal if you ask for one, and — only if you subscribe — send occasional updates about our services. We do not sell your information or share it with third parties for their marketing.",
            },
            {
              h: "Analytics",
              p: "We use privacy-respecting analytics to understand how visitors use the site — which pages are read and where visitors come from — so we can improve it. This collects aggregated usage information, not personal profiles.",
            },
            {
              h: "Your choices",
              p: "You can ask us at any time to see, correct or delete the information we hold about you. Contact us at the address below and we will respond promptly.",
            },
            {
              h: "Contact",
              p: `Questions about this policy or your data? Email us at ${CONTACT.email}.`,
            },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div>
                <h2 className="font-heading text-xl font-bold text-[#0B1739]">{s.h}</h2>
                <p className="text-base text-slate-500 leading-relaxed mt-3">{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
