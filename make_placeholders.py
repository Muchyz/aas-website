import os

items = [
    ("mcb-mccb-rccb", "MCB / MCCB / RCCB"),
    ("relays", "Relays"),
    ("plc-hmi", "PLCs & HMIs"),
    ("vfd", "VFDs"),
    ("multimeters", "Digital Multimeters"),
    ("test-equipment", "Test & Measurement"),
    ("push-buttons", "Push Buttons"),
    ("cables", "Cables"),
    ("networking", "Networking Equipment"),
]

os.makedirs("public/services/products", exist_ok=True)

svg_template = '''<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  <rect width="400" height="400" fill="#e5e9f0"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="22" fill="#5b6b82" text-anchor="middle" dominant-baseline="middle">{label}</text>
</svg>'''

for slug, label in items:
    path = f"public/services/products/{slug}.svg"
    with open(path, "w", encoding="utf-8") as f:
        f.write(svg_template.format(label=label))
    print(f"Created {path}")
