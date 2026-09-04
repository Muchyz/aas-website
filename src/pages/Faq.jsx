import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";

const items = [
  ["How fast can you respond to a breakdown?", "Typically within 24 hours; urgent call-outs are prioritised same day where possible."],
  ["Do you work outside your local area?", "Yes, we take on projects across Kenya depending on scope."],
  ["What's included in a maintenance contract?", "Scheduled inspections, preventive servicing, and priority response for faults."],
  ["Can you retrofit older equipment?", "Yes — integrating new controls with existing equipment is a core part of our work."],
  ["Do you provide a warranty on panel builds?", "Yes, workmanship is covered; component warranties follow manufacturer terms."],
  ["How do I get a quote?", "Message us on WhatsApp with the scope and site details, and we'll follow up quickly."],
  ["Do you handle both new installs and repairs?", "Both — new panel builds and installations, plus diagnostics and repair of existing systems."],
  ["Can you supply parts without doing the labor?", "Yes, product supply is a standalone service if you just need components."],
  ["What areas of Kenya do you cover for maintenance contracts?", "Coverage depends on contract scope — message us with your location and we can confirm."],
];

export default function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <section className="max-w-3xl mx-auto section-pad-sm">
      <div className="px-6">
        <SectionHeading eyebrow="Questions" title="Frequently asked" />
        <div className="space-y-3">
          {items.map(([q, a], i) => (
            <div key={q} className="bg-white rounded-xl border border-line shadow-soft overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center gap-3 p-5 text-left"
              >
                <HelpCircle className="text-brand/50 shrink-0" size={18} />
                <span className="text-navy font-medium flex-1">{q}</span>
                <ChevronDown
                  className={`text-brand shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>
              {open === i && <p className="pl-[3.25rem] pr-5 pb-5 text-gray-600 text-sm">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
