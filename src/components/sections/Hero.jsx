import { Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* faint engineering grid, fading downward */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
        }}
      />

      {/* soft radial wash, top right — single, restrained */}
      <div
        className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
          opacity: 0.06,
        }}
      />

      <div className="section-pad relative container-page grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="badge-pill mb-7">
            <Zap size={14} /> Advanced Automation Systems
          </span>

          <h1 className="text-[2.5rem] md:text-[3.6rem] font-bold text-navy leading-[1.04] tracking-tight">
            Engineering systems
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">that run themselves</span>
              <svg
                className="absolute left-0 -bottom-1 w-full h-3 z-0"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 C 80 2, 220 2, 298 9"
                  stroke="var(--color-brand)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.35"
                />
              </svg>
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

          <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
            {["ISO-aligned safety practice", "Kenya-wide project coverage", "Same-day response"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 size={16} style={{ color: "var(--color-brand)" }} />
                {t}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-line pt-7">
            <div>
              <div className="text-3xl font-bold text-navy tracking-tight">4</div>
              <div className="text-xs text-gray-500 mt-1 leading-snug">Core Solution Areas</div>
            </div>
            <div className="border-l border-line pl-6">
              <div className="text-3xl font-bold text-navy tracking-tight">24/7</div>
              <div className="text-xs text-gray-500 mt-1 leading-snug">Emergency Response</div>
            </div>
            <div className="border-l border-line pl-6">
              <div className="text-3xl font-bold text-navy tracking-tight">100%</div>
              <div className="text-xs text-gray-500 mt-1 leading-snug">Kenya-Wide Coverage</div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* offset frame behind image */}
          <div
            className="absolute -inset-4 rounded-[2rem] -z-10 hidden sm:block"
            style={{ border: "1px solid var(--color-line)" }}
          />
          <div
            className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl -z-10 hidden sm:block"
            style={{ background: "var(--color-brand)", opacity: 0.08 }}
          />

          <div className="rounded-2xl overflow-hidden shadow-soft-lg ring-1 ring-black/5">
            <img
              src="/hero-panel.jpg"
              alt="Industrial control panel"
              className="w-full h-80 md:h-[27rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-7 bg-white rounded-xl shadow-soft-lg border border-line px-6 py-5 hidden sm:block max-w-[13rem]">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-brand)" }} />
              <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-[0.08em]">
                Trusted Delivery
              </span>
            </div>
            <div className="text-base font-bold text-navy leading-snug">
              Certified &amp; compliant, project after project
            </div>
          </div>

          <div className="absolute top-6 -right-4 bg-white rounded-full shadow-soft-lg border border-line px-4 py-2 hidden md:flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--color-teal)" }}
            />
            <span className="text-xs font-semibold text-navy">Live monitoring ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
