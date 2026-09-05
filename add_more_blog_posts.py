#!/usr/bin/env python3
"""
Adds 5 more blog posts to BLOG_POSTS covering power quality, VFDs, SCADA,
instrumentation, and electrical contracts. Run from project root:
python3 add_more_blog_posts.py
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

old_ending = '''      "None of this is complicated, but it does require the contract to be written around how the plant actually operates, not adapted from a template built for a single eight-hour day.",
    ],
  },
];'''

new_ending = '''      "None of this is complicated, but it does require the contract to be written around how the plant actually operates, not adapted from a template built for a single eight-hour day.",
    ],
  },
  {
    slug: "power-quality-analysis-before-solar",
    title: "Why power quality analysis matters before you install solar",
    tag: "Power Quality",
    tagColor: "text-emerald-600 bg-emerald-500/10",
    image: "https://picsum.photos/seed/blog-solar-pq/900/500",
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
    image: "https://picsum.photos/seed/blog-vfd-choice/900/500",
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
    image: "https://picsum.photos/seed/blog-scada-manual/900/500",
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
    image: "https://picsum.photos/seed/blog-calibration/900/500",
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
    image: "https://picsum.photos/seed/blog-contract/900/500",
    content: [
      "An electrical installation contract is where problems either get prevented or get baked in for the rest of the project. A few checks before signing save a lot of disputes later.",
      "Confirm the contractor's licensing and certifications directly, not just their claim of having them. In Kenya this means checking current EPRA and relevant board registrations rather than taking a business card at face value.",
      "Scope of work should be specific enough that there's no ambiguity about what's included. \\"Complete electrical installation\\" invites disagreement later; a scope that lists panel types, cable specifications, and points of connection does not.",
      "Materials matter as much as labour. A contract should specify actual brands or equivalent-quality standards for major components — breakers, cables, panels — rather than leaving it open to whatever's cheapest at the time of purchase.",
      "Warranty terms deserve a specific clause, not an assumption. Ask what's covered, for how long, and whether it covers just materials or workmanship too.",
      "Finally, confirm that as-built documentation and testing certificates are a contractual deliverable, not an afterthought. Without them, you inherit an installation nobody can properly maintain or troubleshoot down the line.",
    ],
  },
];'''

replace_in_file("src/data.js", old_ending, new_ending, "add 5 more blog posts")

print("\nDone. Run 'npm run dev' to preview.")
print("You now have 8 total blog posts covering power quality, VFDs,")
print("SCADA, instrumentation, and electrical contracts.")
