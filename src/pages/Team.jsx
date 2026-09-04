export default function Team() {
  const rings = ["ring-amber-400/50", "ring-sky-400/50", "ring-teal-400/50", "ring-violet-400/50", "ring-brand/40", "ring-amber-400/50"];
  const people = [
    ["Lead Automation Engineer", "Oversees PLC programming, control system design, and final commissioning sign-off."],
    ["Chief Electrician", "Leads panel building and on-site wiring crews across every installation."],
    ["Field Service Technician", "Handles maintenance call-outs, diagnostics, and after-hours emergency response."],
    ["Instrumentation Specialist", "Selects, calibrates, and installs sensors, meters, and process measurement hardware."],
    ["Project Coordinator", "Keeps site schedules, client communication, and material logistics on track."],
    ["Panel Design Draughtsman", "Produces wiring schematics, panel layouts, and as-built documentation."],
  ];
  return (
    <section className="container-page section-pad-sm">
      <p className="tag-chip mb-3"><span className="tag-dot" /> People</p>
      <h1 className="text-3xl font-bold text-navy mb-4">The team behind the work</h1>
      <p className="text-gray-600 max-w-xl mb-12">
        A small, accountable crew — every job is handled by someone who was in the room when it was scoped.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {people.map(([role, d], i) => (
          <div key={i} className="card-surface p-6">
            <img
              src={`https://picsum.photos/seed/team${i}/200/200`}
              alt=""
              className={`w-16 h-16 rounded-full object-cover mb-4 ring-4 ${rings[i % rings.length]}`}
            />
            <h4 className="font-bold text-navy">{role}</h4>
            <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
