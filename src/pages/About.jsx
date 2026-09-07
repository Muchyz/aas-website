import { Target, Compass, Gem, Rocket, Quote, Eye, ShieldCheck, Award, TrendingUp, Clock, Users, Layers, FileCheck2, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import { MISSION, VISION, STATS, CERTIFICATIONS } from "../data";

const values = [
  { t: "Our mission", d: "Deliver automation and electrical systems that run reliably, safely, and without surprises.", icon: Target, tile: "icon-tile-amber" },
  { t: "Our approach", d: "Assess properly, wire cleanly, document everything, and stay reachable after handover.", icon: Compass, tile: "icon-tile-sky" },
  { t: "Our standard", d: "Every panel and every line of PLC logic is built the way we'd want it built for our own plant.", icon: Gem, tile: "icon-tile-violet" },
];

const milestones = [
  ["Founded", "AAS opens, taking on panel building and residential-to-light-industrial wiring."],
  ["First major contract", "Automation retrofit for a mid-size manufacturing client."],
  ["Team expansion", "Brought on dedicated PLC programming and maintenance staff."],
  ["Today", "Full-service automation, panel building, and system integration across multiple sectors."],
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid blueprint-fade pointer-events-none" />
        <div className="glow-orb w-96 h-96 -top-32 right-0 opacity-[0.12]" style={{ background: "#1a63d6" }} />
        <div className="container-page relative pt-16 pb-14 md:pt-24 md:pb-16">
          <div className="max-w-2xl">
            <p className="tag-chip mb-3"><span className="tag-dot" /> About us</p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy">
              Started in a workshop, grown on referrals.
            </h1>
            <p className="text-gray-600 mt-5 max-w-xl">
              AAS was built on a simple idea: do the electrical and automation work properly the first
              time, so the client never has to think about it again. From single panel installations
              to full plant automation, our team handles design, supply, installation, and
              commissioning under one roof, backed by engineers who stay accountable long after
              the project is signed off.
            </p>
          </div>
          <div className="relative mt-10 rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src="/about/aas-logo.png"
              alt="Advanced Automation Systems logo"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="glass-panel px-5 py-4">
              <p className="text-navy font-semibold text-sm">A crew that stays accountable</p>
              <p className="text-gray-600 text-xs mt-1">Same technicians who scope the job see it through to commissioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t" style={{ borderColor: "rgba(37,99,235,0.3)" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0a1128 0%, #0f1c3f 45%, #0a1128 100%)" }} />
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-32 left-1/3 w-[30rem] h-[30rem] rounded-full opacity-[0.09] blur-3xl pointer-events-none" style={{ background: "#2563eb" }} />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] rounded-full opacity-[0.07] blur-3xl pointer-events-none" style={{ background: "#0ea5e9" }} />

        <div className="container-page relative section-pad-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <p className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
               style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "var(--color-sky)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--color-sky)" }} />
              Our Foundation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Mission &amp; Vision</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-0.5 mx-auto mt-5 bg-blue-500"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              { label: "Our Mission", text: MISSION, dark: true },
              { label: "Our Vision", text: VISION, dark: false },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{
                  background: item.dark ? "#0f2340" : "#f5efe0",
                  borderLeft: `4px solid ${item.dark ? "#e11d3c" : "#c99a2e"}`,
                }}
              >
                <Quote
                  size={40}
                  style={{ color: item.dark ? "#e11d3c" : "#c99a2e" }}
                  className="mb-4"
                  fill={item.dark ? "#e11d3c" : "#c99a2e"}
                />
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: item.dark ? "rgba(255,255,255,0.5)" : "rgba(15,35,64,0.55)" }}
                >
                  {item.label}
                </p>
                <p
                  className="italic text-lg leading-relaxed"
                  style={{
                    fontFamily: "Georgia, serif",
                    color: item.dark ? "rgba(255,255,255,0.92)" : "#1a2b45",
                  }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {STATS.map((s, i) => {
              const icons = [Layers, Clock, Users, TrendingUp];
              const StatIcon = icons[i % icons.length];
              return (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="rounded-xl px-5 py-6 text-center backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <StatIcon size={18} className="mx-auto mb-2.5" style={{ color: "var(--color-sky)" }} />
                  <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.v}</div>
                  <div className="text-[0.7rem] md:text-xs text-white/55 mt-1.5 uppercase tracking-wide">{s.l}</div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Certifications &amp; Compliance</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((c, i) => {
              const icons = [ShieldCheck, BadgeCheck, FileCheck2, Award];
              const CertIcon = icons[i % icons.length];
              return (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3, borderColor: "rgba(47,168,224,0.5)" }}
                  className="flex items-center gap-2 backdrop-blur-md px-4 py-2.5 rounded-full text-sm font-medium text-white"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.16)" }}
                >
                  <CertIcon size={15} style={{ color: "var(--color-sky)" }} />
                  {c}
                </motion.span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "#0f2340" }}>
        <div className="container-page">
          <SectionHeading eyebrow="What drives us" title="Mission, approach, standard" light />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const dark = i !== 1;
              const accent = dark ? "#e11d3c" : "#c99a2e";
              return (
                <div
                  key={v.t}
                  className="rounded-2xl p-8"
                  style={{
                    background: dark ? "#16294a" : "#f5efe0",
                    borderLeft: `4px solid ${accent}`,
                  }}
                >
                  <Quote size={36} style={{ color: accent }} fill={accent} className="mb-4" />
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: dark ? "rgba(255,255,255,0.5)" : "rgba(15,35,64,0.55)" }}
                  >
                    {v.t}
                  </p>
                  <p
                    className="italic leading-relaxed"
                    style={{
                      fontFamily: "Georgia, serif",
                      color: dark ? "rgba(255,255,255,0.9)" : "#1a2b45",
                    }}
                  >
                    {v.d}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our story" title="Milestones" align="left" />
          <div className="max-w-2xl space-y-8 border-l-2 border-brand/25">
            {milestones.map(([t, d]) => (
              <div key={t} className="relative pl-7">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-brand" />
                <div className="text-navy font-semibold">{t}</div>
                <div className="text-gray-600 text-sm mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
