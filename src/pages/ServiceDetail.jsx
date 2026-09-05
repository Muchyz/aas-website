import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell } from "lucide-react";
import { SERVICES } from "../data";
import WhatsAppButton from "../components/WhatsAppButton";

const ICONS = { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell };
const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
  MessageSquare: { tile: "rose", text: "text-rose-600" },
  Activity: { tile: "emerald", text: "text-emerald-600" },
  Monitor: { tile: "indigo", text: "text-indigo-600" },
  Waves: { tile: "orange", text: "text-orange-600" },
  Radio: { tile: "cyan", text: "text-cyan-600" },
  Droplets: { tile: "fuchsia", text: "text-fuchsia-600" },
  Bell: { tile: "lime", text: "text-lime-600" },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = ICONS[service.icon];
  const a = ACCENTS[service.icon];

  return (
    <section className="max-w-4xl mx-auto section-pad-sm">
      <div className="px-6">
        <Link to="/services" className="text-brand font-semibold text-sm mb-6 inline-flex items-center gap-1.5">
          <ArrowLeft size={15} /> All services
        </Link>

        <div className="relative rounded-2xl overflow-hidden shadow-soft-lg mb-8">
          <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
          <div className={`absolute top-5 left-5 w-12 h-12 rounded-2xl icon-tile-${a.tile} shadow-soft flex items-center justify-center`}>
            <Icon className="text-white" size={22} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-navy">{service.title}</h1>
        <p className="text-gray-600 mt-4 max-w-xl">{service.blurb}</p>

        {service.longDescription && (
          <div className="mt-6 space-y-4 max-w-2xl">
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        )}

        <h3 className="text-navy font-bold mt-10 mb-4">What's included</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {service.items.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4 shadow-soft">
              <CheckCircle2 className={a.text} size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span className="text-navy text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-10"><WhatsAppButton /></div>
      </div>
    </section>
  );
}
