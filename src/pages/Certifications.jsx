import { ShieldCheck, GraduationCap, FileCheck2 } from "lucide-react";

export default function Certifications() {
  const items = [
    { t: "Electrical safety compliance", d: "Work carried out to recognised national electrical safety standards.", icon: ShieldCheck, tile: "icon-tile-sky" },
    { t: "Vendor-trained technicians", d: "Staff trained on the PLC and control brands we install and service.", icon: GraduationCap, tile: "icon-tile-amber" },
    { t: "Insured & licensed", d: "Fully licensed to operate as an electrical and automation contractor.", icon: FileCheck2, tile: "icon-tile-teal" },
  ];
  return (
    <section className="container-page section-pad-sm">
      <p className="tag-chip mb-3"><span className="tag-dot" /> Trust &amp; compliance</p>
      <h1 className="text-3xl font-bold text-navy mb-4">Certifications</h1>
      <div className="relative rounded-2xl overflow-hidden shadow-soft mb-12">
        <img src="https://picsum.photos/seed/aas-cert/1200/400" alt="Panel inspection" className="w-full h-56 object-cover" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.t} className="card-surface p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-soft ${it.tile}`}>
                <it.icon className="text-white" size={20} />
              </div>
              <h4 className="font-bold text-navy">{it.t}</h4>
            </div>
            <p className="text-gray-600 text-sm mt-2">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
