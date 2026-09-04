const items = ["Licensed & Insured", "Certified Technicians", "24/7 Response", "Kenya-Wide Coverage"];

export default function TrustStrip() {
  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2">
        {items.map((t) => (
          <span key={t} className="text-white/90 text-sm font-medium">{t}</span>
        ))}
      </div>
    </section>
  );
}
