with open("src/data.js", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

lines_to_remove = [
    '      "Grid impact assessments and network data validation",\n',
    '      "Load flow and contingency analysis",\n',
    '      "Short-circuit and fault level studies",\n',
    '      "Dynamic and voltage stability assessments",\n',
    '      "Protection coordination reviews",\n',
    '      "Network reinforcement and reactive compensation recommendations",\n',
]
for line in lines_to_remove:
    if line in content:
        content = content.replace(line, "", 1)
    else:
        print(f"WARNING: line not found: {line!r}")

with open("src/data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
