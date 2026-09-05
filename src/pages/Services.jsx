import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";

const ICONS = { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell };
const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
  MessageSquare: { tile: "rose", text: "text-rose-600" },
  Activity: { tile: "emerald", text: "text-emerald-600" },
  Monitor: { tile: "indigo", text: "text-indigo-600" },
  Waves: { tile: "orange", text: "text-orange-600" },
  Radio: { tile: "cyan", text: "text-cyan-600" },
  Droplets: { tile: "fuchsia", text: "text-fuchsia-600" },
  Bell: { tile: "lime", text: "text-lime-600" },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid blueprint-fade pointer-events-none" />
      <div className="glow-orb w-96 h-96 -top-32 -left-24 opacity-[0.10]" style={{ background: "#1a63d6" }} />
      <div className="container-page relative pt-16 pb-20 md:pt-20 md:pb-24">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Services</p>
        <h1 className="text-3xl font-bold text-navy mb-3 max-w-xl">What we can take off your hands</h1>
        <p className="text-gray-600 max-w-lg mb-12">Four areas, one accountable crew — from first sketch to final commissioning.</p>

        <div className="space-y-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            const a = ACCENTS[s.icon];
            const reverse = i % 2 === 1;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className={`card-surface overflow-hidden flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} group`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full md:w-72 h-44 md:h-auto object-cover group-hover:scale-105 transition-transform duration-300 shrink-0"
                />
                <div className="p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-2xl icon-tile-${a.tile} shadow-soft flex items-center justify-center shrink-0`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mt-2 max-w-md">{s.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-brand text-sm font-medium mt-4 w-fit">
                    View details <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
