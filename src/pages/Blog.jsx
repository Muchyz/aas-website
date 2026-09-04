import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  const posts = [
    ["Signs your control panel needs attention before it fails", "Maintenance", "text-amber-500 bg-amber-500/10"],
    ["What a PLC retrofit actually involves", "Automation", "text-sky-600 bg-sky-500/10"],
    ["Getting maintenance contracts right for multi-shift plants", "Case study", "text-violet-600 bg-violet-500/10"],
  ];
  return (
    <section className="container-page section-pad-sm max-w-3xl">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Insights</p>
      <h1 className="text-3xl font-bold text-navy mb-10">From the field</h1>
      <div className="space-y-4">
        {posts.map(([t, tag, color], i) => (
          <div key={i} className="card-surface overflow-hidden flex items-center gap-4 cursor-pointer group">
            <img
              src={`https://picsum.photos/seed/blog${i}/200/150`}
              alt=""
              className="w-28 h-24 object-cover shrink-0"
            />
            <div className="flex-1 flex items-center justify-between gap-4 py-4 pr-5">
              <div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}>{tag}</span>
                <h4 className="font-bold text-navy mt-2 group-hover:text-brand transition-colors">{t}</h4>
              </div>
              <ArrowUpRight className="text-gray-300 group-hover:text-brand transition-colors shrink-0" size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
