with open("src/data.js", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

old_block = '''    items: [
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
  },'''

new_block = '''    items: [
      { name: "MCB, MCCB, RCCB", image: "/services/products/mcb-mccb-rccb.jpg" },
      { name: "Relays", image: "/services/products/relays.jpg" },
      { name: "PLCs, HMIs, modules & software", image: "/services/products/plc-hmi.jpg" },
      { name: "Variable frequency drives", image: "/services/products/vfd.jpg" },
      { name: "Digital multimeters", image: "/services/products/multimeters.jpg" },
      { name: "Test & measurement equipment", image: "/services/products/test-equipment.jpg" },
      { name: "Push buttons & indicators", image: "/services/products/push-buttons.jpg" },
      { name: "Power, control & communication cables", image: "/services/products/cables.jpg" },
      { name: "Networking equipment", image: "/services/products/networking.jpg" },
    ],
  },'''

if old_block in content:
    content = content.replace(old_block, new_block, 1)
else:
    print("WARNING: block not found — no changes made")

with open("src/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
