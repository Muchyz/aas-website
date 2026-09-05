#!/usr/bin/env python3
"""
Adds 'Consulting' and 'Power Quality Analysis' services to the AAS website.
Run from the project root: python3 update_services.py
"""
import re

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

# ---------- 1. src/index.css — add two new tile color classes ----------
replace_in_file(
    "src/index.css",
    '.icon-tile-violet { background: linear-gradient(135deg, #a78bfa, #6d28d9); }',
    '.icon-tile-violet { background: linear-gradient(135deg, #a78bfa, #6d28d9); }\n'
    '.icon-tile-rose    { background: linear-gradient(135deg, #fb7185, #be123c); }\n'
    '.icon-tile-emerald { background: linear-gradient(135deg, #34d399, #047857); }',
    "new tile colors",
)

# ---------- 2. src/data.js — add two new service objects ----------
new_services = '''      "Network reinforcement and reactive compensation recommendations",
    ],
  },
  {
    slug: "consulting",
    title: "Consulting",
    blurb: "Expert guidance before, during, and after your project — hourly consultation, diagnostics, and turnkey engineering design.",
    icon: "MessageSquare",
    image: "https://picsum.photos/seed/aas-consulting/800/600",
    items: [
      "Diagnostics and troubleshooting services",
      "Application design",
      "PLC & drives programming training",
      "Turnkey engineering project design",
      "Hourly consultation services",
    ],
  },
  {
    slug: "power-quality-analysis",
    title: "Power Quality Analysis",
    blurb: "Energy data logging and power quality analysis to optimize efficiency, sizing, and long-term system performance.",
    icon: "Activity",
    image: "https://picsum.photos/seed/aas-power-quality/800/600",
    items: [
      "Active power consumption (kW) monitoring",
      "Apparent power (kVA) analysis",
      "Power factor (PF) assessment",
      "Over-voltage and transient detection",
      "Frequency deviation (Hz) monitoring",
      "Remote, real-time power logging",
    ],
  },
];'''

replace_in_file(
    "src/data.js",
    '      "Network reinforcement and reactive compensation recommendations",\n    ],\n  },\n];',
    new_services,
    "SERVICES array",
)

# ---------- 3. Wire up icons in Home.jsx, Services.jsx, ServiceDetail.jsx ----------
files = {
    "src/pages/Home.jsx": {
        "import_old": 'import { Zap, Gauge, Package, Cpu, ChevronRight, ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";',
        "import_new": 'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, ChevronRight, ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";',
    },
    "src/pages/Services.jsx": {
        "import_old": 'import { Zap, Gauge, Package, Cpu, ArrowUpRight } from "lucide-react";',
        "import_new": 'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, ArrowUpRight } from "lucide-react";',
    },
    "src/pages/ServiceDetail.jsx": {
        "import_old": 'import { CheckCircle2, ArrowLeft, Zap, Gauge, Package, Cpu } from "lucide-react";',
        "import_new": 'import { CheckCircle2, ArrowLeft, Zap, Gauge, Package, Cpu, MessageSquare, Activity } from "lucide-react";',
    },
}

icons_old = "const ICONS = { Zap, Gauge, Package, Cpu };"
icons_new = "const ICONS = { Zap, Gauge, Package, Cpu, MessageSquare, Activity };"

accents_old = '''const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
};'''

accents_new = '''const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
  MessageSquare: { tile: "rose", text: "text-rose-600" },
  Activity: { tile: "emerald", text: "text-emerald-600" },
};'''

for path, imports in files.items():
    replace_in_file(path, imports["import_old"], imports["import_new"], "lucide-react import")
    replace_in_file(path, icons_old, icons_new, "ICONS map")
    replace_in_file(path, accents_old, accents_new, "ACCENTS map")

print("\nDone. Run 'npm run dev' (or your build command) to preview.")
print("Remember to swap the picsum.photos placeholder images in data.js")
print("for real photos once you have them, saved as:")
print("  public/services/consulting.jpg")
print("  public/services/power-quality-analysis.jpg")
