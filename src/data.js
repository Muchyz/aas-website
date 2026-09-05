export const WHATSAPP_NUMBER = "254794726207";
export const CONTACT_PHONE = "0794 726 207";
export const CONTACT_EMAIL = "advancedautomation.ltd@gmail.com";

export const PRIMARY_NAV = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export const MORE_NAV = [
  { path: "/projects", label: "Projects" },
  { path: "/team", label: "Team" },
  { path: "/certifications", label: "Certifications" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/blog", label: "Blog" },
  { path: "/faq", label: "FAQ" },
];

export const SECTORS = [
  "Manufacturing",
  "Beverage & Bottling",
  "Water Treatment",
  "Warehousing & Logistics",
  "Cold Chain & Storage",
  "Commercial Buildings",
  "Textile & Processing",
  "Agriculture",
];

export const SERVICES = [
  {
    slug: "electrical-installations",
    title: "Electrical Installations & Services",
    blurb: "End-to-end electrical works and technical consultancy, from panel building and cable installation to safety audits, design reviews, and project commissioning, delivered to the standard your project and financiers expect.",
    icon: "Zap",
    image: "/services/electrical-installations.png",
    items: [
      "Low voltage switchboards and distribution panels",
      "Cable laying",
      "Machine assembly and installation",
      "Transformer testing and maintenance",
      "Insulation resistance test",
      "Earth resistance test",
      "Power quality analysis",
      "Technical electrical safety audits",
      "Technical design reviews",
      "Power generation simulation for PPA-grade projects",
      "Financial evaluations for power projects",
      "Independent engineer and commissioning engineer services",
      "Project management",
      "Standard operating procedures aligned to regulatory and off-taker requirements",
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation",
    blurb: "Sensors and measurement equipment that keep your process visible.",
    icon: "Gauge",
    image: "/services/instrumentation.jpg",
    items: [
      "Temperature sensors",
      "Flow meters",
      "Level sensors",
      "Pressure sensors",
      "HVAC sensors",
      "Proximity sensors",
    ],
  },
  {
    slug: "product-supplies",
    title: "Product Supplies",
    blurb: "Components and equipment sourced right, from breakers to PLCs.",
    icon: "Package",
    image: "/services/product-supplies.jpg",
    items: [
      "MCB, MCCB, RCCB",
      "Relays",
      "PLCs, HMIs, modules & software",
      "Variable frequency drives",
      "Digital multimeters",
      "Test & measurement equipment",
      "Push buttons & indicators",
      "Power, control & communication cables",
      "Networking equipment",
    ],
  },
  {
    slug: "control-automation",
    title: "Control & Automation",
    blurb: "Full control and automation system integration, backed by advanced power system studies that keep your network stable, compliant, and ready to scale.",
    icon: "Cpu",
    image: "/services/control-automation.jpg",
    items: [
      "Lighting systems",
      "Building management systems",
      "Temperature control systems",
      "SCADA systems",
      "MCC panels: DOL starters, star-delta, forward-reverse & VFD",
      "Process automation",
      "Energy management systems",
      "Mains & genset changeover panels",
      "Grid impact assessments and network data validation",
      "Load flow and contingency analysis",
      "Short-circuit and fault level studies",
      "Dynamic and voltage stability assessments",
      "Protection coordination reviews",
      "Network reinforcement and reactive compensation recommendations",
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
];

export const PROCESS = [
  { t: "Assess", d: "We walk the site, review existing drawings, and scope the real problem before quoting." },
  { t: "Design", d: "Panel layouts, control logic, and cable schedules are drawn up and signed off before we touch a wire." },
  { t: "Build & Install", d: "Panels are built and tested on our bench, then installed and commissioned on site." },
  { t: "Support", d: "Documentation is handed over, and we stay reachable for maintenance and call-outs after go-live." },
];

export const VALUES = [
  { t: "Professionalism", d: "Every job handled by trained, accountable technicians." },
  { t: "Innovation", d: "Creative engineering solutions, not just the standard fix." },
  { t: "Quality", d: "Work built to run reliably long after we've left site." },
];

export const MISSION = "To deliver innovative, reliable, and safety-driven electrical, automation, and instrumentation solutions that empower industries across Kenya to operate at peak efficiency.";

export const VISION = "To be East Africa's most trusted partner for industrial automation and electrical engineering — recognized for precision, integrity, and forward-thinking solutions.";

export const STATS = [
  { v: "150+", l: "Projects Completed" },
  { v: "9+", l: "Years of Experience" },
  { v: "60+", l: "Satisfied Clients" },
  { v: "8+", l: "Sectors Served" },
];

export const CERTIFICATIONS = [
  "EPRA-Aligned Practice",
  "EBK & IEK Standards",
  "ISO-Aligned Safety Systems",
  "NCA-Compliant Installations",
];
