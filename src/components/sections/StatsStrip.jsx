const stats = [
  { n: "4", label: "Core Solution Areas", color: "var(--color-brand)" },
  { n: "24/7", label: "Emergency Response", color: "var(--color-teal)" },
  { n: "100%", label: "Kenya-Wide Coverage", color: "var(--color-violet)" },
  { n: "Same-Day", label: "Quote Turnaround", color: "var(--color-sky)" },
];

export default function StatsStrip() {
  return (
    <section className="container-page">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="card-surface p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: s.color }}>{s.n}</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
