#!/data/data/com.termux/files/usr/bin/bash
# Run from your project root in Termux:
#   cd ~/aas-website
#   bash fix-expand-faq.sh
set -e
cd "$(dirname "$0")" 2>/dev/null || true

python3 << 'PYEOF'
p = "src/pages/Faq.jsx"
s = open(p, encoding="utf-8").read()

extra = [
    '["Do you handle both new installs and repairs?", "Both — new panel builds and installations, plus diagnostics and repair of existing systems."],',
    '["Can you supply parts without doing the labor?", "Yes, product supply is a standalone service if you just need components."],',
    '["What areas of Kenya do you cover for maintenance contracts?", "Coverage depends on contract scope — message us with your location and we can confirm."],',
]

if "Do you handle both new installs" in s:
    print("  FAQ already expanded, skipped")
else:
    # find the closing "];" of the items array and insert just before it
    idx = s.find("How do I get a quote?")
    if idx == -1:
        print("  ERROR: could not find anchor question in Faq.jsx — no changes made")
    else:
        # find the end of that array item's line
        line_end = s.find("\n", idx)
        insertion = "\n" + "\n".join("    " + e for e in extra)
        s = s[:line_end] + insertion + s[line_end:]
        open(p, "w", encoding="utf-8").write(s)
        print("  expanded FAQ items (Faq.jsx)")
PYEOF

echo ""
echo "✅ FAQ expansion applied (6 → 9 questions)."
echo "Refresh your browser — Vite hot-reloads automatically."
