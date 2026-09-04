#!/data/data/com.termux/files/usr/bin/bash
# Run this from inside your aas-website project root in Termux:
#   cd ~/aas-website
#   bash restore-blue-theme.sh
set -e

mkdir -p src/components/icons src/components/sections src/components/ui

# ---------------------------------------------------------------
# 1. WhatsAppIcon — real WhatsApp glyph, reused everywhere
# ---------------------------------------------------------------
cat > src/components/icons/WhatsAppIcon.jsx << 'EOF'
export default function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.44.664 4.72 1.822 6.678L3 29l7.02-2.283A12.44 12.44 0 0 0 16 28c6.905 0 12.5-5.596 12.5-12.5S22.905 3 16.001 3Zm7.36 17.844c-.31.874-1.535 1.6-2.516 1.81-.67.14-1.545.253-4.49-.964-3.767-1.56-6.19-5.383-6.38-5.633-.184-.25-1.523-2.026-1.523-3.865 0-1.838.964-2.742 1.306-3.118.343-.376.75-.47 1-.47.25 0 .5.002.718.013.23.012.539-.087.843.643.31.75 1.056 2.588 1.148 2.777.093.19.156.412.031.663-.125.25-.187.406-.373.626-.187.22-.393.49-.562.658-.187.187-.382.39-.164.766.219.375.972 1.605 2.086 2.6 1.434 1.28 2.644 1.677 3.02 1.865.375.187.594.156.812-.094.219-.25.937-1.094 1.187-1.469.25-.375.5-.313.844-.188.343.125 2.18 1.03 2.554 1.219.375.187.625.28.719.437.093.157.093.907-.219 1.782Z" />
    </svg>
  );
}
EOF

# ---------------------------------------------------------------
# 2. WhatsAppButton
# ---------------------------------------------------------------
cat > src/components/WhatsAppButton.jsx << 'EOF'
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "../data";

export default function WhatsAppButton({ full }) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className={`btn-primary ${full ? "w-full justify-center" : ""}`}
    >
      <WhatsAppIcon size={18} /> Chat on WhatsApp
    </a>
  );
}
EOF

# ---------------------------------------------------------------
# 3. ScrollToTop + BackToTop
# ---------------------------------------------------------------
cat > src/components/ScrollToTop.jsx << 'EOF'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
EOF

cat > src/components/BackToTop.jsx << 'EOF'
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-navy text-white shadow-soft-lg flex items-center justify-center hover:bg-brand transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
EOF

# ---------------------------------------------------------------
# 4. index.css — blue/brand/teal/violet theme, glow orbs, gradients
# ---------------------------------------------------------------
cat > src/index.css << 'EOF'
@import "tailwindcss";

@theme {
  --font-sans: "Inter", sans-serif;
  --color-navy: #0e2a47;
  --color-brand: #1a63d6;
  --color-brand-dark: #124a9e;
  --color-sky: #2fa8e0;
  --color-teal: #14b8a6;
  --color-violet: #7c5cff;
  --color-offwhite: #f4f6f8;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: white;
  color: #2b3440;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-brand), var(--color-brand-dark));
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 20px -6px rgba(26, 99, 214, 0.45);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -6px rgba(26, 99, 214, 0.55);
}

.btn-outline {
  border: 2px solid var(--color-navy);
  color: var(--color-navy);
  padding: 0.65rem 1.4rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-outline:hover {
  background-color: var(--color-navy);
  color: white;
}

.section-pad {
  padding: 4rem 1.5rem;
}
@media (min-width: 768px) {
  .section-pad {
    padding: 6rem 3rem;
  }
}

.fingerprint-divider {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, var(--color-brand), var(--color-teal));
  border-radius: 4px;
}

.shadow-soft {
  box-shadow: 0 4px 24px -8px rgba(14, 42, 71, 0.12);
}
.shadow-soft-lg {
  box-shadow: 0 20px 60px -15px rgba(14, 42, 71, 0.25);
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: color-mix(in srgb, var(--color-brand) 10%, white);
  color: var(--color-brand-dark);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Glow orbs — reusable decorative background blobs */
.glow-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(50px);
  pointer-events: none;
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(135deg, var(--color-brand), var(--color-violet));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Glass card */
.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}
EOF

# ---------------------------------------------------------------
# 5. Navbar — top contact strip, icon-led nav + dropdown, mobile menu
# ---------------------------------------------------------------
cat > src/components/Navbar.jsx << 'EOF'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Home as HomeIcon, Wrench, Info, Mail,
  Briefcase, Users, ShieldCheck, MessageSquareQuote, Newspaper,
  HelpCircle, Phone,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { PRIMARY_NAV, MORE_NAV, CONTACT_PHONE, WHATSAPP_NUMBER } from "../data";

