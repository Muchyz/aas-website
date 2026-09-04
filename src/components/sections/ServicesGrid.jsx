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
