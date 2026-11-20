import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
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

      <PageHero eyebrow="Contact" title="Let's build something" highlight="great together" testid="contact-hero">
        <p>
          Tell us about your project and we'll respond within one business day with clear next steps — whether it's a new website, a custom application, AI automation, a blockchain platform or a growth campaign.
        </p>
        <p className="text-base">
          Every enquiry is read by a member of our team, not a call centre. If we're not the right fit, we'll tell you honestly and point you in the right direction.
        </p>
      </PageHero>

      <section className="bg-[#F5F8FF] pb-20 sm:pb-28" data-testid="contact-body">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pt-14">
            <div className="lg:col-span-2 space-y-4">
              {channels.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.05}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="card-lift flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-5"
                      data-testid={c.testid}
                    >
                      <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-white" />
                      </span>
                      <span>
                        <span className="block text-xs text-slate-400">{c.label}</span>
                        <span className="block text-sm font-medium text-[#0B1739] mt-0.5">{c.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="card-lift flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-5" data-testid={c.testid}>
                      <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-white" />
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
              <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-9 shadow-xl shadow-blue-900/5" data-testid="contact-form-card">
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
