import { Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[100svh] flex items-center">
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
            "linear-gradient(100deg, rgba(8,17,30,0.96) 0%, rgba(8,17,30,0.86) 30%, rgba(8,17,30,0.5) 62%, rgba(8,17,30,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to top, rgba(8,17,30,0.95) 0%, transparent 40%)",
        }}
      />

      {/* faint grid on top of image, brand-tinted */}
      <div
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to right, black, transparent 65%)",
          WebkitMaskImage: "linear-gradient(to right, black, transparent 65%)",
        }}
      />

      <div className="relative z-10 container-page w-full px-6">
        <div className="max-w-xl">
          <span
            className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#e8f0fe",
            }}
          >
            <Zap size={12} style={{ color: "var(--color-sky)" }} /> Advanced Automation Systems
          </span>

          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.4rem] font-bold text-white leading-[1.15] md:leading-[1.08] tracking-tight">
            Engineering systems{" "}
            <span style={{ color: "var(--color-sky)" }}>that run themselves</span>.
          </h1>

          <p className="mt-4 text-white/70 text-sm md:text-base max-w-md leading-relaxed">
            Electrical installations, instrumentation, product supply, and full control
            &amp; automation for factories and plants across Kenya.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <Button
              to="/services"
              variant="outline"
              className="!border-white/30 !text-white hover:!bg-white/10 !text-sm !px-4 !py-2.5"
            >
              View Our Services <ArrowUpRight size={15} className="inline ml-1" />
            </Button>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {["ISO-aligned safety", "Kenya-wide coverage", "Same-day response"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                <CheckCircle2 size={13} style={{ color: "var(--color-sky)" }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[0.65rem] uppercase tracking-[0.15em]">Scroll</span>
        <span className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
