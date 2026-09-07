import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Icons from "lucide-react";
import {
  X, ChevronDown, ChevronRight, Phone, Wrench,
  Home, FolderKanban, Mail, Newspaper, HelpCircle, ShieldCheck, FileText,
} from "lucide-react";
import { SERVICES, CONTACT_PHONE } from "../data";

const COMPANY_LINKS = [
  { path: "/about", label: "About Us" },
  { path: "/team", label: "Team" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/certifications", label: "Certifications" },
];

const FLAT_LINKS = [
  { path: "/projects", label: "Projects", icon: FolderKanban },
  { path: "/contact", label: "Contact", icon: Mail },
  { path: "/blog", label: "Insights", icon: Newspaper },
  { path: "/faq", label: "FAQ", icon: HelpCircle },
  { path: "/privacy-policy", label: "Privacy Policy", icon: ShieldCheck },
  { path: "/terms-of-use", label: "Terms of Use", icon: FileText },
];

export default function Sidebar({ open, onClose }) {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 shrink-0">
          {logoOk ? (
            <img
              src="/logo.png"
              alt="Advanced Automation Systems"
              className="h-14 w-auto"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="font-bold text-slate-900">Menu</span>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <Link
            to="/"
            onClick={onClose}
            className={`flex items-center gap-3 py-3 text-lg font-bold border-b border-slate-100 ${
              isActive("/") ? "text-blue-600" : "text-slate-900"
            }`}
          >
            <Home size={20} className="text-blue-600 shrink-0" />
            Home
          </Link>

          {/* Company section */}
          <button
            onClick={() => setCompanyOpen((v) => !v)}
            className="w-full flex items-center justify-between py-3 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            Company
            <ChevronDown
              size={16}
              className={`transition-transform ${companyOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              companyOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {COMPANY_LINKS.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 py-3 pl-1 text-base font-semibold ${
                    isActive(l.path) ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  <ChevronRight size={14} className="text-slate-400 shrink-0" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services section */}
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between py-3 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            Services
            <ChevronDown
              size={16}
              className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {SERVICES.map((s) => {
                const Icon = Icons[s.icon] || Wrench;
                const to = `/services/${s.slug}`;
                return (
                  <Link
                    key={s.slug}
                    to={to}
                    onClick={onClose}
                    className={`flex items-center gap-3 py-3 text-base font-bold ${
                      isActive(to) ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    <Icon size={20} className="text-blue-600 shrink-0" />
                    {s.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Remaining flat links */}
          {FLAT_LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.path}
                to={l.path}
                onClick={onClose}
                className={`flex items-center gap-3 py-3 text-lg font-bold border-b border-slate-100 ${
                  isActive(l.path) ? "text-blue-600" : "text-slate-900"
                }`}
              >
                <Icon size={20} className="text-blue-600 shrink-0" />
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="shrink-0 px-5 py-4 border-t border-slate-200 space-y-3">
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-blue-600 font-semibold"
          >
            <Phone size={18} />
            {CONTACT_PHONE}
          </a>
          <Link
            to="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
          >
            Get a Free Quote
            <ChevronRight size={18} />
          </Link>
        </div>
      </aside>
    </>
  );
}
