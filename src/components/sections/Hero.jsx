import { Zap, ArrowUpRight } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-line">
      {/* subtle grid, not glow blobs */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div className="section-pad relative container-page grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="badge-pill mb-6">
            <Zap size={14} /> Advanced Automation Systems
          </span>

          <h1 className="text-4xl md:text-[3.4rem] font-bold text-navy leading-[1.06] tracking-tight">
            Engineering systems{" "}
            <span className="relative inline-block">
              <span className="relative z-10">that run themselves</span>
              <span
                className="absolute left-0 right-0 bottom-1 h-3 -z-0"
                style={{ background: "var(--color-brand)", opacity: 0.15 }}
              />
            </span>
            .
          </h1>

          <p className="mt-7 text-gray-600 text-lg max-w-md leading-relaxed">
            Electrical installations, instrumentation, product supply, and full control
            &amp; automation for factories and plants across Kenya — delivered with
            precision, accountability, and zero excuses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Button to="/services" variant="outline">
              View Our Services <ArrowUpRight size={16} className="inline ml-1" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-line pt-6">
            <div>
              <div className="text-2xl font-bold text-navy">4</div>
              <div className="text-xs text-gray-500 mt-1 leading-snug">Core Solution Areas</div>
            </div>
            <div className="border-l border-line pl-6">
              <div className="text-2xl font-bold text-navy">24/7</div>
              <div className="text-xs text-gray-500 mt-1 leading-snug">Emergency Response</div>
            </div>
            <div className="border-l border-line pl-6">
              <div className="text-2xl font-bold text-navy">100%</div>
              <div className="text-xs text-gray-500 mt-1 leading-snug">Kenya-Wide Coverage</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[1.75rem] border border-line -z-10 hidden sm:block" />
          <div className="rounded-2xl overflow-hidden shadow-soft-lg ring-1 ring-black/5">
            <img
              src="/hero-panel.jpg"
              alt="Industrial control panel"
              className="w-full h-80 md:h-[26rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-7 -left-7 bg-white rounded-xl shadow-soft-lg border border-line px-6 py-5 hidden sm:block">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-brand)" }} />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Trusted</span>
            </div>
            <div className="text-lg font-bold text-navy leading-tight">Certified &amp;<br />Compliant Work</div>
          </div>
        </div>
      </div>
    </section>
  );
}
