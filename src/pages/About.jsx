import { Target, Compass, Gem } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";

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
              time, so the client never has to think about it again.
            </p>
          </div>
          <div className="relative mt-10 rounded-2xl overflow-hidden shadow-soft-lg">
            <img
              src="https://picsum.photos/seed/aas-team/1200/500"
              alt="AAS technicians at work"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="glass-panel absolute bottom-4 left-4 right-4 sm:right-auto rounded-xl px-5 py-4 sm:max-w-xs">
              <p className="text-navy font-semibold text-sm">A crew that stays accountable</p>
              <p className="text-gray-600 text-xs mt-1">Same technicians who scope the job see it through to commissioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-offwhite">
        <div className="container-page">
          <SectionHeading eyebrow="What drives us" title="Mission, approach, standard" />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="card-surface p-6 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-soft ${v.tile}`}>
                    <v.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-bold text-navy">{v.t}</h4>
                </div>
                <p className="text-gray-600 text-sm mt-2">{v.d}</p>
              </div>
            ))}
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
