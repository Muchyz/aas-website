with open("src/data.js", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

replacements = [
    ('{ name: "MCB, MCCB, RCCB", image: "/services/products/mcb-mccb-rccb.svg" }',
     '{ name: "MCB, MCCB, RCCB", image: "/services/products/mcb-mccb-rccb.svg", description: "Circuit breakers and residual current devices for protection and safe isolation." }'),
    ('{ name: "Relays", image: "/services/products/relays.svg" }',
     '{ name: "Relays", image: "/services/products/relays.svg", description: "Control and protection relays for switching and interlocking circuits." }'),
    ('{ name: "PLCs, HMIs, modules & software", image: "/services/products/plc-hmi.svg" }',
     '{ name: "PLCs, HMIs, modules & software", image: "/services/products/plc-hmi.svg", description: "Programmable controllers, operator interfaces, and the software to run them." }'),
    ('{ name: "Variable frequency drives", image: "/services/products/vfd.svg" }',
     '{ name: "Variable frequency drives", image: "/services/products/vfd.svg", description: "Precise motor speed and torque control for energy savings and process control." }'),
    ('{ name: "Digital multimeters", image: "/services/products/multimeters.svg" }',
     '{ name: "Digital multimeters", image: "/services/products/multimeters.svg", description: "Handheld meters for voltage, current, resistance, and continuity testing." }'),
    ('{ name: "Test & measurement equipment", image: "/services/products/test-equipment.svg" }',
     '{ name: "Test & measurement equipment", image: "/services/products/test-equipment.svg", description: "Instruments for diagnostics, calibration, and on-site verification." }'),
    ('{ name: "Push buttons & indicators", image: "/services/products/push-buttons.svg" }',
     '{ name: "Push buttons & indicators", image: "/services/products/push-buttons.svg", description: "Panel-mount controls and indicator lights for operator stations." }'),
    ('{ name: "Power, control & communication cables", image: "/services/products/cables.svg" }',
     '{ name: "Power, control & communication cables", image: "/services/products/cables.svg", description: "Cabling for power distribution, control signals, and data communication." }'),
    ('{ name: "Networking equipment", image: "/services/products/networking.svg" }',
     '{ name: "Networking equipment", image: "/services/products/networking.svg", description: "Switches, routers, and industrial networking gear for connected systems." }'),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
    else:
        print(f"WARNING: not found: {old[:60]}...")

with open("src/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
