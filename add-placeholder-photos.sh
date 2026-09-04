#!/data/data/com.termux/files/usr/bin/bash
# Run from your project root in Termux:
#   cd ~/aas-website
#   bash add-placeholder-photos.sh
#
# Tools used: cat (full, reliable rewrites — safer than regex given how many
# times these files have been hand-edited), sed (dedupe a stray import line),
# python3 (final report of which pages now have images).
set -e
cd "$(dirname "$0")" 2>/dev/null || true

# ---------------------------------------------------------------
# 1. Home.jsx — full rewrite: hero image, service thumbnails, process, CTA
# ---------------------------------------------------------------
cat > src/pages/Home.jsx << 'EOF'
import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu, ChevronRight, ArrowUpRight, Quote } from "lucide-react";
import { SERVICES, VALUES, PROCESS } from "../data";
import WhatsAppButton from "../components/WhatsAppButton";

const ICONS = { Zap, Gauge, Package, Cpu };

export default function Home() {
  return (
    <>
      <section className="container-page section-pad grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge-pill mb-5">
            <Zap size={14} /> Advanced Automation Systems
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1]">
            Creative engineering solutions, built to run without you standing over them.
          </h1>
          <p className="mt-6 max-w-md text-gray-600 text-lg">
            Electrical installations, instrumentation, product supply and full control &amp; automation
            for factories and plants across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Link to="/projects" className="btn-outline">
              View our work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-soft-lg">
          <img src="https://picsum.photos/seed/aas-panel/800/600" alt="Industrial control panel" className="w-full h-80 object-cover" />
        </div>
      </section>

      <section className="container-page section-pad-sm">
        <p className="eyebrow mb-3">What we do</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">Our solutions</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card-surface overflow-hidden group">
                <img
                  src={`https://picsum.photos/seed/${s.slug}/500/280`}
                  alt={s.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="text-brand" size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{s.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-brand text-sm font-medium mt-4">
                    See what's included <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-page section-pad-sm">
        <p className="eyebrow mb-3">How we work</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">From first call to running system</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PROCESS.map((step, i) => (
            <div key={step.t} className="card-surface p-6">
              <div className="text-3xl font-bold text-brand/30 mb-3">0{i + 1}</div>
              <h4 className="font-bold text-navy">{step.t}</h4>
              <p className="text-gray-600 text-sm mt-2">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="container-page section-pad-sm">
          <p className="eyebrow mb-3">Why clients stay</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {VALUES.map((v) => (
              <div key={v.t} className="card-surface p-6">
                <h4 className="text-lg font-bold text-navy">{v.t}</h4>
                <p className="text-gray-600 text-sm mt-2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section-pad-sm">
        <div className="card-surface p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://picsum.photos/seed/aas-testimonial/300/300"
            alt="Client"
            className="w-20 h-20 rounded-full object-cover shrink-0"
          />
          <div>
            <Quote className="text-brand/40 mb-3" size={26} />
            <p className="text-lg text-navy leading-snug max-w-2xl">
              "They rewired our fill line over a weekend so we didn't lose a single production day."
            </p>
            <p className="text-gray-500 text-sm mt-3">Operations Manager, beverage manufacturer</p>
          </div>
        </div>
      </section>

      <section className="container-page section-pad-sm">
        <div className="rounded-2xl bg-brand p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-soft-lg">
          <div>
            <h3 className="text-2xl font-bold text-white">Have a system that needs attention?</h3>
            <p className="text-white/80 mt-2">Tell us what's happening and we'll get back to you the same day.</p>
          </div>
          <WhatsAppButton />
        </div>
      </section>
    </>
  );
}
EOF
echo "  ✓ Home.jsx — hero image + per-service thumbnails + testimonial avatar"

# ---------------------------------------------------------------
# 2. Services.jsx — image thumbnail on every card
# ---------------------------------------------------------------
cat > src/pages/Services.jsx << 'EOF'
import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu, ChevronRight } from "lucide-react";
import { SERVICES } from "../data";

const ICONS = { Zap, Gauge, Package, Cpu };

export default function Services() {
  return (
    <section className="container-page section-pad-sm">
      <p className="eyebrow mb-3">Services</p>
      <h1 className="text-3xl font-bold text-navy mb-10">What we can take off your hands</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <Link key={s.slug} to={`/services/${s.slug}`} className="card-surface overflow-hidden group">
              <img
                src={`https://picsum.photos/seed/${s.slug}/600/280`}
                alt={s.title}
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Icon className="text-brand" size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{s.blurb}</p>
                <span className="inline-flex items-center gap-1 text-brand text-sm font-medium mt-4">
                  View details <ChevronRight size={14} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
EOF
echo "  ✓ Services.jsx — thumbnail added to every service card"

# ---------------------------------------------------------------
# 3. Testimonials.jsx — client avatar per quote
# ---------------------------------------------------------------
cat > src/pages/Testimonials.jsx << 'EOF'
export default function Testimonials() {
  const quotes = [
    ["They rewired our fill line over a weekend so we didn't lose a single production day.", "Operations Manager, beverage manufacturer"],
    ["Clean panel work, clearly labeled, no shortcuts. Exactly what we needed.", "Facilities Lead, logistics company"],
    ["Fast to respond when our line went down at 6am. Fixed within hours.", "Plant Supervisor, textile manufacturer"],
    ["Our SCADA retrofit came in on budget and the documentation was better than what the original installer left us.", "Maintenance Manager, bottling plant"],
    ["They found a wiring fault two other contractors had missed. Straightforward, no drama.", "Site Engineer, cold storage facility"],
    ["Reliable for scheduled maintenance — they show up when they say they will.", "Operations Director, bakery group"],
  ];
  return (
    <section className="container-page section-pad-sm max-w-4xl">
      <p className="eyebrow mb-3">Client feedback</p>
      <h1 className="text-3xl font-bold text-navy mb-12">What clients say</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {quotes.map(([q, a], i) => (
          <div key={i} className="card-surface p-6 border-l-4 border-l-brand flex gap-4">
            <img
              src={`https://picsum.photos/seed/client${i}/120/120`}
              alt=""
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-navy leading-snug">"{q}"</p>
              <p className="text-gray-500 text-sm mt-3">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF
echo "  ✓ Testimonials.jsx — client avatar added per quote"

# ---------------------------------------------------------------
# 4. Blog.jsx — thumbnail per post
# ---------------------------------------------------------------
cat > src/pages/Blog.jsx << 'EOF'
import { ChevronRight } from "lucide-react";

export default function Blog() {
  const posts = [
    ["Signs your control panel needs attention before it fails", "Maintenance"],
    ["What a PLC retrofit actually involves", "Automation"],
    ["Getting maintenance contracts right for multi-shift plants", "Case study"],
  ];
  return (
    <section className="container-page section-pad-sm max-w-3xl">
      <p className="eyebrow mb-3">Insights</p>
      <h1 className="text-3xl font-bold text-navy mb-10">From the field</h1>
      <div className="space-y-4">
        {posts.map(([t, tag], i) => (
          <div key={i} className="card-surface overflow-hidden flex items-center gap-4 cursor-pointer group">
            <img
              src={`https://picsum.photos/seed/blog${i}/200/150`}
              alt=""
              className="w-28 h-24 object-cover shrink-0"
            />
            <div className="flex-1 flex items-center justify-between gap-4 py-4 pr-5">
              <div>
                <span className="text-brand text-xs font-medium">{tag}</span>
                <h4 className="font-bold text-navy mt-1 group-hover:text-brand transition-colors">{t}</h4>
              </div>
              <ChevronRight className="text-gray-400 group-hover:text-brand transition-colors shrink-0" size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF
echo "  ✓ Blog.jsx — thumbnail added per post"

# ---------------------------------------------------------------
# 5. Certifications.jsx — supporting photo strip
# ---------------------------------------------------------------
cat > src/pages/Certifications.jsx << 'EOF'
import { Shield } from "lucide-react";

export default function Certifications() {
  const items = [
    ["Electrical safety compliance", "Work carried out to recognised national electrical safety standards."],
    ["Vendor-trained technicians", "Staff trained on the PLC and control brands we install and service."],
    ["Insured & licensed", "Fully licensed to operate as an electrical and automation contractor."],
  ];
  return (
    <section className="container-page section-pad-sm">
      <p className="eyebrow mb-3">Trust &amp; compliance</p>
      <h1 className="text-3xl font-bold text-navy mb-4">Certifications</h1>
      <div className="rounded-2xl overflow-hidden shadow-soft mb-12">
        <img src="https://picsum.photos/seed/aas-cert/1200/400" alt="Panel inspection" className="w-full h-56 object-cover" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(([t, d], i) => (
          <div key={i} className="card-surface p-6">
            <Shield className="text-brand mb-3" size={22} />
            <h4 className="font-bold text-navy">{t}</h4>
            <p className="text-gray-600 text-sm mt-2">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF
echo "  ✓ Certifications.jsx — inspection photo added above the grid"

# ---------------------------------------------------------------
# sed — dedupe a PROCESS import if expand-content.sh already added one
# (Home.jsx above already imports it fresh, this just guards re-runs)
# ---------------------------------------------------------------
sed -i '0,/import { SERVICES, VALUES, PROCESS } from "..\/data";/! {/import { SERVICES, VALUES, PROCESS } from "..\/data";/d}' src/pages/Home.jsx

# ---------------------------------------------------------------
# python3 — report which pages now contain <img
# ---------------------------------------------------------------
python3 << 'PYEOF'
import glob, re

print("\nImage coverage report:")
for f in sorted(glob.glob("src/pages/*.jsx")):
    s = open(f, encoding="utf-8").read()
    count = len(re.findall(r'<img', s))
    mark = "✓" if count > 0 else "—"
    print(f"  {mark} {f}: {count} <img> tag(s)")
PYEOF

echo ""
echo "✅ Placeholder photos added via picsum.photos across Home, Services,"
echo "   Testimonials, Blog, and Certifications. Refresh your browser."
