#!/data/data/com.termux/files/usr/bin/bash
# Run from your project root in Termux:
#   cd ~/aas-website
#   bash expand-content.sh
set -e
cd "$(dirname "$0")" 2>/dev/null || true

# ---------------------------------------------------------------
# 1. data.js — add PROCESS + expand VALUES with a 4th pillar
# ---------------------------------------------------------------
python3 << 'PYEOF'
p = "src/data.js"
s = open(p, encoding="utf-8").read()

if "PROCESS" not in s:
    s += '''
export const PROCESS = [
  { t: "Assess", d: "We walk the site, review existing drawings, and scope the real problem before quoting." },
  { t: "Design", d: "Panel layouts, control logic, and cable schedules are drawn up and signed off before we touch a wire." },
  { t: "Build & Install", d: "Panels are built and tested on our bench, then installed and commissioned on site." },
  { t: "Support", d: "Documentation is handed over, and we stay reachable for maintenance and call-outs after go-live." },
];
'''
    open(p, "w", encoding="utf-8").write(s)
    print("  added PROCESS to data.js")
else:
    print("  PROCESS already present, skipped")
PYEOF

# ---------------------------------------------------------------
# 2. Home.jsx — insert a "How we work" process section after Services
# ---------------------------------------------------------------
python3 << 'PYEOF'
p = "src/pages/Home.jsx"
s = open(p, encoding="utf-8").read()

if "PROCESS" not in s:
    # add import
    s = s.replace(
        'import { SERVICES, VALUES } from "../data";',
        'import { SERVICES, VALUES, PROCESS } from "../data";'
    )

    process_section = '''
      <section className="container-page section-pad-sm">
        <p className="eyebrow mb-3">How we work</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12">From first call to running system</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PROCESS.map((step, i) => (
            <div key={step.t} className="card-surface p-6">
              <div className="text-3xl font-bold text-brand/30 mb-3">0{i + 1}</div>
              <h4 className="font-bold text-navy">{step.t}</h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>
'''
    # Insert right after the closing </div> of the Services section (first occurrence after ServicesGrid-like markup)
    marker = "      <section className=\"bg-slate-50 py-24\">"
    if marker in s:
        s = s.replace(marker, process_section + "\n" + marker, 1)
    else:
        # fallback: insert before the CTA/testimonial closing fragment
        s = s.replace("      <section className=\"max-w-6xl mx-auto px-6 py-16\">", process_section + "\n      <section className=\"max-w-6xl mx-auto px-6 py-16\">", 1)

    open(p, "w", encoding="utf-8").write(s)
    print("  added Process section to Home.jsx")
else:
    print("  Home.jsx already references PROCESS, skipped")
PYEOF

# ---------------------------------------------------------------
# 3. Team.jsx — expand from 3 to 6 people
# ---------------------------------------------------------------
cat > src/pages/Team.jsx << 'EOF'
export default function Team() {
  const people = [
    ["Lead Automation Engineer", "Oversees PLC programming, control system design, and final commissioning sign-off."],
    ["Chief Electrician", "Leads panel building and on-site wiring crews across every installation."],
    ["Field Service Technician", "Handles maintenance call-outs, diagnostics, and after-hours emergency response."],
    ["Instrumentation Specialist", "Selects, calibrates, and installs sensors, meters, and process measurement hardware."],
    ["Project Coordinator", "Keeps site schedules, client communication, and material logistics on track."],
    ["Panel Design Draughtsman", "Produces wiring schematics, panel layouts, and as-built documentation."],
  ];
  return (
    <section className="container-page section-pad-sm">
      <p className="eyebrow mb-3">People</p>
      <h1 className="text-3xl font-bold text-navy mb-4">The team behind the work</h1>
      <p className="text-gray-600 max-w-xl mb-12">
        A small, accountable crew — every job is handled by someone who was in the room when it was scoped.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {people.map(([role, d], i) => (
          <div key={i} className="card-surface p-6">
            <img src={`https://picsum.photos/seed/team${i}/200/200`} alt="" className="w-16 h-16 rounded-full object-cover mb-4" />
            <h4 className="font-bold text-navy">{role}</h4>
            <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

# ---------------------------------------------------------------
# 4. Testimonials.jsx — expand from 3 to 6 quotes
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
          <div key={i} className="card-surface p-6 border-l-4 border-l-brand">
            <p className="text-lg text-navy leading-snug">"{q}"</p>
            <p className="text-gray-500 text-sm mt-4">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

# ---------------------------------------------------------------
# 5. Projects.jsx — expand from 6 to 9 case studies
# ---------------------------------------------------------------
cat > src/pages/Projects.jsx << 'EOF'
export default function Projects() {
  const items = [
    ["Bottling line retrofit", "PLC upgrade for a beverage plant's fill line, cut downtime significantly."],
    ["Warehouse panel rebuild", "Full distribution panel replacement for a logistics facility."],
    ["Cold-store automation", "Temperature control integration for a cold-chain storage facility."],
    ["Bakery line controls", "Control system integration for a mid-size bakery's production line."],
    ["Water treatment panel", "Panel build and wiring for a small water treatment installation."],
    ["Textile plant maintenance", "Ongoing scheduled maintenance contract for a textile manufacturer."],
    ["Genset changeover install", "Automatic mains-genset changeover panel for a manufacturing site with frequent outages."],
    ["SCADA dashboard rollout", "Remote monitoring dashboard for a multi-line production facility."],
    ["Motor control center build", "Custom MCC panel with DOL and VFD starters for a processing plant expansion."],
  ];
  return (
    <section className="container-page section-pad-sm">
      <p className="eyebrow mb-3">Our work</p>
      <h1 className="text-3xl font-bold text-navy mb-4">Recent projects</h1>
      <p className="text-gray-600 max-w-xl mb-12">
        A sample of the panel builds, retrofits, and maintenance contracts we've delivered across Kenya.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(([t, d], i) => (
          <div key={i} className="card-surface overflow-hidden">
            <img src={`https://picsum.photos/seed/project${i}/500/350`} alt={t} className="h-40 w-full object-cover" />
            <div className="p-6">
              <h4 className="font-bold text-navy">{t}</h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

# ---------------------------------------------------------------
# 6. Faq.jsx — expand from 6 to 9 questions
# ---------------------------------------------------------------
python3 << 'PYEOF'
p = "src/pages/Faq.jsx"
s = open(p, encoding="utf-8").read()

extra = '''    ["Do you handle both new installs and repairs?", "Both — new panel builds and installations, plus diagnostics and repair of existing systems."],
    ["Can you supply parts without doing the labor?", "Yes, product supply is a standalone service if you just need components."],
    ["What areas of Kenya do you cover for maintenance contracts?", "Coverage depends on contract scope — message us with your location and we'll confirm."],'''

marker = '["How do I get a quote?", "Message us on WhatsApp with the scope and site details, and we\\'ll follow up quickly."],'
if marker in s and "Do you handle both new installs" not in s:
    s = s.replace(marker, marker + "\n" + extra)
    open(p, "w", encoding="utf-8").write(s)
    print("  expanded FAQ items")
else:
    print("  FAQ already expanded or marker not found, skipped")
PYEOF

echo ""
echo "✅ Content expansion applied:"
echo "   • Home — new 'How we work' process section (4 steps)"
echo "   • Team — 3 → 6 profiles"
echo "   • Testimonials — 3 → 6 quotes, 2-col layout"
echo "   • Projects — 6 → 9 case studies"
echo "   • FAQ — 6 → 9 questions"
echo ""
echo "Refresh your browser to see the changes."

