import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "lucide-react";
import {
  Menu, X, ChevronDown, Home as HomeIcon, Wrench, Info, Mail,
  Briefcase, Users, ShieldCheck, MessageSquareQuote, Newspaper,
  HelpCircle,
} from "lucide-react";
import { PRIMARY_NAV, MORE_NAV, SERVICES } from "../data";

const ICONS = {
  "/": HomeIcon, "/services": Wrench, "/about": Info, "/contact": Mail,
  "/projects": Briefcase, "/team": Users, "/certifications": ShieldCheck,
  "/testimonials": MessageSquareQuote, "/blog": Newspaper, "/faq": HelpCircle,
};

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "services" | "more" | null
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("touchstart", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("touchstart", onClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const toggleDropdown = (name) =>
    setOpenDropdown((cur) => (cur === name ? null : name));

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-white/95 backdrop-blur-sm"
      } border-b border-line`}
    >
      <div className={`container-page flex items-center justify-between transition-all duration-300 ${scrolled ? "py-1.5" : "py-2"}`}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          {logoOk ? (
            <img
              src="/logo.png"
              alt="Advanced Automation Systems"
              className={`w-auto rounded-xl transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}
              onError={() => setLogoOk(false)}
            />
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
        <nav ref={navRef} className="hidden md:flex items-center gap-1 ml-auto">
          {PRIMARY_NAV.map((n) => {
            if (n.path === "/services") {
              const active = location.pathname.startsWith("/services");
              const isOpen = openDropdown === "services";
              return (
                <div key={n.path} className="relative">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors border-b-2 ${
                      active ? "text-brand bg-brand/5 border-brand" : "text-gray-600 hover:text-navy hover:bg-offwhite border-transparent"
                    }`}
                  >
                    <Wrench size={15} /> {n.label}
                    <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[60]">
                      <div className="bg-white border border-line rounded-xl shadow-soft-lg overflow-hidden w-[36rem] p-4 grid grid-cols-2 gap-1">
                        {SERVICES.map((s) => {
                          const Icon = Icons[s.icon] || Wrench;
                          const to = `/services/${s.slug}`;
                          return (
                            <Link
                              key={s.slug}
                              to={to}
                              onClick={() => setOpenDropdown(null)}
                              className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-offwhite transition-colors"
                            >
                              <Icon size={18} className="text-brand shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-semibold text-navy">{s.title}</div>
                                <div className="text-xs text-gray-500 line-clamp-2">{s.blurb}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="bg-white border-x border-b border-line rounded-b-xl px-4 py-3">
                        <Link to="/services" onClick={() => setOpenDropdown(null)} className="text-sm font-semibold text-brand hover:underline">
                          View all services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const Icon = ICONS[n.path];
            const active = isActive(n.path);
            return (
              <Link
                key={n.path}
                to={n.path}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors border-b-2 ${
                  active ? "text-brand bg-brand/5 border-brand" : "text-gray-600 hover:text-navy hover:bg-offwhite border-transparent"
                }`}
              >
                {Icon && <Icon size={15} />} {n.label}
              </Link>
            );
          })}

          <div className="relative">
            <button
              onClick={() => toggleDropdown("more")}
              className="flex items-center gap-1 px-3.5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-navy hover:bg-offwhite transition-colors"
            >
              More <ChevronDown size={14} className={`transition-transform ${openDropdown === "more" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "more" && (
              <div className="absolute right-0 top-full pt-3 z-[60]">
                <div className="bg-white border border-line rounded-xl shadow-soft-lg overflow-hidden w-56 py-2">
                  {MORE_NAV.map((n) => {
                    const Icon = ICONS[n.path];
                    return (
                      <Link
                        key={n.path}
                        to={n.path}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-offwhite hover:text-brand transition-colors"
                      >
                        {Icon && <Icon size={16} className="text-brand/70" />} {n.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="btn-primary ml-3 !py-2.5 !px-5 text-sm">Get a Quote</Link>
        </nav>
      </div>
      </header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </>
    );
}
