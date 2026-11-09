import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import EnquiryForm from "../components/EnquiryForm";
import { CONTACT } from "../data/content";

export default function Contact() {
  const [params] = useSearchParams();
  const service = params.get("service") || "";

  const channels = [
    { icon: Mail, label: "Email us", value: CONTACT.email, href: `mailto:${CONTACT.email}`, testid: "contact-email" },
    { icon: Phone, label: "Call us", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}`, testid: "contact-phone" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us now", href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi SL Launchers, I'd like to discuss a project.")}`, testid: "contact-whatsapp" },
    { icon: MapPin, label: "Location", value: CONTACT.location, testid: "contact-location" },
  ];

  return (
    <div data-testid="contact-page">
      <Seo
        title="Contact — Start Your Project"
        description="Tell SL Launchers about your project — web development, SEO, AI or blockchain — and we'll respond within one business day with clear next steps."
        path="/contact"
      />

      <section className="bg-[#F3F7FF] border-b border-slate-200 pt-28 sm:pt-40 pb-16 sm:pb-24" data-testid="contact-hero">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <span className="text-xs tracking-[0.25em] uppercase font-bold text-blue-600">Contact</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#0B1739] mt-5 max-w-3xl leading-[1.1]">
              Let's build something <span className="text-gradient-blue">great together</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-slate-500 mt-6 max-w-2xl">
              Tell us about your project and we'll respond within one business day with clear next steps. Whether you need a new website, a custom application, AI automation, a blockchain platform or a growth campaign, the fastest way to start is a short conversation about where your business is heading.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mt-4 max-w-2xl">
              Every inquiry is read by a member of our team — not routed through a call centre. If your project isn't a good fit for us, we'll tell you honestly and point you in the right direction.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-14 pb-6">
            <div className="lg:col-span-2 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.05}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="card-lift flex items-center gap-4 rounded-xl bg-white border border-slate-200 p-5"
                      data-testid={c.testid}
                    >
                      <span className="w-11 h-11 rounded-md bg-blue-600/10 border border-blue-600/15 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-blue-600" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-400">{c.label}</span>
                        <span className="block text-sm font-medium text-[#0B1739] mt-0.5">{c.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="card-lift flex items-center gap-4 rounded-xl bg-white border border-slate-200 p-5" data-testid={c.testid}>
                      <span className="w-11 h-11 rounded-md bg-blue-600/10 border border-blue-600/15 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-blue-600" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-400">{c.label}</span>
                        <span className="block text-sm font-medium text-[#0B1739] mt-0.5">{c.value}</span>
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="lg:col-span-3">
              <div className="rounded-xl bg-white border border-slate-200 p-7 sm:p-9 shadow-sm" data-testid="contact-form-card">
                <h2 className="font-heading text-2xl font-bold text-[#0B1739] mb-6">Tell us about your project</h2>
                <EnquiryForm defaultService={service} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
