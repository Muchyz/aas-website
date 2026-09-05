#!/usr/bin/env python3
"""
Adds SCADA, Variable Frequency Drives, Industrial Wireless Communication,
Pump Monitoring Systems, and Automated School Bell as full services with
long-form descriptions. Also upgrades ServiceDetail.jsx to render paragraph
content. Run from project root: python3 update_services_2.py
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

# ---------- 1. New tile colors ----------
replace_in_file(
    "src/index.css",
    '.icon-tile-emerald { background: linear-gradient(135deg, #34d399, #047857); }',
    '.icon-tile-emerald { background: linear-gradient(135deg, #34d399, #047857); }\n'
    '.icon-tile-indigo  { background: linear-gradient(135deg, #818cf8, #4338ca); }\n'
    '.icon-tile-orange  { background: linear-gradient(135deg, #fb923c, #c2410c); }\n'
    '.icon-tile-cyan    { background: linear-gradient(135deg, #22d3ee, #0e7490); }\n'
    '.icon-tile-fuchsia { background: linear-gradient(135deg, #e879f9, #a21caf); }\n'
    '.icon-tile-lime    { background: linear-gradient(135deg, #a3e635, #4d7c0f); }',
    "5 new tile colors",
)

# ---------- 2. New services in data.js ----------
new_services = '''      "Remote, real-time power logging",
    ],
  },
  {
    slug: "scada",
    title: "SCADA",
    blurb: "Real-time visibility and control of your process, accessible from the control room or from anywhere in the field.",
    icon: "Monitor",
    image: "https://picsum.photos/seed/aas-scada/800/600",
    longDescription: [
      "SCADA — Supervisory Control and Data Acquisition — gives you a live window into your process. It combines networked communication with graphical Human Machine Interfaces (HMIs) to bring high-level supervisory control to plant operators, wherever they're stationed.",
      "Our SCADA systems talk directly to your PLCs and field instruments, pulling data in real time and logging it for later analysis. Every reading, alarm, and trend is available on-screen, so your team can spot a problem before it becomes downtime.",
      "We build SCADA solutions to be simple enough for operators to pick up quickly, while still giving engineers the depth of data they need to fine-tune performance.",
    ],
    items: [
      "Real-time process monitoring dashboards",
      "Historical data logging and trending",
      "Remote supervisory control",
      "Alarm management and notifications",
      "Integration with existing PLCs and instrumentation",
      "Custom HMI screen design",
    ],
  },
  {
    slug: "variable-frequency-drives",
    title: "Variable Frequency Drives",
    blurb: "Precise motor speed and torque control that cuts energy waste and extends equipment life.",
    icon: "Waves",
    image: "https://picsum.photos/seed/aas-vfd/800/600",
    longDescription: [
      "A Variable Frequency Drive is the most efficient way to control a three-phase AC induction motor, matching speed and torque to the actual demand of your process instead of running flat-out all the time.",
      "We design, supply, install, and commission VFD systems for fans, pumps, conveyors, and other rotating equipment. Done right, this cuts energy costs, reduces mechanical wear, and gives you far more control over how your machinery behaves.",
      "Our team is experienced across the major drive brands used in Kenyan industry, and we back every installation with after-sales support and troubleshooting.",
    ],
    items: [
      "VFD sizing, supply, and installation",
      "Motor speed and torque control",
      "Energy-saving retrofits for existing motors",
      "Fan, pump, and conveyor drive applications",
      "Drive programming and parameter tuning",
      "After-sales support and troubleshooting",
    ],
  },
  {
    slug: "industrial-wireless-communication",
    title: "Industrial Wireless Communication",
    blurb: "Reliable wireless links for monitoring and controlling remote sites without laying cable.",
    icon: "Radio",
    image: "https://picsum.photos/seed/aas-wireless/800/600",
    longDescription: [
      "Not every site can be reached with cable. Remote pumping stations, tanks, and outlying equipment often sit kilometers from the nearest control room. Industrial wireless communication closes that gap.",
      "We deploy secure, reliable wireless systems that transmit both digital and analogue signals, including flow, pressure, level, and temperature, back to a central point, so your team has visibility without the cost of trenching cable across the site.",
      "This is especially useful for water and sewerage infrastructure, agricultural sites, and any operation where sites are spread out.",
    ],
    items: [
      "Remote site monitoring without cabling",
      "Level, temperature, and flow signal transmission",
      "Water and sewerage infrastructure applications",
      "Pumping stations and well point systems",
      "Leak monitoring",
      "Long-range, multi-station wireless networks",
    ],
  },
  {
    slug: "pump-monitoring-systems",
    title: "Pump Monitoring Systems",
    blurb: "Catch pump and motor faults early, before they become costly failures.",
    icon: "Droplets",
    image: "https://picsum.photos/seed/aas-pump-monitoring/800/600",
    longDescription: [
      "A large share of unplanned downtime comes from pumps and rotating equipment that fail without warning. Most maintenance schedules are either too early, wasting resources, or too late, after the damage is already done.",
      "Our pump monitoring solution tracks the active electrical power drawn by your pumps and motors in real time. Changes in that power signature reveal wear, blockages, or developing faults long before a full breakdown.",
      "The result: maintenance timed to the actual condition of your equipment, not a generic calendar.",
    ],
    items: [
      "Continuous pump and motor power monitoring",
      "Early fault detection via power signature analysis",
      "Reduced unplanned downtime",
      "Condition-based maintenance scheduling",
      "Integration with existing control systems",
    ],
  },
  {
    slug: "automated-school-bell",
    title: "Automated School Bell",
    blurb: "A synchronized, reliable bell system that keeps the school day running on time.",
    icon: "Bell",
    image: "https://picsum.photos/seed/aas-school-bell/800/600",
    longDescription: [
      "An automated bell system runs on your school's exact timetable, ringing precisely on schedule for every period, break, and assembly, with no need to rely on someone remembering to ring it manually.",
      "Ringing patterns are fully customizable, so class time, break time, and assembly can each have a distinct tone. A battery backup keeps the system working through power outages, and a mobile-triggered override lets administrators call an assembly from anywhere on campus.",
    ],
    items: [
      "Timetable-synchronized automatic ringing",
      "Customizable ringing patterns per period type",
      "Battery backup for power outages",
      "Mobile phone override for assembly calls",
      "Installation and ongoing support",
    ],
  },
];'''

replace_in_file(
    "src/data.js",
    '      "Remote, real-time power logging",\n    ],\n  },\n];',
    new_services,
    "5 new SERVICES entries",
)

# ---------- 3. Wire up icons in all 3 files ----------
files = {
    "src/pages/Home.jsx": {
        "import_old": 'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, ChevronRight, ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";',
        "import_new": 'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell, ChevronRight, ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";',
    },
    "src/pages/Services.jsx": {
        "import_old": 'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, ArrowUpRight } from "lucide-react";',
        "import_new": 'import { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell, ArrowUpRight } from "lucide-react";',
    },
    "src/pages/ServiceDetail.jsx": {
        "import_old": 'import { CheckCircle2, ArrowLeft, Zap, Gauge, Package, Cpu, MessageSquare, Activity } from "lucide-react";',
        "import_new": 'import { CheckCircle2, ArrowLeft, Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell } from "lucide-react";',
    },
}

icons_old = "const ICONS = { Zap, Gauge, Package, Cpu, MessageSquare, Activity };"
icons_new = "const ICONS = { Zap, Gauge, Package, Cpu, MessageSquare, Activity, Monitor, Waves, Radio, Droplets, Bell };"

accents_old = '''const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
  MessageSquare: { tile: "rose", text: "text-rose-600" },
  Activity: { tile: "emerald", text: "text-emerald-600" },
};'''

accents_new = '''const ACCENTS = {
  Zap: { tile: "amber", text: "text-amber-500" },
  Gauge: { tile: "teal", text: "text-teal-600" },
  Package: { tile: "violet", text: "text-violet-600" },
  Cpu: { tile: "sky", text: "text-sky-600" },
  MessageSquare: { tile: "rose", text: "text-rose-600" },
  Activity: { tile: "emerald", text: "text-emerald-600" },
  Monitor: { tile: "indigo", text: "text-indigo-600" },
  Waves: { tile: "orange", text: "text-orange-600" },
  Radio: { tile: "cyan", text: "text-cyan-600" },
  Droplets: { tile: "fuchsia", text: "text-fuchsia-600" },
  Bell: { tile: "lime", text: "text-lime-600" },
};'''

for path, imports in files.items():
    replace_in_file(path, imports["import_old"], imports["import_new"], "lucide-react import")
    replace_in_file(path, icons_old, icons_new, "ICONS map")
    replace_in_file(path, accents_old, accents_new, "ACCENTS map")

# ---------- 4. Upgrade ServiceDetail.jsx to render longDescription paragraphs ----------
detail_old = '''        <h1 className="text-3xl font-bold text-navy">{service.title}</h1>
        <p className="text-gray-600 mt-4 max-w-xl">{service.blurb}</p>

        <h3 className="text-navy font-bold mt-10 mb-4">What's included</h3>'''

detail_new = '''        <h1 className="text-3xl font-bold text-navy">{service.title}</h1>
        <p className="text-gray-600 mt-4 max-w-xl">{service.blurb}</p>

        {service.longDescription && (
          <div className="mt-6 space-y-4 max-w-2xl">
            {service.longDescription.map((para, i) => (
              <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
            ))}
          </div>
        )}

        <h3 className="text-navy font-bold mt-10 mb-4">What's included</h3>'''

replace_in_file("src/pages/ServiceDetail.jsx", detail_old, detail_new, "longDescription rendering")

print("\nDone. Run 'npm run dev' to preview.")
print("You now have 11 total services. Swap picsum.photos placeholders")
print("for real photos in src/data.js when ready.")
