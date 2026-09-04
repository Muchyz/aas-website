#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "→ Step 1/3: cat — writing src/components/Sidebar.jsx"
cat > src/components/Sidebar.jsx << 'EOF'
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
        className={`fixed top-0 left-0 h-full w-1/2 max-w-sm bg-white z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <span className="font-semibold text-slate-900">Menu</span>
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
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                            active
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <Icon size={18} className={active ? "text-blue-700" : "text-slate-400"} />
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
EOF

echo "→ Step 2/3: python3 — wiring Sidebar into Navbar.jsx"
python3 << 'PYEOF'
import re

p = "src/components/Navbar.jsx"
s = open(p).read()

# Add Sidebar import if missing
if 'import Sidebar from "./Sidebar"' not in s:
    s = s.replace(
        'import { PRIMARY_NAV, MORE_NAV } from "../data";',
        'import { PRIMARY_NAV, MORE_NAV } from "../data";\nimport Sidebar from "./Sidebar";'
    )

# Add sidebarOpen state if missing
if "sidebarOpen" not in s:
    s = re.sub(
        r'(const \[menuOpen, setMenuOpen\] = useState\(false\);)',
        r'\1\n  const [sidebarOpen, setSidebarOpen] = useState(false);',
        s
    )

# Add trigger button right after the opening <header ...> line's first div, before nav
if "setSidebarOpen(true)" not in s:
    s = re.sub(
        r'(<Link to="/" className="flex items-center gap-2">)',
        r'''<button
          onClick={() => setSidebarOpen(true)}
          className="p-2 -ml-2 mr-1 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        \1''',
        s,
        count=1
    )

# Render <Sidebar /> before closing </header>
if "<Sidebar" not in s:
    s = re.sub(
        r'(\s*)</header>',
        r'\1  <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />\n\1</header>',
        s,
        count=1
    )

open(p, "w").write(s)
print("  patched Navbar.jsx")
PYEOF

echo "→ Step 3/3: sed — ensure Menu icon is imported in Navbar.jsx"
grep -q '"lucide-react"' src/components/Navbar.jsx && \
  sed -i '/from "lucide-react"/ s/{ /{ Menu, /; /from "lucide-react"/ s/Menu, Menu,/Menu,/' src/components/Navbar.jsx

echo ""
echo "✅ Sidebar added: half-width slide-in from left, collapsible sections, lucide icons."
echo "   • src/components/Sidebar.jsx created"
echo "   • Navbar.jsx wired with trigger button + state"
echo ""
echo "Next: npm run build   (verify no import/export errors before npm run dev)"
