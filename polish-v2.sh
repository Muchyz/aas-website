#!/data/data/com.termux/files/usr/bin/bash
# Run from your project root in Termux:
#   cd ~/aas-website
#   bash polish-v2.sh
set -e

mkdir -p src/components/sections

# ---------------------------------------------------------------
# 1. index.css — refined spacing scale, white bg, blue + teal/violet accents
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
  --color-offwhite: #f7f9fb;
  --color-line: #e7eaf0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
  color: #2b3440;
}

h1, h2, h3, h4 {
  letter-spacing: -0.02em;
}

/* ---------- Buttons ---------- */
.btn-primary {
  background: linear-gradient(135deg, var(--color-brand), var(--color-brand-dark));
  color: white;
  padding: 0.85rem 1.75rem;
  border-radius: 0.65rem;
  font-weight: 600;
  font-size: 0.925rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  box-shadow: 0 10px 24px -8px rgba(26, 99, 214, 0.45);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px -8px rgba(26, 99, 214, 0.55);
}

.btn-outline {
  border: 1.5px solid var(--color-navy);
  color: var(--color-navy);
  padding: 0.8rem 1.65rem;
  border-radius: 0.65rem;
  font-weight: 600;
  font-size: 0.925rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
}
.btn-outline:hover {
  background-color: var(--color-navy);
  color: white;
  transform: translateY(-2px);
}

/* ---------- Spacing rhythm ---------- */
.section-pad {
  padding: 5rem 1.5rem;
}
@media (min-width: 768px) {
  .section-pad {
    padding: 8rem 3rem;
  }
}

.section-pad-sm {
  padding: 3.5rem 1.5rem;
}
@media (min-width: 768px) {
  .section-pad-sm {
    padding: 5rem 3rem;
  }
}

.container-page {
  max-width: 72rem;
  margin-inline: auto;
  padding-inline: 1.5rem;
}
@media (min-width: 768px) {
  .container-page {
    padding-inline: 3rem;
  }
}

/* ---------- Decorative + surface utilities ---------- */
.fingerprint-divider {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, var(--color-brand), var(--color-teal));
  border-radius: 4px;
}

.shadow-soft {
  box-shadow: 0 4px 24px -8px rgba(14, 42, 71, 0.10);
}
.shadow-soft-lg {
  box-shadow: 0 24px 64px -18px rgba(14, 42, 71, 0.22);
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: color-mix(in srgb, var(--color-brand) 8%, white);
  color: var(--color-brand-dark);
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid color-mix(in srgb, var(--color-brand) 18%, white);
}

.glow-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(56px);
  pointer-events: none;
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-brand), var(--color-violet));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.card-glass {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.card-surface {
  background: white;
  border: 1px solid var(--color-line);
  border-radius: 1rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}
.card-surface:hover {
  box-shadow: 0 20px 48px -16px rgba(14, 42, 71, 0.18);
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--color-brand) 30%, var(--color-line));
}

.eyebrow {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brand);
}
EOF

