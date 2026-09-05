import { Factory } from "lucide-react";
import { SECTORS } from "../../data";

export default function SectorsServed() {
  return (
    <section className="container-page section-pad-sm">
      <div className="mb-10">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Who we serve</p>
        <h2 className="text-2xl md:text-3xl font-bold text-navy">Sectors we serve</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {SECTORS.map((sector, i) => (
          <div
            key={sector}
            className="glass-card px-5 py-3 rounded-full flex items-center gap-2 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <Factory size={16} className="text-brand" />
            <span className="text-sm font-medium text-navy">{sector}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
