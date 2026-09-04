import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown,
  Home, Wrench, FolderKanban, Users, Phone,
  MessageSquareQuote, ShieldCheck, Newspaper, HelpCircle,
} from "lucide-react";

const ICONS = {
  "/": Home,
  "/services": Wrench,
  "/projects": FolderKanban,
  "/about": Users,
  "/contact": Phone,
  "/team": Users,
  "/testimonials": MessageSquareQuote,
  "/certifications": ShieldCheck,
  "/blog": Newspaper,
  "/faq": HelpCircle,
};

const SECTIONS = [
  {
    id: "main",
    label: "Explore",
    items: [
      { path: "/", label: "Home" },
      { path: "/services", label: "Services" },
      { path: "/projects", label: "Projects" },
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
    ],
  },
  {
    id: "more",
    label: "More",
    items: [
      { path: "/team", label: "Team" },
      { path: "/testimonials", label: "Testimonials" },
      { path: "/certifications", label: "Certifications" },
      { path: "/blog", label: "Insights" },
      { path: "/faq", label: "FAQ" },
    ],
  },
];

export default function Sidebar({ open, onClose }) {
  const [openSections, setOpenSections] = useState({ main: true, more: true });
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();

  const toggleSection = (id) =>
    setOpenSections((s) => ({ ...s, [id]: !s[id] }));

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-4/5 bg-white z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          {logoOk ? (
              <img src="/logo.png" alt="Advanced Automation Systems" className="h-12 w-auto" onError={() => setLogoOk(false)} />
            ) : (
              <span className="font-semibold text-slate-900">Menu</span>
            )}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-64px)] px-3 py-4">
          {SECTIONS.map((section) => {
            const isOpen = openSections[section.id];
            return (
              <div key={section.id} className="mb-2">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {section.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {section.items.map((item) => {
                      const Icon = ICONS[item.path] || Home;
                      const active = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={onClose}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base transition-colors ${
                            active
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-black hover:bg-slate-50 hover:text-black"
                          }`}
                        >
                          <Icon size={18} className="text-slate-500" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
