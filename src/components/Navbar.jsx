import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Home as HomeIcon, Wrench, Info, Mail,
  Briefcase, Users, ShieldCheck, MessageSquareQuote, Newspaper,
  HelpCircle, Phone,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { PRIMARY_NAV, MORE_NAV, CONTACT_PHONE, WHATSAPP_NUMBER } from "../data";

const ICONS = {
  "/": HomeIcon, "/services": Wrench, "/about": Info, "/contact": Mail,
  "/projects": Briefcase, "/team": Users, "/certifications": ShieldCheck,
  "/testimonials": MessageSquareQuote, "/blog": Newspaper, "/faq": HelpCircle,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-white/95 backdrop-blur-sm"
      } border-b border-line`}
    >
      <div className="hidden md:flex bg-navy text-white text-xs">
        <div className="container-page w-full flex items-center justify-end gap-6 py-2">
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-sky transition-colors">
            <Phone size={12} /> {CONTACT_PHONE}
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-sky transition-colors">
            <WhatsAppIcon size={12} /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          {logoOk ? (
            <img src="/logo.png" alt="Advanced Automation Systems" className="h-14 w-auto" onError={() => setLogoOk(false)} />
          ) : (
            <span className="text-lg font-bold text-navy">
              ADVANCED AUTOMATION <span className="text-brand">SYSTEMS</span>
            </span>
          )}
        </Link>

          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {PRIMARY_NAV.map((n) => {
            const Icon = ICONS[n.path];
            const active = location.pathname === n.path;
            return (
              <Link
                key={n.path}
                to={n.path}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? "text-brand bg-brand/5" : "text-gray-600 hover:text-navy hover:bg-offwhite"
                }`}
              >
                {Icon && <Icon size={15} />} {n.label}
              </Link>
            );
          })}

          <div className="relative group">
            <button className="flex items-center gap-1 px-3.5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-navy hover:bg-offwhite transition-colors">
              More <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 top-full pt-3 hidden group-hover:block z-[60]">
              <div className="bg-white border border-line rounded-xl shadow-soft-lg overflow-hidden w-56 py-2">
                {MORE_NAV.map((n) => {
                  const Icon = ICONS[n.path];
                  return (
                    <Link
                      key={n.path}
                      to={n.path}
                      className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-offwhite hover:text-brand transition-colors"
                    >
                      {Icon && <Icon size={16} className="text-brand/70" />} {n.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/contact" className="btn-primary ml-3 !py-2.5 !px-5 text-sm">Get a Quote</Link>
        </nav>
      </div>
      </header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </>
    );
}
