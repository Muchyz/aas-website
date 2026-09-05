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
    image: "/services/consulting.jpg",
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
    image: "/services/power-quality-analysis.jpg",
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
    image: "/services/scada.jpg",
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
    image: "/services/variable-frequency-drives.jpg",
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
    image: "/services/industrial-wireless-communication.jpg",
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
    image: "/services/pump-monitoring-systems.jpg",
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
    image: "/services/automated-school-bell.jpg",
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

export const RELATED_SERVICES = {
  "electrical-installations": ["control-automation", "power-quality-analysis"],
  "instrumentation": ["pump-monitoring-systems", "power-quality-analysis"],
  "product-supplies": ["variable-frequency-drives", "scada"],
  "control-automation": ["scada", "variable-frequency-drives"],
  "consulting": ["electrical-installations", "control-automation"],
  "power-quality-analysis": ["electrical-installations", "instrumentation"],
  "scada": ["control-automation", "product-supplies"],
  "variable-frequency-drives": ["product-supplies", "control-automation"],
  "industrial-wireless-communication": ["pump-monitoring-systems", "instrumentation"],
  "pump-monitoring-systems": ["instrumentation", "industrial-wireless-communication"],
  "automated-school-bell": ["control-automation", "consulting"],
};


export const BLOG_POSTS = [
  {
    slug: "signs-your-control-panel-needs-attention",
    title: "Signs your control panel needs attention before it fails",
    tag: "Maintenance",
    tagColor: "text-amber-500 bg-amber-500/10",
    image: "/blog/signs-your-control-panel-needs-attention.jpg",
    content: [
      "Most control panel failures don't happen out of nowhere. There are usually warning signs weeks or months before a breakdown — the challenge is that they're easy to miss if nobody is looking for them.",
      "Discoloured or heat-stained components inside the panel are one of the clearest signs. Overheating leaves visible marks on terminals, breakers, and wiring insulation long before anything actually fails. If you open a panel and see browning or a faint burnt smell, that's not cosmetic — it's a fault developing in real time.",
      "Frequent nuisance tripping is another red flag. A breaker or overload relay that trips occasionally for no obvious reason is often reacting to a real underlying issue: a loose connection, a failing component drawing excess current, or a load that has grown beyond what the panel was originally sized for.",
      "Loose or corroded terminals are easy to overlook but are one of the most common causes of unplanned downtime. Vibration, thermal cycling, and time all work against tight connections. A scheduled inspection that includes torque-checking terminals catches this before it becomes an arc fault.",
      "Unusual noise — humming, buzzing, or clicking that wasn't there before — is worth investigating immediately. Contactors and relays have a normal operating sound; anything that changes noticeably is signaling wear.",
      "The fix for all of these is the same: scheduled inspection, not reactive repair. A short annual or bi-annual check by someone who knows what to look for costs a fraction of what an unplanned shutdown does.",
    ],
  },
  {
    slug: "what-a-plc-retrofit-actually-involves",
    title: "What a PLC retrofit actually involves",
    tag: "Automation",
    tagColor: "text-sky-600 bg-sky-500/10",
    image: "/blog/what-a-plc-retrofit-actually-involves.jpg",
    content: [
      "A PLC retrofit sounds like a simple swap — old controller out, new one in — but in practice it's closer to a small engineering project than a parts replacement.",
      "It starts with understanding the existing system fully. Before anything is touched, we document the current program logic, I/O wiring, and any quirks operators have learned to work around over the years. Old systems often carry undocumented logic changes made during past emergencies, and losing that knowledge during a retrofit is how new problems get introduced.",
      "Next comes selecting the replacement hardware. This isn't just about brand preference — I/O count, communication protocols, memory requirements, and physical panel space all narrow the options. Where possible, we choose hardware that can reuse existing wiring terminations to reduce downtime during changeover.",
      "The programming itself is usually the bulk of the work. Old ladder logic or function block programs are translated, not simply copied, into the new platform, since instruction sets and addressing rarely map one-to-one between manufacturers. This is also the point where obvious inefficiencies in the original program get cleaned up.",
      "Testing happens in stages: first on the bench with simulated inputs, then on-site during a planned shutdown window, running the machine through every mode of operation before it goes back into production. Skipping staged testing is the single most common cause of retrofit projects overrunning their downtime window.",
      "Finally, documentation and training. A retrofit is only successful long-term if the operators and maintenance team understand the new system — updated wiring diagrams, program backups, and a short handover session are part of every retrofit we deliver.",
    ],
  },
  {
    slug: "maintenance-contracts-for-multi-shift-plants",
    title: "Getting maintenance contracts right for multi-shift plants",
    tag: "Case study",
    tagColor: "text-violet-600 bg-violet-500/10",
    image: "/blog/maintenance-contracts-for-multi-shift-plants.jpg",
    content: [
      "Plants running two or three shifts face a maintenance problem single-shift operations don't: there's rarely a clean window when the line is actually stopped and safe to work on.",
      "The first adjustment is scheduling. A maintenance contract built around a standard business-hours service window doesn't fit a plant that's running at 2am. Response times, call-out availability, and even routine inspection slots need to be structured around the plant's actual production calendar, not a generic business day.",
      "The second is spare parts strategy. With less downtime available for troubleshooting, having critical spares on-site, or at least reserved with a fast-access agreement, matters more than in a single-shift operation where a day's delay is less costly. Contracts should specify which parts are stocked, where, and what the replacement lead time is for anything that isn't.",
      "Communication handover is the piece that's easiest to get wrong. If an issue is flagged during a night shift, the maintenance provider needs a clear channel to both the outgoing and incoming shift supervisors, otherwise fixes get delayed simply because the right person wasn't told in time.",
      "Finally, a good multi-shift maintenance contract builds in a review cadence — monthly or quarterly checkpoints to look at recurring fault patterns across shifts. A machine that keeps tripping only on the night shift, for example, might point to a load, temperature, or staffing pattern worth investigating rather than a random fault.",
      "None of this is complicated, but it does require the contract to be written around how the plant actually operates, not adapted from a template built for a single eight-hour day.",
    ],
  },
  {
    slug: "power-quality-analysis-before-solar",
    title: "Why power quality analysis matters before you install solar",
    tag: "Power Quality",
    tagColor: "text-emerald-600 bg-emerald-500/10",
    image: "/blog/power-quality-analysis-before-solar.jpg",
    content: [
      "It's tempting to treat solar sizing as a simple math problem: add up your loads, add some margin, and order panels and an inverter to match. In practice, the electrical environment you're feeding into matters just as much as the load total.",
      "Voltage fluctuations and existing harmonic distortion on site can affect how well an inverter synchronizes with your supply, and in some cases can trigger nuisance trips or reduce inverter lifespan. A power quality audit before installation catches this while it's still cheap to address.",
      "Power factor is another overlooked factor. A site with a poor power factor from old motors or fluorescent lighting will size differently for solar offset than one with a clean, well-corrected load profile. Sizing off nameplate kW alone can lead to a system that underperforms against what was promised.",
      "Logging actual load data over a representative period — not just a single-day snapshot — reveals the real demand curve, including peak surges from equipment starts that a quick calculation would miss entirely.",
      "The cost of a proper pre-installation power quality assessment is small compared to a solar system that's undersized, oversized, or fighting compatibility issues with the existing supply from day one.",
    ],
  },
  {
    slug: "choosing-the-right-vfd",
    title: "Choosing the right VFD for your motor application",
    tag: "Automation",
    tagColor: "text-sky-600 bg-sky-500/10",
    image: "/blog/choosing-the-right-vfd.jpg",
    content: [
      "Picking a Variable Frequency Drive by matching its kW rating to the motor nameplate is the most common shortcut we see — and it's often wrong in ways that only show up after installation.",
      "Motor current, not just kW, should drive sizing. Two motors with the same kW rating can draw meaningfully different current depending on efficiency class and voltage, so the drive's rated output current needs to clear the motor's full-load amps with margin, not just match the kW label.",
      "Overload duty matters for applications with frequent starts or variable torque loads — conveyors, crushers, and mixers all put different demands on a drive than a simple constant-speed pump. Undersizing here shows up as nuisance trips under normal operating conditions.",
      "Enclosure rating is easy to overlook in a rush to get a drive installed. A dusty or humid environment needs an appropriately rated enclosure or cabinet, not a standard IP20 drive bolted to a wall in a workshop.",
      "Braking requirements are the last piece people forget. If your application needs to decelerate quickly under load — a crane, a centrifuge, certain conveyor setups — you need a drive with dynamic braking capability or an external braking resistor, decided before commissioning, not after the first overspeed fault.",
      "A short conversation about the actual application, not just the motor's nameplate, is what separates a drive that runs reliably for years from one that needs troubleshooting in its first month.",
    ],
  },
  {
    slug: "scada-vs-manual-monitoring",
    title: "SCADA vs manual monitoring: what actually changes on the plant floor",
    tag: "Automation",
    tagColor: "text-indigo-600 bg-indigo-500/10",
    image: "/blog/scada-vs-manual-monitoring.jpg",
    content: [
      "Manual monitoring — an operator walking rounds with a clipboard or checking gauges on a set schedule — has worked for decades, and for some small, single-line operations, it still works fine. The question is when it stops being enough.",
      "The biggest gap manual rounds leave is time between checks. If an issue develops between scheduled rounds, it runs unnoticed until the next check, however long that gap is. SCADA closes that gap to seconds, catching deviations as they start rather than after they've compounded.",
      "Human error is the second factor. A manual reading depends on someone being present, awake, and recording it correctly. Multiply that across multiple shifts and multiple readings per shift, and small gaps and transcription errors accumulate over a year in ways that are hard to see until you compare against continuous logged data.",
      "That said, SCADA isn't automatically the right call for every site. A single small line with one or two critical parameters and an attentive operator on-site full time may genuinely not need it yet — the cost only pays off once the number of parameters, the size of the site, or the cost of a missed deviation grows large enough.",
      "The honest answer for most growing operations is that SCADA becomes worthwhile exactly when manual monitoring starts requiring more people, more discipline, and more paperwork just to maintain the same level of visibility you already have.",
    ],
  },
  {
    slug: "instrumentation-calibration-frequency",
    title: "Instrumentation calibration: how often is often enough",
    tag: "Instrumentation",
    tagColor: "text-teal-600 bg-teal-500/10",
    image: "/blog/instrumentation-calibration-frequency.jpg",
    content: [
      "There's no single correct calibration interval that applies to every sensor — the right frequency depends on a combination of factors specific to each instrument and its application.",
      "Manufacturer specification is the starting point, not the final answer. Manufacturers publish a recommended interval based on typical drift characteristics, but 'typical' conditions rarely match every installation.",
      "How critical the measurement is to safety or product quality pushes the interval shorter. A temperature sensor on a cold chain monitoring system that determines whether product gets rejected deserves tighter calibration discipline than one used for general trend monitoring.",
      "Environmental conditions matter more than most people expect. Instruments exposed to vibration, temperature extremes, humidity, or corrosive atmospheres drift faster than the same model in a controlled environment, and calibration intervals should reflect that reality rather than the manufacturer's lab-tested baseline.",
      "The most reliable approach is to track drift history per instrument rather than applying a blanket schedule. If a sensor consistently comes back within tolerance at every check, the interval can often be extended. If it's drifting close to the limit each time, it needs tightening — or replacing.",
      "A calibration log that actually gets reviewed, not just filed, is what turns this from guesswork into a system that protects both product quality and compliance.",
    ],
  },
  {
    slug: "before-signing-electrical-installation-contract",
    title: "What to check before signing an electrical installation contract",
    tag: "Electrical",
    tagColor: "text-rose-600 bg-rose-500/10",
    image: "/blog/before-signing-electrical-installation-contract.jpg",
    content: [
      "An electrical installation contract is where problems either get prevented or get baked in for the rest of the project. A few checks before signing save a lot of disputes later.",
      "Confirm the contractor's licensing and certifications directly, not just their claim of having them. In Kenya this means checking current EPRA and relevant board registrations rather than taking a business card at face value.",
      "Scope of work should be specific enough that there's no ambiguity about what's included. \"Complete electrical installation\" invites disagreement later; a scope that lists panel types, cable specifications, and points of connection does not.",
      "Materials matter as much as labour. A contract should specify actual brands or equivalent-quality standards for major components — breakers, cables, panels — rather than leaving it open to whatever's cheapest at the time of purchase.",
      "Warranty terms deserve a specific clause, not an assumption. Ask what's covered, for how long, and whether it covers just materials or workmanship too.",
      "Finally, confirm that as-built documentation and testing certificates are a contractual deliverable, not an afterthought. Without them, you inherit an installation nobody can properly maintain or troubleshoot down the line.",
    ],
  },
];
