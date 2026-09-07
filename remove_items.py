import re

with open("src/data.js", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

# 1. Remove the 3 individual service line items
lines_to_remove = [
    '      "Power generation simulation for PPA-grade projects",\n',
    '      "Financial evaluations for power projects",\n',
    '      "Standard operating procedures aligned to regulatory and off-taker requirements",\n',
]
for line in lines_to_remove:
    if line in content:
        content = content.replace(line, "", 1)
    else:
        print(f"WARNING: line not found: {line!r}")

# 2. Remove the entire "Automated School Bell" service object (last item in the array)
pattern = re.compile(
    r'\n  \{\n    slug: "automated-school-bell",.*?\n  \},\n\];',
    re.DOTALL
)
new_content, count = pattern.subn('\n];', content)
if count == 0:
    print("WARNING: automated-school-bell block not found/removed")
else:
    content = new_content

# 3. Remove its RELATED_SERVICES mapping entry
mapping_line = '  "automated-school-bell": ["control-automation", "consulting"],\n'
if mapping_line in content:
    content = content.replace(mapping_line, "", 1)
else:
    print("WARNING: mapping line not found")

with open("src/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
