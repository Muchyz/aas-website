import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell, ChevronRight, ArrowUpRight, Quote, CheckCircle2, Search, PenTool, Wrench, LifeBuoy } from "lucide-react";
import { SERVICES, VALUES, PROCESS } from "../data";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import SectorsServed from "../components/sections/SectorsServed";
import Hero from "../components/sections/Hero";

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

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="container-page section-pad-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="tag-chip mb-3"><span className="tag-dot" /> What we do</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Our solutions</h2>
          </div>
          <Link to="/services" className="text-brand text-sm font-semibold inline-flex items-center gap-1 shrink-0">
            All services <ChevronRight size={15} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            const a = ACCENTS[s.icon];
            return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card-surface overflow-hidden group">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl icon-tile-${a.tile} shadow-soft flex items-center justify-center shrink-0`}>
                      <Icon className="text-white" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                  </div>
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

      <WhyChooseUs />
      <SectorsServed />

      {/* Process */}
      <section className="relative overflow-hidden bg-offwhite">
        <div className="absolute inset-0 blueprint-grid blueprint-fade pointer-events-none" />
        <div className="container-page section-pad-sm relative">
          <p className="tag-chip mb-3"><span className="tag-dot" /> How we work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-14">From first call to running system</h2>
          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-400 via-sky-400 to-violet-400 opacity-50" />
            {PROCESS.map((step, i) => {
              const icons = [Search, PenTool, Wrench, LifeBuoy];
              const tiles = ["icon-tile-amber", "icon-tile-sky", "icon-tile-teal", "icon-tile-violet"];
              const Icon = icons[i];
              return (
                <div key={step.t} className="relative group flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl ${tiles[i]} shadow-soft-lg flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300`}>
                    <Icon className="text-white" size={26} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-navy/10 text-navy text-xs font-bold flex items-center justify-center shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-navy text-lg">{step.t}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-[220px]">{step.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-page section-pad-sm">
        <div className="relative glass-panel rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
          <div className="glow-orb w-64 h-64 -top-20 -right-20 opacity-[0.10]" style={{ background: "#1a63d6" }} />
          <img
            src="https://picsum.photos/seed/aas-testimonial/300/300"
            alt="Client"
            className="relative w-20 h-20 rounded-full object-cover shrink-0 ring-4 ring-white"
          />
          <div className="relative">
            <Quote className="text-brand/40 mb-3" size={26} />
            <p className="text-lg text-navy leading-snug max-w-2xl">
              They rewired our fill line over a weekend so we didn't lose a single production day.
            </p>
            <p className="text-gray-500 text-sm mt-3">Operations Manager, beverage manufacturer</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page section-pad-sm">
        <div className="relative rounded-2xl bg-brand p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-soft-lg overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-40" style={{ filter: "invert(1)" }} />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white">Have a system that needs attention?</h3>
            <p className="text-white/80 mt-2">Tell us what's happening and we'll get back to you the same day.</p>
          </div>
          <div className="relative"><WhatsAppButton /></div>
        </div>
      </section>
    </>
  );
}
