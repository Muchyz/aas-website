import { ShieldCheck, Zap, Award, Users, Headset, MapPin, Wallet } from "lucide-react";

const ACCENT = "#2563eb";

const points = [
  { icon: ShieldCheck, title: "Certified & Compliant", desc: "Electrical work delivered to recognised national safety standards, backed by rigorous audits and design reviews." },
  { icon: Zap, title: "Fast Turnaround", desc: "Same-day quotes and responsive project scheduling, so your timeline never stalls." },
  { icon: Award, title: "Proven Expertise", desc: "Deep experience across manufacturing, water treatment, cold chain, and industrial automation." },
  { icon: Users, title: "Client-First Support", desc: "Direct access to our engineering team from first quote through to project handover." },
  { icon: Headset, title: "24/7 Support", desc: "Round-the-clock response for urgent faults and emergency callouts, whenever they arise." },
  { icon: MapPin, title: "Nationwide Coverage", desc: "On-site teams and support reaching clients across Kenya, not just in major towns." },
  { icon: Wallet, title: "Transparent Pricing", desc: "Clear, upfront quotes with no hidden costs, so you know exactly what you're paying for." },
];

export default function WhyChooseUs() {
  return (
    <section className="container-page section-pad-sm relative overflow-hidden">
      <div
        className="absolute -top-10 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%)" }}
      />
      <div className="mb-10 max-w-xl">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Why AAS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy">Why choose us</h2>
      </div>

      <div className="space-y-5 max-w-2xl">
        {points.map((p, i) => {
          const accent = ACCENT;
          return (
            <div
              key={p.title}
              className="relative flex items-center gap-5 rounded-2xl p-5 animate-fade-up backdrop-blur-xl"
              style={{
                animationDelay: `${i * 100}ms`,
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 20px 45px -20px rgba(10,26,53,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
                borderLeft: `4px solid ${accent}`,
              }}
            >
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: accent,
                  boxShadow: `0 0 20px 2px ${accent}55`,
                }}
              >
                <p.icon size={26} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
