import { Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-panel.jpg"
          alt="Industrial control panel"
          className="w-full h-full object-cover"
        />
      </div>

      {/* gradient overlays for legibility + brand tint */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,20,35,0.94) 0%, rgba(10,20,35,0.82) 32%, rgba(10,20,35,0.45) 60%, rgba(10,20,35,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,20,35,0.85) 0%, transparent 35%)",
        }}
      />

      {/* faint grid on top of image, brand-tinted */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to right, black, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent 70%)",
        }}
      />

      <div className="section-pad relative z-10 container-page w-full">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#e8f0fe",
            }}
          >
            <Zap size={14} style={{ color: "var(--color-sky)" }} /> Advanced Automation Systems
          </span>

          <h1 className="text-[2.6rem] md:text-[3.75rem] font-bold text-white leading-[1.04] tracking-tight">
            Engineering systems
            <br />
            <span style={{ color: "var(--color-sky)" }}>that run themselves</span>.
          </h1>

          <p className="mt-7 text-white/75 text-lg max-w-lg leading-relaxed">
            Electrical installations, instrumentation, product supply, and full control
            &amp; automation for factories and plants across Kenya — delivered with
            precision, accountability, and zero excuses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Button
              to="/services"
              variant="outline"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              View Our Services <ArrowUpRight size={16} className="inline ml-1" />
            </Button>
          </div>

          <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
            {["ISO-aligned safety practice", "Kenya-wide project coverage", "Same-day response"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 size={16} style={{ color: "var(--color-sky)" }} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* stat strip anchored bottom, glassy card */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {[
            { n: "4", l: "Core Solution Areas" },
            { n: "24/7", l: "Emergency Response" },
            { n: "100%", l: "Kenya-Wide Coverage" },
            { n: "Same-Day", l: "Quote Turnaround" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl px-5 py-4 backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div className="text-xl md:text-2xl font-bold text-white tracking-tight">{s.n}</div>
              <div className="text-[0.7rem] md:text-xs text-white/60 mt-1 leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
