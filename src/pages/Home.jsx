import { Link } from "react-router-dom";
import { Zap, Gauge, Package, Cpu, ChevronRight, ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";
import { SERVICES, VALUES, PROCESS } from "../data";
import WhatsAppButton from "../components/WhatsAppButton";

const ICONS = { Zap, Gauge, Package, Cpu };
const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid blueprint-fade pointer-events-none" />
        <div className="glow-orb w-[28rem] h-[28rem] -top-40 -right-20 opacity-[0.14]" style={{ background: "#1a63d6" }} />
        <div className="glow-orb w-72 h-72 top-1/2 -left-16 opacity-[0.10]" style={{ background: "#2fa8e0" }} />

        <div className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="tag-chip mb-5"><span className="tag-dot" /> Advanced Automation Systems</p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.1]">
              Engineering that keeps running long after we've left site.
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

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-soft-lg">
              <img src="https://picsum.photos/seed/aas-panel/800/600" alt="Industrial control panel" className="w-full h-80 object-cover" />
            </div>
            <div className="glass-panel absolute -bottom-6 -left-6 rounded-xl px-5 py-4 hidden sm:flex items-center gap-3 max-w-[15rem]">
              <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-teal-600" size={20} />
              </div>
              <div>
                <p className="text-navy font-semibold text-sm leading-tight">Same-day response</p>
                <p className="text-gray-500 text-xs mt-0.5">on urgent call-outs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  src={`https://picsum.photos/seed/${s.slug}/500/280`}
                  alt={s.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* Process */}
      <section className="bg-offwhite">
        <div className="container-page section-pad-sm">
          <p className="tag-chip mb-3"><span className="tag-dot" /> How we work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">From first call to running system</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.t} className="relative bg-white rounded-xl border border-line p-6">
                {i < PROCESS.length - 1 && (
                  <span className="hidden md:block absolute top-9 -right-3 w-6 h-px bg-line" />
                )}
                <div className="w-9 h-9 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-navy">{step.t}</h4>
                <p className="text-gray-600 text-sm mt-2">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page section-pad-sm">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Why clients stay</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {VALUES.map((v, i) => {
            const tiles = ["icon-tile-amber", "icon-tile-sky", "icon-tile-teal"];
            return (
              <div key={v.t} className="card-surface p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-soft ${tiles[i % 3]}`}>
                    <CheckCircle2 className="text-white" size={19} />
                  </div>
                  <h4 className="text-lg font-bold text-navy">{v.t}</h4>
                </div>
                <p className="text-gray-600 text-sm mt-2">{v.d}</p>
              </div>
            );
          })}
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
