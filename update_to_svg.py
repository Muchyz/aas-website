with open("src/data.js", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)
old_new_pairs = [
    ('/services/products/mcb-mccb-rccb.jpg', '/services/products/mcb-mccb-rccb.svg'),
    ('/services/products/relays.jpg', '/services/products/relays.svg'),
    ('/services/products/plc-hmi.jpg', '/services/products/plc-hmi.svg'),
    ('/services/products/vfd.jpg', '/services/products/vfd.svg'),
    ('/services/products/multimeters.jpg', '/services/products/multimeters.svg'),
    ('/services/products/test-equipment.jpg', '/services/products/test-equipment.svg'),
    ('/services/products/push-buttons.jpg', '/services/products/push-buttons.svg'),
    ('/services/products/cables.jpg', '/services/products/cables.svg'),
    ('/services/products/networking.jpg', '/services/products/networking.svg'),
]
for old, new in old_new_pairs:
    if old in content:
        content = content.replace(old, new, 1)
    else:
        print(f"WARNING: not found: {old}")

with open("src/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
