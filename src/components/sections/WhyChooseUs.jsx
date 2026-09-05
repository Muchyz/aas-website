import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const ICONS = { ShieldCheck, Clock, Award, Users };

const points = [
  { icon: "ShieldCheck", title: "Certified & Compliant", desc: "Electrical work delivered to recognised national safety standards, backed by rigorous audits and design reviews." },
  { icon: "Clock", title: "Fast Turnaround", desc: "Same-day quotes and responsive project scheduling, so your timeline never stalls." },
  { icon: "Award", title: "Proven Expertise", desc: "Deep experience across manufacturing, water treatment, cold chain, and industrial automation." },
  { icon: "Users", title: "Client-First Support", desc: "Direct access to our engineering team from first quote through to project handover." },
];

export default function WhyChooseUs() {
  return (
    <section className="container-page section-pad-sm">
      <div className="mb-10">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Why AAS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy">Why choose us</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <div
              key={p.title}
              className="glass-card p-7 rounded-2xl animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand/10">
                <Icon size={22} className="text-brand" />
              </div>
              <h3 className="font-bold text-navy mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
