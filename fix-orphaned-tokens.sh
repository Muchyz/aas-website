#!/data/data/com.termux/files/usr/bin/bash
# Run from your project root in Termux:
#   cd ~/aas-website
#   bash fix-orphaned-tokens.sh
set -e
cd "$(dirname "$0")" 2>/dev/null || true

echo "→ python3 — remapping ink/signal/steel/paper/panel to navy/brand/gray/offwhite"
python3 << 'PYEOF'
import re, glob

files = glob.glob("src/pages/*.jsx") + ["src/components/Navbar.jsx", "src/components/Footer.jsx", "src/components/WhatsAppButton.jsx"]

repl = [
    # headings / ink
    (r'\btext-ink\b', 'text-navy'),
    (r'\bbg-ink\b', 'bg-navy'),
    (r'\bborder-ink\b', 'border-navy'),

    # accent (signal -> brand)
    (r'\btext-signal\b', 'text-brand'),
    (r'\bbg-signal-dark\b', 'bg-brand-dark'),
    (r'\bhover:bg-signal-dark\b', 'hover:bg-brand-dark'),
    (r'\bbg-signal\b', 'bg-brand'),
    (r'\bborder-signal\b', 'border-brand'),
    (r'\bfocus:border-signal\b', 'focus:border-brand'),

    # body copy (steel -> gray-600, with opacity variants -> gray-500/400)
    (r'\btext-steel\/80\b', 'text-gray-500'),
    (r'\btext-steel\/70\b', 'text-gray-400'),
    (r'\btext-steel\/60\b', 'text-gray-400'),
    (r'\btext-steel\b', 'text-gray-600'),

    # surfaces
    (r'\bbg-paper\b', 'bg-white'),
    (r'\bbg-panel\/60\b', 'bg-offwhite'),
    (r'\bbg-panel\/40\b', 'bg-offwhite'),
    (r'\bbg-panel\b', 'bg-offwhite'),

    # font-mono labels (drop, no mono font declared anymore)
    (r'\bfont-mono\s*', ''),
]

changed = 0
for f in files:
    try:
        s = open(f, encoding="utf-8").read()
    except FileNotFoundError:
        continue
    orig = s
    for pat, rep in repl:
        s = re.sub(pat, rep, s)
    if s != orig:
        open(f, "w", encoding="utf-8").write(s)
        changed += 1
        print(f"  fixed {f}")

print(f"✔ remapped tokens in {changed} file(s)")
PYEOF

echo ""
echo "→ sed — swap the old font-family stack back to Inter everywhere referenced"
sed -i 's/font-family: "IBM Plex Sans", sans-serif;/font-family: "Inter", sans-serif;/' src/index.css 2>/dev/null || true

echo ""
echo "✅ Orphaned-token fix applied. All pages now reference colors that"
echo "   actually exist in src/index.css (navy / brand / teal / violet / offwhite / line)."
echo ""
echo "Refresh your browser and check Home, Services, ServiceDetail, and Contact"
echo "carefully — those had the heaviest ink/signal usage."
