import {
  Target, Compass, Gem, ShieldCheck, Award, TrendingUp,
  Clock, Users, Layers, FileCheck2, BadgeCheck, Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import { MISSION, VISION, STATS, CERTIFICATIONS } from "../data";

const values = [
  { t: "Our mission", d: "Deliver automation and electrical systems that run reliably, safely, and without surprises.", icon: Target },
  { t: "Our approach", d: "Assess properly, wire cleanly, document everything, and stay reachable after handover.", icon: Compass },
  { t: "Our standard", d: "Every panel and every line of PLC logic is built the way we'd want it built for our own plant.", icon: Gem },
];

const milestones = [
  ["Founded", "AAS opens, taking on panel building and residential-to-light-industrial wiring."],
  ["First major contract", "Automation retrofit for a mid-size manufacturing client."],
  ["Team expansion", "Brought on dedicated PLC programming and maintenance staff."],
  ["Today", "Full-service automation, panel building, and system integration across multiple sectors."],
];

/* Abstract schematic / circuit-trace motif — grounded in the electrical & automation subject matter */
function SchematicArt() {
  return (
    <svg viewBox="0 0 420 480" className="w-full h-full" fill="none">
      <g stroke="#2563eb" strokeWidth="1.5" opacity="0.35">
        <path d="M40 40 H180 V120 H340" />
        <path d="M180 120 V220" />
        <path d="M40 200 H120 V320 H260 V400" />
        <path d="M260 320 H340 V440" />
        <path d="M120 320 V440" />
        <path d="M340 120 V60 H400" />
      </g>
      <g stroke="#38bdf8" strokeWidth="1.5" opacity="0.3" strokeDasharray="2 6">
        <path d="M40 40 V200" />
        <path d="M260 220 V320" />
        <path d="M180 220 H260" />
      </g>
      {[
        [40, 40], [180, 40], [180, 120], [340, 120], [40, 200],
        [120, 200], [120, 320], [260, 320], [260, 400], [340, 440],
        [120, 440], [180, 220], [260, 220], [400, 60],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 5 : 3} fill={i % 3 === 0 ? "#2563eb" : "#38bdf8"} opacity="0.5" />
      ))}
      <rect x="160" y="100" width="40" height="24" rx="3" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
      <rect x="240" y="300" width="40" height="24" rx="3" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

/* Floating quote card — rounded, shadowed, sits on white with room around it */
function FloatingQuoteCard({ label, text, dark, accent }) {
  return (
    <div
      className="relative rounded-3xl p-8 md:p-10"
      style={{
        background: dark ? "#0a1a35" : "#eef4fc",
        borderLeft: `5px solid ${accent}`,
        boxShadow: dark
          ? "0 20px 45px -20px rgba(10,26,53,0.45)"
          : "0 20px 45px -24px rgba(37,99,235,0.22)",
      }}
    >
      <Quote size={34} style={{ color: accent }} fill={accent} className="mb-5" />
      <p
        className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
        style={{ color: dark ? "rgba(255,255,255,0.55)" : "rgba(10,26,53,0.5)" }}
      >
        {label}
      </p>
      <p
        className="text-xl md:text-2xl leading-relaxed italic"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: dark ? "rgba(255,255,255,0.95)" : "#0a1a35",
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* Full-bleed quote block — breaks out of container-page to run edge to edge */
function QuoteBlock({ label, text, dark, accent }) {
  return (
    <div
      className="relative w-screen overflow-hidden"
      style={{ marginLeft: "calc(50% - 50vw)", background: dark ? "#0a1a35" : "#eef4fc" }}
    >
      <div
        className="absolute right-8 md:right-24 bottom-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          border: `1px solid ${dark ? "rgba(255,255,255,0.06)" : "rgba(10,26,53,0.05)"}`,
          boxShadow: `0 0 0 24px ${dark ? "rgba(255,255,255,0.03)" : "rgba(10,26,53,0.025)"}, 0 0 0 48px ${dark ? "rgba(255,255,255,0.02)" : "rgba(10,26,53,0.018)"}`,
        }}
      />
      <div
        className="container-page relative py-16 md:py-20 pl-10 md:pl-16"
        style={{ borderLeft: `5px solid ${accent}` }}
      >
        <Quote size={40} style={{ color: accent }} fill={accent} className="mb-6" />
        <p
          className="text-xs font-bold uppercase tracking-[0.15em] mb-5"
          style={{ color: dark ? "rgba(255,255,255,0.55)" : "rgba(10,26,53,0.5)" }}
        >
          {label}
        </p>
        <p
          className="text-2xl md:text-3xl leading-relaxed max-w-2xl italic"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: dark ? "rgba(255,255,255,0.95)" : "#0a1a35",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(1100px 480px at 88% -10%, rgba(37,99,235,0.07), transparent 60%)" }}
        />
        <div className="absolute top-0 right-0 w-[26rem] h-[30rem] hidden md:block opacity-70 pointer-events-none">
          <SchematicArt />
        </div>
        <div className="container-page relative pt-16 pb-14 md:pt-28 md:pb-20">
          <p className="flex items-center gap-2 mb-5 text-sm font-medium" style={{ color: "#2563eb" }}>
            <span className="w-8 h-px" style={{ background: "#2563eb" }} />
            About us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-navy leading-[1.15] md:leading-[1.08] tracking-tight max-w-2xl">
            Started in a workshop, grown on referrals.
          </h1>
          <p className="text-gray-600 mt-6 max-w-lg text-base md:text-lg leading-relaxed">
            AAS was built on a simple idea: do the electrical and automation work properly the
            first time, so the client never has to think about it again. From single panel
            installations to full plant automation, our team handles design, supply,
            installation, and commissioning under one roof.
          </p>
        </div>
      </div>

      {/* MISSION & VISION — full-bleed quote blocks, stacked flush */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }}>
        <QuoteBlock label="Our Mission" text={MISSION} dark accent="#2563eb" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.1 }}>
        <QuoteBlock label="Our Vision" text={VISION} dark={false} accent="#38bdf8" />
      </motion.div>

      {/* STATS — full-bleed dark strip beneath the quote blocks */}
      <div className="relative w-screen overflow-hidden" style={{ marginLeft: "calc(50% - 50vw)", background: "#0a1a35" }}>
        <div className="container-page py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10">
            {STATS.map((s, i) => {
              const icons = [Layers, Clock, Users, TrendingUp];
              const StatIcon = icons[i % icons.length];
              return (
                <div key={s.l} className="md:pl-8 first:md:pl-0">
                  <StatIcon size={18} className="mb-3" style={{ color: "#38bdf8" }} />
                  <div className="text-2xl md:text-3xl font-bold text-white leading-none">{s.v}</div>
                  <div className="text-xs text-white/50 mt-1.5">{s.l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="container-page py-14 md:py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Certifications & compliance</p>
        <div className="flex flex-wrap gap-y-8">
          {CERTIFICATIONS.map((c, i) => {
            const icons = [ShieldCheck, BadgeCheck, FileCheck2, Award];
            const CertIcon = icons[i % icons.length];
            return (
              <div
                key={c}
                className={`flex items-center gap-3 pr-8 md:pr-10 ${i > 0 ? "pl-8 md:pl-10 border-l" : ""}`}
                style={i > 0 ? { borderColor: "rgba(37,99,235,0.15)" } : {}}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(37,99,235,0.08)" }}>
                  <CertIcon size={17} style={{ color: "#2563eb" }} />
                </div>
                <span className="text-sm font-medium text-navy leading-snug max-w-[9rem]">{c}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* WHAT DRIVES US — floating quote cards on white */}
      <div className="container-page py-16 md:py-20">
        <SectionHeading eyebrow="What drives us" title="Mission, approach, standard" />
        <div className="max-w-2xl mx-auto space-y-6">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <FloatingQuoteCard
                label={v.t}
                text={v.d}
                dark={i % 2 === 0}
                accent={i % 2 === 0 ? "#2563eb" : "#38bdf8"}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* MILESTONES */}
      <div className="container-page py-16 md:py-20 pb-24">
        <SectionHeading eyebrow="Our story" title="Milestones" align="left" />
        <div className="max-w-2xl relative">
          <div
            className="absolute left-6 top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, #2563eb, rgba(37,99,235,0.1))" }}
          />
          <div className="space-y-12">
            {milestones.map(([t, d], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex gap-6"
              >
                <div
                  className="relative shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: "#0a1a35", color: "#38bdf8", boxShadow: "0 0 0 4px #ffffff" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-2">
                  <div className="text-navy font-semibold text-lg">{t}</div>
                  <div className="text-gray-600 text-sm mt-1.5 max-w-md leading-relaxed">{d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
