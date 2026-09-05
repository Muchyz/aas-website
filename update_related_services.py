#!/usr/bin/env python3
"""
Adds a 'Related Services' section (with photos) to the bottom of every
service detail page, cross-linking to relevant other services.
Run from project root: python3 update_related_services.py
"""

def replace_in_file(path, old, new, label):
    with open(path, "r") as f:
        content = f.read()
    if old not in content:
        print(f"⚠️  SKIPPED ({label}): anchor text not found in {path}")
        return
    content = content.replace(old, new, 1)
    with open(path, "w") as f:
        f.write(content)
    print(f"✅ Updated {path} ({label})")

# ---------- 1. Add RELATED_SERVICES map to data.js ----------
related_map = '''export const CERTIFICATIONS = [
  "EPRA-Aligned Practice",
  "EBK & IEK Standards",
  "ISO-Aligned Safety Systems",
  "NCA-Compliant Installations",
];

export const RELATED_SERVICES = {
  "electrical-installations": ["control-automation", "power-quality-analysis"],
  "instrumentation": ["pump-monitoring-systems", "power-quality-analysis"],
  "product-supplies": ["variable-frequency-drives", "scada"],
  "control-automation": ["scada", "variable-frequency-drives"],
  "consulting": ["electrical-installations", "control-automation"],
  "power-quality-analysis": ["electrical-installations", "instrumentation"],
  "scada": ["control-automation", "product-supplies"],
  "variable-frequency-drives": ["product-supplies", "control-automation"],
  "industrial-wireless-communication": ["pump-monitoring-systems", "instrumentation"],
  "pump-monitoring-systems": ["instrumentation", "industrial-wireless-communication"],
  "automated-school-bell": ["control-automation", "consulting"],
};'''

replace_in_file(
    "src/data.js",
    '''export const CERTIFICATIONS = [
  "EPRA-Aligned Practice",
  "EBK & IEK Standards",
  "ISO-Aligned Safety Systems",
  "NCA-Compliant Installations",
];''',
    related_map,
    "RELATED_SERVICES map",
)

# ---------- 2. Update ServiceDetail.jsx imports ----------
replace_in_file(
    "src/pages/ServiceDetail.jsx",
    'import { CheckCircle2, ArrowLeft, Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell } from "lucide-react";',
    'import { CheckCircle2, ArrowLeft, ArrowUpRight, Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell } from "lucide-react";',
    "add ArrowUpRight import",
)

replace_in_file(
    "src/pages/ServiceDetail.jsx",
    'import { SERVICES } from "../data";',
    'import { SERVICES, RELATED_SERVICES } from "../data";',
    "import RELATED_SERVICES",
)

# ---------- 3. Compute related services in the component ----------
replace_in_file(
    "src/pages/ServiceDetail.jsx",
    '''  const Icon = ICONS[service.icon];
  const a = ACCENTS[service.icon];''',
    '''  const Icon = ICONS[service.icon];
  const a = ACCENTS[service.icon];
  const relatedSlugs = RELATED_SERVICES[service.slug] || [];
  const related = relatedSlugs
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter(Boolean);''',
    "compute related services",
)

# ---------- 4. Render the Related Services section ----------
replace_in_file(
    "src/pages/ServiceDetail.jsx",
    '        <div className="mt-10"><WhatsAppButton /></div>',
    '''        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-navy font-bold mb-4">Related services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => {
                const RIcon = ICONS[r.icon];
                const ra = ACCENTS[r.icon];
                return (
                  <Link
                    key={r.slug}
                    to={`/services/${r.slug}`}
                    className="card-surface overflow-hidden group flex"
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-28 shrink-0 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-xl icon-tile-${ra.tile} shadow-soft flex items-center justify-center shrink-0`}>
                          <RIcon className="text-white" size={16} />
                        </div>
                        <h4 className="text-sm font-bold text-navy">{r.title}</h4>
                      </div>
                      <span className="inline-flex items-center gap-1 text-brand text-xs font-medium">
                        View <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-10"><WhatsAppButton /></div>''',
    "Related Services section",
)

print("\\nDone. Run 'npm run dev' to preview.")
print("Visit any /services/<slug> page and scroll to the bottom")
print("to see the new Related Services cards with photos.")
