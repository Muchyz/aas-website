import { Zap } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="glow-orb w-[28rem] h-[28rem] -top-32 -right-32 opacity-[0.16]" style={{ background: "var(--color-brand)" }} />
      <div className="glow-orb w-80 h-80 top-1/3 -left-36 opacity-[0.13]" style={{ background: "var(--color-teal)" }} />
      <div className="glow-orb w-72 h-72 bottom-0 right-1/4 opacity-[0.11]" style={{ background: "var(--color-violet)" }} />

      <div className="section-pad relative container-page grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="badge-pill mb-6">
            <Zap size={14} /> Advanced Automation Systems
          </span>

          <h1 className="text-4xl md:text-[3.25rem] font-bold text-navy leading-[1.08] tracking-tight">
            Creative engineering solutions,{" "}
            <span className="text-gradient">built to run</span> without you standing over them.
          </h1>

          <p className="mt-7 text-gray-600 text-lg max-w-md leading-relaxed">
            Electrical installations, instrumentation, product supply, and full control &amp;
            automation for factories and plants across Kenya — delivered with professionalism,
            innovation, and quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton />
            <Button to="/services" variant="outline">View Our Services</Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" /> 4 Core Solution Areas
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-teal)" }} /> Kenya-Wide Reach
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-violet)" }} /> Same-Day Response
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src="https://picsum.photos/seed/aas-hero/800/600"
              alt="Industrial control panel"
              className="w-full h-80 md:h-[26rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-7 -left-7 card-glass rounded-xl shadow-soft-lg px-6 py-5 hidden sm:block">
            <div className="text-2xl font-bold text-navy">4</div>
            <div className="text-xs text-gray-500 font-medium">Solution Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
}
