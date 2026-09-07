import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const ICONS = { ShieldCheck, Clock, Award, Users };

const ACCENTS = ["#2563eb", "#38bdf8", "#0ea5e9", "#1d4ed8"];

const points = [
  { icon: "ShieldCheck", title: "Certified & Compliant", desc: "Electrical work delivered to recognised national safety standards, backed by rigorous audits and design reviews." },
  { icon: "Clock", title: "Fast Turnaround", desc: "Same-day quotes and responsive project scheduling, so your timeline never stalls." },
  { icon: "Award", title: "Proven Expertise", desc: "Deep experience across manufacturing, water treatment, cold chain, and industrial automation." },
  { icon: "Users", title: "Client-First Support", desc: "Direct access to our engineering team from first quote through to project handover." },
];

export default function WhyChooseUs() {
  return (
    <section className="container-page section-pad-sm">
      <div className="mb-12 max-w-xl">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Why AAS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy">Why choose us</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, i) => {
          const Icon = ICONS[p.icon];
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <div
              key={p.title}
              className="relative rounded-2xl p-6 bg-white animate-fade-up"
              style={{
                animationDelay: `${i * 100}ms`,
                boxShadow: "0 12px 30px -14px rgba(10,26,53,0.18)",
                borderTop: `3px solid ${accent}`,
              }}
            >
              <span
                className="absolute top-4 right-5 text-2xl font-extrabold"
                style={{ color: "rgba(10,26,53,0.06)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="relative w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: `${accent}1a` }}
              >
                <Icon size={22} style={{ color: accent }} />
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
