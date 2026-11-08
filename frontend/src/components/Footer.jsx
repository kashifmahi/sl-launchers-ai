import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, SERVICES } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center" data-testid="footer-logo">
            <img src="/sl-logo-t.png" alt="SL Launchers — Software Solutions" className="h-12 w-auto" style={{ filter: "drop-shadow(0 0 0.75px white) drop-shadow(0 0 0.75px white)" }} />
          </Link>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            A USA-based software house delivering web development, digital marketing, AI and blockchain - everything under one roof, for clients worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-blue-500 mb-4">Services</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200" data-testid={`footer-service-${s.id}`}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-blue-500 mb-4">Company</h4>
          <ul className="space-y-2.5">
            <li><Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200" data-testid="footer-home">Home</Link></li>
            <li><Link to="/services" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200" data-testid="footer-services">Services</Link></li>
            <li><Link to="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200" data-testid="footer-blog">Blog</Link></li>
            <li><Link to="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200" data-testid="footer-contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-blue-500 mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors duration-200" data-testid="footer-email">{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-blue-500 shrink-0" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors duration-200" data-testid="footer-phone">{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-blue-500 shrink-0" />
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" data-testid="footer-whatsapp">WhatsApp us</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
              <span data-testid="footer-location">{CONTACT.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500" data-testid="footer-copyright">
        © {new Date().getFullYear()} SL Launchers. All rights reserved.
      </div>
    </footer>
  );
}
