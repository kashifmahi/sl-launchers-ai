import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "../data/content";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3" data-testid="floating-actions">
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi SL Launchers, I'd like to discuss a project.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        data-testid="floating-whatsapp-button"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        className="w-13 h-13 p-3.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
        data-testid="floating-call-button"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
