import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const items = [
    ["Bottling line retrofit", "PLC upgrade for a beverage plant's fill line, cut downtime significantly.", "Beverage", "bottling-line-retrofit.jpg"],
    ["Warehouse panel rebuild", "Full distribution panel replacement for a logistics facility.", "Logistics", "warehouse-panel-rebuild.jpg"],
    ["Cold-store automation", "Temperature control integration for a cold-chain storage facility.", "Cold chain", "cold-store-automation.jpg"],
    ["Bakery line controls", "Control system integration for a mid-size bakery's production line.", "Food production", "bakery-line-controls.jpg"],
    ["Water treatment panel", "Panel build and wiring for a small water treatment installation.", "Water treatment", "water-treatment-panel.jpg"],
    ["Textile plant maintenance", "Ongoing scheduled maintenance contract for a textile manufacturer.", "Textile", "textile-plant-maintenance.jpg"],
    ["Genset changeover install", "Automatic mains-genset changeover panel for a manufacturing site with frequent outages.", "Manufacturing", "genset-changeover-install.jpg"],
    ["SCADA dashboard rollout", "Remote monitoring dashboard for a multi-line production facility.", "Manufacturing", "scada-dashboard-rollout.jpg"],
    ["Motor control center build", "Custom MCC panel with DOL and VFD starters for a processing plant expansion.", "Processing", "motor-control-center-build.jpg"],
  ];
  return (
    <section className="container-page section-pad-sm">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Our work</p>
      <h1 className="text-3xl font-bold text-navy mb-4">Recent projects</h1>
      <p className="text-gray-600 max-w-xl mb-12">
        A sample of the panel builds, retrofits, and maintenance contracts we've delivered across Kenya.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(([t, d, tag, img], i) => (
          <div key={i} className="card-surface overflow-hidden group">
            <div className="relative">
              <img src={`https://picsum.photos/seed/project${i}/500/300`} alt={t} className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-navy flex items-start justify-between gap-2">
                {t} <ArrowUpRight size={15} className="text-gray-300 group-hover:text-brand transition-colors shrink-0 mt-1" />
              </h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
