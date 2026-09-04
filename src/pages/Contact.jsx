import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_PHONE, CONTACT_EMAIL } from "../data";
import WhatsAppButton from "../components/WhatsAppButton";
import SectionHeading from "../components/ui/SectionHeading";

export default function Contact() {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid blueprint-fade pointer-events-none" />
      <div className="glow-orb w-96 h-96 -top-32 right-0 opacity-[0.10]" style={{ background: "#1a63d6" }} />
      <div className="max-w-4xl mx-auto relative section-pad-sm">
        <div className="px-6">
          <SectionHeading eyebrow="Get in touch" title="Let's talk about your system" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-xl p-6 space-y-5">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-navy">
                <span className="w-9 h-9 rounded-xl icon-tile-sky shadow-soft flex items-center justify-center shrink-0"><Phone className="text-white" size={16} /></span>
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-navy break-all">
                <span className="w-9 h-9 rounded-xl icon-tile-amber shadow-soft flex items-center justify-center shrink-0"><Mail className="text-white" size={16} /></span>
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-3 text-navy">
                <span className="w-9 h-9 rounded-xl icon-tile-teal shadow-soft flex items-center justify-center shrink-0"><MapPin className="text-white" size={16} /></span>
                Serving clients across Kenya
              </div>
              <div className="pt-2"><WhatsAppButton full /></div>
            </div>
            <div className="bg-white border border-line rounded-xl shadow-soft p-6 space-y-4">
              <input placeholder="Your name" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:border-brand" />
              <input placeholder="Phone or email" className="w-full border border-line rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:border-brand" />
              <textarea placeholder="What do you need help with?" rows={4} className="w-full border border-line rounded-xl px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:border-brand" />
              <button className="btn-primary w-full justify-center">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
