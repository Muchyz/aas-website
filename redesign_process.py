#!/usr/bin/env python3
"""
Redesigns the 'How we work' process section on Home.jsx with a modern
icon-badge timeline. Run from project root: python3 redesign_process.py
"""

def replace_in_file(path, old, new, label):
    with open(path, "r") as f:
        content = f.read()
    if old not in content:
        print(f"⚠️  SKIPPED ({label}): anchor text not found in {path}")
        return
    content = content.replace(old, new, 1)
    with open(path, "w") as f:
        f.write(content)
    print(f"✅ Updated {path} ({label})")

# ---------- 1. Add new icon imports ----------
replace_in_file(
    "src/pages/Home.jsx",
    'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell, ChevronRight, ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";',
    'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell, ChevronRight, ArrowUpRight, Quote, CheckCircle2, Search, PenTool, Wrench, LifeBuoy } from "lucide-react";',
    "add process icons import",
)

# ---------- 2. Replace the Process section ----------
old_block = '''      {/* Process */}
      <section className="bg-offwhite">
        <div className="container-page section-pad-sm">
          <p className="tag-chip mb-3"><span className="tag-dot" /> How we work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">From first call to running system</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div key={step.t} className="relative bg-white rounded-xl border border-line p-6">
                {i < PROCESS.length - 1 && (
                  <span className="hidden md:block absolute top-9 -right-3 w-6 h-px bg-line" />
                )}
                <div className="w-9 h-9 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h4 className="font-bold text-navy">{step.t}</h4>
                <p className="text-gray-600 text-sm mt-2">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>'''

new_block = '''      {/* Process */}
      <section className="relative overflow-hidden bg-offwhite">
        <div className="absolute inset-0 blueprint-grid blueprint-fade pointer-events-none" />
        <div className="container-page section-pad-sm relative">
          <p className="tag-chip mb-3"><span className="tag-dot" /> How we work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-14">From first call to running system</h2>
          <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-400 via-sky-400 to-violet-400 opacity-50" />
            {PROCESS.map((step, i) => {
              const icons = [Search, PenTool, Wrench, LifeBuoy];
              const tiles = ["icon-tile-amber", "icon-tile-sky", "icon-tile-teal", "icon-tile-violet"];
              const Icon = icons[i];
              return (
                <div key={step.t} className="relative group flex flex-col items-center md:items-start text-center md:text-left">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl ${tiles[i]} shadow-soft-lg flex items-center justify-center mb-5 group-hover:-translate-y-1 transition-transform duration-300`}>
                    <Icon className="text-white" size={26} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-navy/10 text-navy text-xs font-bold flex items-center justify-center shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-navy text-lg">{step.t}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-[220px]">{step.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>'''

replace_in_file("src/pages/Home.jsx", old_block, new_block, "redesign Process section")

print("\nDone. Run 'npm run dev' to preview.")
print("The process section now has icon badges, a connecting gradient")
print("line, numbered step markers, and hover lift animation.")
