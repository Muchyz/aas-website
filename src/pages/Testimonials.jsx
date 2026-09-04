import { Quote } from "lucide-react";

export default function Testimonials() {
  const quotes = [
    ["They rewired our fill line over a weekend so we didn't lose a single production day.", "Operations Manager, beverage manufacturer"],
    ["Clean panel work, clearly labeled, no shortcuts. Exactly what we needed.", "Facilities Lead, logistics company"],
    ["Fast to respond when our line went down at 6am. Fixed within hours.", "Plant Supervisor, textile manufacturer"],
    ["Our SCADA retrofit came in on budget and the documentation was better than what the original installer left us.", "Maintenance Manager, bottling plant"],
    ["They found a wiring fault two other contractors had missed. Straightforward, no drama.", "Site Engineer, cold storage facility"],
    ["Reliable for scheduled maintenance — they show up when they say they will.", "Operations Director, bakery group"],
  ];
  const [featured, ...rest] = quotes;

  return (
    <section className="container-page section-pad-sm max-w-4xl">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Client feedback</p>
      <h1 className="text-3xl font-bold text-navy mb-10">What clients say</h1>

      <div className="glass-panel relative rounded-2xl p-8 mb-8 overflow-hidden">
        <div className="glow-orb w-56 h-56 -top-16 -right-16 opacity-[0.12]" style={{ background: "#1a63d6" }} />
        <div className="relative flex gap-5 items-start">
          <img src="https://picsum.photos/seed/client0/120/120" alt="" className="w-14 h-14 rounded-full object-cover shrink-0 ring-4 ring-white" />
          <div>
            <Quote className="text-brand/40 mb-2" size={24} />
            <p className="text-navy text-lg leading-snug">{featured[0]}</p>
            <p className="text-gray-500 text-sm mt-3">{featured[1]}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {rest.map(([q, a], i) => (
          <div key={i} className="card-surface p-6 border-l-4 border-l-brand flex gap-4">
            <img
              src={`https://picsum.photos/seed/client${i + 1}/120/120`}
              alt=""
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <p className="text-navy leading-snug">{q}</p>
              <p className="text-gray-500 text-sm mt-3">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
