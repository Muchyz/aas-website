import { Phone } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { WHATSAPP_NUMBER, CONTACT_PHONE } from "../../data";

export default function CTA() {
  return (
    <section className="section-pad bg-brand relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 10%, white 1px, transparent 1px), radial-gradient(circle at 90% 80%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 56px 56px",
        }}
      />
      <div className="relative container-page flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Have a system that needs attention?</h3>
          <p className="text-white/80 mt-3 max-w-md">
            Tell us what's happening and we'll get back to you the same day.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors shadow-soft">
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 bg-navy/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-navy/30 transition-colors">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