const ICONS = {
  "/": HomeIcon,
  "/services": Wrench,
  "/about": Info,
  "/contact": Mail,
  "/projects": Briefcase,
  "/team": Users,
  "/certifications": ShieldCheck,
  "/testimonials": MessageSquareQuote,
  "/blog": Newspaper,
  "/faq": HelpCircle,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="hidden md:flex bg-navy text-white text-xs">
        <div className="max-w-6xl mx-auto w-full px-6 py-1.5 flex items-center justify-end gap-5">
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-brand transition-colors">
            <Phone size={12} /> {CONTACT_PHONE}
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-1.5 hover:text-brand transition-colors">
            <WhatsAppIcon size={12} /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {logoOk ? (
            <img src="/logo.png" alt="Advanced Automation Systems" className="h-10 w-auto" onError={() => setLogoOk(false)} />
          ) : (
            <span className="text-lg font-bold text-navy">
              ADVANCED AUTOMATION <span className="text-brand">SYSTEMS</span>
            </span>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {PRIMARY_NAV.map((n) => {
            const Icon = ICONS[n.path];
            const active = location.pathname === n.path;
            return (
              <Link
                key={n.path}
                to={n.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "text-brand bg-brand/5" : "text-gray-600 hover:text-navy hover:bg-offwhite"
                }`}
              >
                {Icon && <Icon size={15} />} {n.label}
              </Link>
            );
          })}

          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-navy hover:bg-offwhite transition-colors">
              More <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block z-[60]">
              <div className="bg-white border border-gray-100 rounded-xl shadow-soft-lg overflow-hidden w-56 py-1">
                {MORE_NAV.map((n) => {
                  const Icon = ICONS[n.path];
                  return (
                    <Link
                      key={n.path}
                      to={n.path}
                      className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-offwhite hover:text-brand transition-colors"
                    >
                      {Icon && <Icon size={16} className="text-brand/70" />} {n.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/contact" className="btn-primary ml-2 !py-2 !px-4 text-sm">Get a Quote</Link>
        </nav>

        <button className="md:hidden text-navy" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          menuOpen ? "max-h-[600px]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="px-6 pb-4">
          <div className="flex flex-col divide-y divide-gray-100">
            {[...PRIMARY_NAV, ...MORE_NAV].map((n) => {
              const Icon = ICONS[n.path];
              return (
                <Link
                  key={n.path}
                  to={n.path}
                  className="flex items-center gap-3 text-gray-700 py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {Icon && <Icon size={17} className="text-brand" />} {n.label}
                </Link>
              );
            })}
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn-primary w-full justify-center mt-4">
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
EOF

# ---------------------------------------------------------------
# 6. Footer — glow orbs, logo header band, icon-led columns, hover lift
# ---------------------------------------------------------------
cat > src/components/Footer.jsx << 'EOF'
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, ArrowUpRight, Zap, Gauge, Package, Cpu,
  Home as HomeIcon, Wrench, Info, Briefcase, Users, ShieldCheck,
  MessageSquareQuote, Newspaper, HelpCircle,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { PRIMARY_NAV, MORE_NAV, CONTACT_PHONE, CONTACT_EMAIL, WHATSAPP_NUMBER, SERVICES } from "../data";

const SERVICE_ICONS = { Zap, Gauge, Package, Cpu };
const NAV_ICONS = {
  "/": HomeIcon, "/services": Wrench, "/about": Info, "/contact": Mail,
  "/projects": Briefcase, "/team": Users, "/certifications": ShieldCheck,
  "/testimonials": MessageSquareQuote, "/blog": Newspaper, "/faq": HelpCircle,
};

export default function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="bg-navy relative overflow-hidden">
        <div className="glow-orb w-96 h-96 -top-40 left-1/4 opacity-[0.08]" style={{ background: "var(--color-brand)" }} />
        <div className="glow-orb w-72 h-72 bottom-0 right-0 opacity-[0.08]" style={{ background: "var(--color-teal)" }} />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px, 64px 64px",
          }}
        />

        {/* Logo header band */}
        <div className="relative border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <img src="/logo.png" alt="Advanced Automation Systems" className="h-16 md:h-20 w-auto drop-shadow-lg" />
            <div>
              <p className="text-white font-semibold text-lg">Have a system that needs attention?</p>
              <p className="text-gray-400 text-sm mt-1">Professionalism &middot; Innovation &middot; Quality</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-5 py-3 rounded-lg transition-all hover:-translate-y-0.5 shadow-soft-lg text-sm shrink-0"
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="relative max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="text-gray-400 leading-relaxed">
              Electrical, instrumentation, product supply, and automation for factories and plants
              across Kenya.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 uppercase text-xs tracking-wide">Company</div>
            <div className="space-y-1">
              {[...PRIMARY_NAV, ...MORE_NAV].map((n) => {
                const Icon = NAV_ICONS[n.path];
                return (
                  <Link
                    key={n.path}
                    to={n.path}
                    className="flex items-center gap-2.5 text-gray-400 hover:text-brand hover:translate-x-1 transition-all py-1 group w-fit"
                  >
                    {Icon && <Icon size={13} className="text-brand/60 group-hover:text-brand shrink-0" />}
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 uppercase text-xs tracking-wide">Solutions</div>
            <div className="space-y-1">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.icon];
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-2.5 text-gray-400 hover:text-brand hover:translate-x-1 transition-all py-1"
                  >
                    <Icon size={13} className="text-brand/60 shrink-0" /> {s.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 uppercase text-xs tracking-wide">Contact</div>
            <div className="space-y-3">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors group">
                <span className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-brand/20 flex items-center justify-center shrink-0 transition-colors">
                  <Phone size={14} />
                </span>
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors break-all group">
                <span className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-brand/20 flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={14} />
                </span>
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </span>
                Serving clients across Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>&copy; {new Date().getFullYear()} Advanced Automation Systems Limited. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <Link to="/faq" className="hover:text-brand transition-colors">FAQ</Link>
              <Link to="/contact" className="hover:text-brand transition-colors">Get in Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
EOF

# ---------------------------------------------------------------
# 7. Hero — multi-color glow orbs, gradient headline, stat pills
# ---------------------------------------------------------------
cat > src/components/sections/Hero.jsx << 'EOF'
import { Zap } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="glow-orb w-96 h-96 -top-24 -right-24 opacity-[0.18]" style={{ background: "var(--color-brand)" }} />
      <div className="glow-orb w-72 h-72 top-1/3 -left-32 opacity-[0.14]" style={{ background: "var(--color-teal)" }} />
      <div className="glow-orb w-64 h-64 bottom-0 right-1/4 opacity-[0.12]" style={{ background: "var(--color-violet)" }} />

      <div className="section-pad relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge-pill mb-5">
            <Zap size={14} /> Advanced Automation Systems
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1] tracking-tight">
            Creative engineering solutions,{" "}
            <span className="text-gradient">built to run</span> without you standing over them.
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
            Electrical installations, instrumentation, product supply, and full control &amp;
            automation for factories and plants across Kenya — delivered with professionalism,
            innovation, and quality.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Button to="/services" variant="outline">View Our Services</Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" /> 4 Core Solution Areas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-teal)" }} /> Kenya-Wide Reach
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-violet)" }} /> Same-Day Response
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src="https://picsum.photos/seed/aas-hero/800/600"
              alt="Industrial control panel"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 card-glass rounded-xl shadow-soft-lg px-5 py-4 hidden sm:block">
            <div className="text-2xl font-bold text-navy">4</div>
            <div className="text-xs text-gray-500 font-medium">Solution Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

# ---------------------------------------------------------------
# 8. ServicesGrid — accent-rotated glow cards
# ---------------------------------------------------------------
cat > src/components/sections/ServicesGrid.jsx << 'EOF'
import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu } from "lucide-react";
import { SERVICES } from "../../data";

const ICONS = { Zap, Gauge, Package, Cpu };
const ACCENTS = ["var(--color-brand)", "var(--color-teal)", "var(--color-violet)", "var(--color-sky)"];

export default function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
      {SERVICES.map((s, i) => {
        const Icon = ICONS[s.icon];
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-soft-lg transition-shadow border border-gray-100 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${accent}22, transparent)` }} />
            </div>
            <div className="p-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${accent}1a` }}
              >
                <Icon size={22} style={{ color: accent }} />
              </div>
              <h3 className="font-bold text-navy">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{s.blurb}</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: accent }} />
          </Link>
        );
      })}
    </div>
  );
}
EOF

# ---------------------------------------------------------------
# 9. CTA — brand-colored banner with dot-pattern overlay
# ---------------------------------------------------------------
cat > src/components/sections/CTA.jsx << 'EOF'
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
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Have a system that needs attention?</h3>
          <p className="text-white/80 mt-2 max-w-md">
            Tell us what's happening and we'll get back to you the same day.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-soft"
          >
            <WhatsAppIcon size={18} /> Chat on WhatsApp
          </a>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 bg-navy/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy/30 transition-colors"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
EOF

# ---------------------------------------------------------------
# 10. App.jsx — wire ScrollToTop + BackToTop
# ---------------------------------------------------------------
cat > src/App.jsx << 'EOF'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <ScrollToTop />
      <BackToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
EOF

echo "✅ Blue/glow theme restored: icons, top-strip Navbar, glow Footer, gradient Hero/CTA."
echo "Next: npm run dev"