# ---------------------------------------------------------------
# 2. Navbar — modern glassmorphism, refined spacing
# ---------------------------------------------------------------
cat > src/components/Navbar.jsx << 'EOF'
import { useState, useEffect } from "react";
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
  const [logoOk, setLogoOk] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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

        <button className="md:hidden text-navy" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-line ${
          menuOpen ? "max-h-[600px]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="px-6 pb-6">
          <div className="flex flex-col divide-y divide-line">
            {[...PRIMARY_NAV, ...MORE_NAV].map((n) => {
              const Icon = ICONS[n.path];
              return (
                <Link
                  key={n.path}
                  to={n.path}
                  className="flex items-center gap-3 text-gray-700 py-3.5"
                  onClick={() => setMenuOpen(false)}
                >
                  {Icon && <Icon size={17} className="text-brand" />} {n.label}
                </Link>
              );
            })}
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn-primary w-full justify-center mt-5">
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
EOF

# ---------------------------------------------------------------
# 3. Footer — modern, more breathing room, socials row, accent line
# ---------------------------------------------------------------
cat > src/components/Footer.jsx << 'EOF'
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, Zap, Gauge, Package, Cpu,
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
    <footer className="relative mt-24">
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, var(--color-brand), var(--color-teal), var(--color-violet))" }} />

      <div className="bg-navy relative overflow-hidden">
        <div className="glow-orb w-96 h-96 -top-40 left-1/4 opacity-[0.10]" style={{ background: "var(--color-brand)" }} />
        <div className="glow-orb w-72 h-72 bottom-0 right-0 opacity-[0.10]" style={{ background: "var(--color-teal)" }} />

        {/* Logo header band */}
        <div className="relative border-b border-white/10">
          <div className="container-page py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <img src="/logo.png" alt="Advanced Automation Systems" className="h-16 md:h-20 w-auto drop-shadow-lg" />
            <div>
              <p className="text-white font-semibold text-lg">Have a system that needs attention?</p>
              <p className="text-gray-400 text-sm mt-1">Professionalism &middot; Innovation &middot; Quality</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-soft-lg text-sm shrink-0"
            >
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="relative container-page py-16 grid md:grid-cols-4 gap-12 text-sm">
          <div>
            <p className="text-gray-400 leading-relaxed">
              Electrical, instrumentation, product supply, and automation for factories and plants
              across Kenya.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white transition-all hover:scale-110" aria-label="WhatsApp">
                <WhatsAppIcon size={17} />
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-all hover:scale-110" aria-label="Call">
                <Phone size={16} />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand flex items-center justify-center text-white transition-all hover:scale-110" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-5 uppercase text-xs tracking-widest">Company</div>
            <div className="space-y-1">
              {[...PRIMARY_NAV, ...MORE_NAV].map((n) => {
                const Icon = NAV_ICONS[n.path];
                return (
                  <Link key={n.path} to={n.path} className="flex items-center gap-2.5 text-gray-400 hover:text-brand hover:translate-x-1 transition-all py-1.5 group w-fit">
                    {Icon && <Icon size={13} className="text-brand/60 group-hover:text-brand shrink-0" />}
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-5 uppercase text-xs tracking-widest">Solutions</div>
            <div className="space-y-1">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.icon];
                return (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-2.5 text-gray-400 hover:text-brand hover:translate-x-1 transition-all py-1.5">
                    <Icon size={13} className="text-brand/60 shrink-0" /> {s.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold mb-5 uppercase text-xs tracking-widest">Contact</div>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors group">
                <span className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-brand/20 flex items-center justify-center shrink-0 transition-colors">
                  <Phone size={14} />
                </span>
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors break-all group">
                <span className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-brand/20 flex items-center justify-center shrink-0 transition-colors">
                  <Mail size={14} />
                </span>
                {CONTACT_EMAIL}
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </span>
                Serving clients across Kenya
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <span>&copy; {new Date().getFullYear()} Advanced Automation Systems Limited. All rights reserved.</span>
            <div className="flex items-center gap-6">
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
# 4. StatsStrip — new section, more color variety, generous spacing
# ---------------------------------------------------------------
cat > src/components/sections/StatsStrip.jsx << 'EOF'
const stats = [
  { n: "4", label: "Core Solution Areas", color: "var(--color-brand)" },
  { n: "24/7", label: "Emergency Response", color: "var(--color-teal)" },
  { n: "100%", label: "Kenya-Wide Coverage", color: "var(--color-violet)" },
  { n: "Same-Day", label: "Quote Turnaround", color: "var(--color-sky)" },
];

export default function StatsStrip() {
  return (
    <section className="container-page">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="card-surface p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: s.color }}>{s.n}</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

# ---------------------------------------------------------------
# 5. Hero — more generous spacing, refined layout
# ---------------------------------------------------------------
cat > src/components/sections/Hero.jsx << 'EOF'
import { Zap } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="glow-orb w-[28rem] h-[28rem] -top-32 -right-32 opacity-[0.16]" style={{ background: "var(--color-brand)" }} />
      <div className="glow-orb w-80 h-80 top-1/3 -left-36 opacity-[0.13]" style={{ background: "var(--color-teal)" }} />
      <div className="glow-orb w-72 h-72 bottom-0 right-1/4 opacity-[0.11]" style={{ background: "var(--color-violet)" }} />

      <div className="section-pad relative container-page grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="badge-pill mb-6">
            <Zap size={14} /> Advanced Automation Systems
          </span>

          <h1 className="text-4xl md:text-[3.25rem] font-bold text-navy leading-[1.08] tracking-tight">
            Creative engineering solutions,{" "}
            <span className="text-gradient">built to run</span> without you standing over them.
          </h1>

          <p className="mt-7 text-gray-600 text-lg max-w-md leading-relaxed">
            Electrical installations, instrumentation, product supply, and full control &amp;
            automation for factories and plants across Kenya — delivered with professionalism,
            innovation, and quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Button to="/services" variant="outline">View Our Services</Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
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
              className="w-full h-80 md:h-[26rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -left-7 card-glass rounded-xl shadow-soft-lg px-6 py-5 hidden sm:block">
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
# 6. ServicesGrid — card-surface treatment, generous padding
# ---------------------------------------------------------------
cat > src/components/sections/ServicesGrid.jsx << 'EOF'
import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu } from "lucide-react";
import { SERVICES } from "../../data";

const ICONS = { Zap, Gauge, Package, Cpu };
const ACCENTS = ["var(--color-brand)", "var(--color-teal)", "var(--color-violet)", "var(--color-sky)"];

export default function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 container-page">
      {SERVICES.map((s, i) => {
        const Icon = ICONS[s.icon];
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <Link key={s.slug} to={`/services/${s.slug}`} className="group relative card-surface overflow-hidden">
            <div className="relative overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${accent}22, transparent)` }} />
            </div>
            <div className="p-7">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${accent}1a` }}>
                <Icon size={22} style={{ color: accent }} />
              </div>
              <h3 className="font-bold text-navy">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">{s.blurb}</p>
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
# 7. CTA — refined spacing, brand + accent tone
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
EOF

echo "✅ Polish pass v2 applied: refined spacing scale, modern glass navbar,"
echo "   richer footer, new StatsStrip section, card-surface hover states."
echo ""
echo "Optional: add <StatsStrip /> to src/pages/Home.jsx just under <Hero /> for a quick stat row."
echo "Next: refresh your browser (Vite hot-reloads automatically)."
