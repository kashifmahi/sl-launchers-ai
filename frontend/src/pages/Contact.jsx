import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { CONTACT } from "../data/content";

export default function Contact() {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  const channels = [
    {
      icon: Mail,
      label: "Email us",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      testid: "contact-email",
    },
    {
      icon: Phone,
      label: "Call us",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
      testid: "contact-phone",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us now",
      href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi SL Launchers, I'd like to discuss a project.")}`,
      testid: "contact-whatsapp",
    },
    {
      icon: MapPin,
      label: "Location",
      value: CONTACT.location,
      testid: "contact-location",
    },
  ];

  return (
    <div data-testid="contact-page">
      <section className="relative overflow-hidden pt-32 sm:pt-44 pb-24 sm:pb-32" data-testid="contact-hero">
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/20 -top-40 -right-40" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-500">Contact</span>
            <h1 className="font-heading text-5xl sm:text-6xl font-black tracking-tighter mt-5 max-w-3xl leading-[1.05]">
              Let's build something <span className="text-gradient-blue">great together</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-400 mt-6 max-w-2xl">
              Tell us about your project and we'll respond within one business day with clear next steps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
            <div className="lg:col-span-2 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="card-lift flex items-center gap-4 rounded-lg bg-zinc-900 border border-white/5 p-5"
                      data-testid={c.testid}
                    >
                      <span className="w-11 h-11 rounded-md bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-blue-500" />
                      </span>
                      <span>
                        <span className="block text-xs text-zinc-500">{c.label}</span>
                        <span className="block text-sm font-medium text-white mt-0.5">{c.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="card-lift flex items-center gap-4 rounded-lg bg-zinc-900 border border-white/5 p-5" data-testid={c.testid}>
                      <span className="w-11 h-11 rounded-md bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-blue-500" />
                      </span>
                      <span>
                        <span className="block text-xs text-zinc-500">{c.label}</span>
                        <span className="block text-sm font-medium text-white mt-0.5">{c.value}</span>
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="lg:col-span-3">
              <div className="rounded-lg bg-zinc-900 border border-white/10 p-7 sm:p-9" data-testid="contact-form-card">
                <h2 className="font-heading text-2xl font-bold mb-6">Tell us about your project</h2>
                <EnquiryForm defaultService={service} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
