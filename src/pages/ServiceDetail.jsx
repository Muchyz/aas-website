import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowLeft, ArrowUpRight, Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell } from "lucide-react";
import { SERVICES, RELATED_SERVICES, BRANDS } from "../data";
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
  const related = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <section className="max-w-4xl mx-auto section-pad-sm !pt-6 md:!pt-8">
      <div className="px-6">
        <Link to="/services" className="text-brand font-semibold text-sm mb-6 inline-flex items-center gap-1.5">
          <ArrowLeft size={15} /> All services
        </Link>

        {/* Hero image with overlapping icon badge */}
        <div className="relative -mx-3 sm:mx-0">
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
            <img src={service.image} alt={service.title} className="w-full h-56 sm:h-80 object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,26,53,0.35), transparent 50%)" }}
            />
          </div>
          <div
            className={`absolute -bottom-7 left-6 w-16 h-16 rounded-full icon-tile-${a.tile} flex items-center justify-center shrink-0`}
            style={{ border: "4px solid #ffffff", boxShadow: "0 10px 25px -8px rgba(10,26,53,0.35)" }}
          >
            <Icon className="text-white" size={26} />
          </div>
        </div>

        {/* Title block with accent left border */}
        <div className="pl-6 mt-12 border-l-4" style={{ borderColor: "#2563eb" }}>
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-navy">{service.title}</h1>
          <p className="text-gray-600 mt-4 max-w-xl">{service.blurb}</p>
        </div>

        {service.longDescription && (
          <div className="mt-6 space-y-4 max-w-2xl">
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        )}

        {service.slug === "product-supplies" ? (
          <>
            <h3 className="text-navy font-bold mt-10 mb-4">Products we supply</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.items.map((item) => (
                <div key={item.name} className="bg-white border border-line rounded-xl overflow-hidden shadow-soft flex flex-col">
                  <img src={item.image} alt={item.name} className="w-full h-auto object-contain" />
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-navy font-semibold text-sm mb-1">{item.name}</h4>
                    {item.description && (
                      <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-navy font-bold mt-14 mb-4">Brands we deal with</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-white border border-line rounded-xl p-3 flex items-center justify-center shadow-soft"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-24 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-navy font-bold mt-10 mb-4">What's included</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.items.map((item) => {
                const isObj = typeof item === "object";
                const label = isObj ? item.name : item;
                const img = isObj ? item.image : null;
                return (
                  <div key={label} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4 shadow-soft">
                    {img ? (
                      <img src={img} alt={label} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                    ) : (
                      <CheckCircle2 className={a.text} size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                    )}
                    <span className="text-navy text-sm">{label}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-navy font-bold mb-4">Related services</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => {
                const RIcon = ICONS[r.icon];
                const ra = ACCENTS[r.icon];
                return (
                  <Link
                    key={r.slug}
                    to={`/services/${r.slug}`}
                    className="card-surface overflow-hidden group flex"
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-28 shrink-0 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-xl icon-tile-${ra.tile} shadow-soft flex items-center justify-center shrink-0`}>
                          <RIcon className="text-white" size={16} />
                        </div>
                        <h4 className="text-sm font-bold text-navy">{r.title}</h4>
                      </div>
                      <span className="inline-flex items-center gap-1 text-brand text-xs font-medium">
                        View <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-10"><WhatsAppButton /></div>
      </div>
    </section>
  );
}
