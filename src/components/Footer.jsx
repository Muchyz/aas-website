import { Link } from "react-router-dom";
import { ChevronRight, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { PRIMARY_NAV, MORE_NAV, CONTACT_PHONE, CONTACT_EMAIL, WHATSAPP_NUMBER, SERVICES } from "../data";

const COLUMNS = [
  {
    label: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/team", label: "Team" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/certifications", label: "Certifications" },
    ],
  },
  {
    label: "Services",
    links: SERVICES.map((s) => ({ to: `/services/${s.slug}`, label: s.title })),
  },
  {
    label: "Support",
    links: [
      { to: "/contact", label: "Contact Us" },
      { to: "/faq", label: "FAQ" },
      { to: "/blog", label: "Insights" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="relative mt-24">
        <div
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0a1128 0%, #0f1c3f 45%, #0a1128 100%)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px z-10"
            style={{
              background: "linear-gradient(to right, transparent, #38bdf8, #60a5fa, #38bdf8, transparent)",
              boxShadow: "0 0 10px 1px rgba(56,189,248,0.7), 0 0 24px 4px rgba(56,189,248,0.35)",
            }}
          />
          <div className="absolute -top-32 left-1/3 w-[30rem] h-[30rem] rounded-full opacity-[0.09] blur-3xl pointer-events-none" style={{ background: "#2563eb" }} />
          <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] rounded-full opacity-[0.07] blur-3xl pointer-events-none" style={{ background: "#0ea5e9" }} />

          {/* Logo */}
          <div className="relative container-page pt-10 pb-6 flex justify-center">
            <img src="/logo.png" alt="Advanced Automation Systems" className="h-14 w-auto" />
          </div>

          {/* Main content */}
          <div className="relative container-page pb-12">
            <div className="grid sm:grid-cols-12 gap-x-8 gap-y-10">

              {/* About / contact block */}
              <div className="sm:col-span-4">
                <div className="border-l-2 border-blue-500/50 pl-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Kenya's trusted automation and electrical partner — protecting production lines,
                    panels, and plants with excellence and commitment.
                  </p>
                </div>
                <div className="mt-5 space-y-2.5">
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    <Phone size={13} className="text-blue-500/70 shrink-0" /> {CONTACT_PHONE}
                  </a>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors break-all">
                    <Mail size={13} className="text-blue-500/70 shrink-0" /> {CONTACT_EMAIL}
                  </a>
                  <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                    <MapPin size={13} className="text-blue-500/70 shrink-0" /> Serving clients across Kenya
                  </div>
                </div>
              </div>

              {/* Link columns */}
              <div className="sm:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
                {COLUMNS.map((col) => (
                  <div key={col.label}>
                    <div className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                      {col.label}
                    </div>
                    <div className="h-0.5 w-6 bg-blue-500 mb-3" />
                    <div className="flex flex-col gap-2">
                      {col.links.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          className="flex items-center gap-1 text-slate-400 hover:text-blue-400 text-sm transition-colors w-fit"
                        >
                          <ChevronRight size={13} className="text-blue-500/60 shrink-0" />
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Copyright bar */}
          <div className="relative border-t border-white/[0.06]">
            <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <span>© {new Date().getFullYear()} Advanced Automation Systems Limited. All rights reserved.</span>
              <Link to="/faq" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating action buttons */}
      <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-2.5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,99,235,0.5)] transition-all hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon size={20} />
        </a>
      </div>
    </>
  );
}
