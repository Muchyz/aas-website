#!/data/data/com.termux/files/usr/bin/bash
# Run from your project root in Termux:
#   cd ~/aas-website
#   bash theme-sync.sh
#
# What this does:
#   1. python3 — rewrites color/border/shadow classes on every page in
#      src/pages/* to use the theme tokens (brand/navy/teal/violet/line)
#      instead of raw slate/blue tailwind classes, and bumps corner
#      radius + shadows to match the card-surface system.
#   2. sed     — swaps the old "max-w-6xl mx-auto px-6 py-20" wrapper
#      for the new "container-page section-pad-sm" utility on every page.
#   3. cat     — refreshes the shared <Button> component so its radius
#      and hover motion match btn-primary/btn-outline.
set -e
cd "$(dirname "$0")" 2>/dev/null || true

PAGES=$(ls src/pages/*.jsx 2>/dev/null)
if [ -z "$PAGES" ]; then
  echo "❌ No files found in src/pages — run this from your project root."
  exit 1
fi

echo "→ Step 1/3: sed — swapping section wrappers to container-page/section-pad-sm"
for f in $PAGES; do
  sed -i 's/max-w-6xl mx-auto px-6 py-20/container-page section-pad-sm/g' "$f"
  sed -i 's/max-w-4xl mx-auto px-6 py-20/container-page section-pad-sm max-w-4xl/g' "$f"
  sed -i 's/max-w-3xl mx-auto px-6 py-20/container-page section-pad-sm max-w-3xl/g' "$f"
done

echo "→ Step 2/3: python3 — syncing color, radius, and shadow tokens"
python3 << 'PYEOF'
import re, glob

files = glob.glob("src/pages/*.jsx")

repl = [
    # brand blue
    (r'\bbg-blue-700\b', 'bg-brand'),
    (r'\bhover:bg-blue-800\b', 'hover:bg-brand-dark'),
    (r'\btext-blue-700\b', 'text-brand'),
    (r'\bborder-blue-700\b', 'border-brand'),
    (r'\bfocus:border-blue-700\b', 'focus:border-brand'),
    (r'\btext-blue-100\b', 'text-white/80'),
    (r'\bbg-blue-50\/?60?\b', 'bg-brand/5'),
    (r'\btext-blue-700\/40\b', 'text-brand/40'),
    (r'\btext-blue-700\/50\b', 'text-brand/50'),

    # ink/navy headings
    (r'\btext-slate-900\b', 'text-navy'),
    (r'\btext-slate-800\b', 'text-navy'),

    # body copy
    (r'\btext-slate-700\b', 'text-gray-600'),
    (r'\btext-slate-600\b', 'text-gray-600'),
    (r'\btext-slate-500\b', 'text-gray-500'),
    (r'\btext-slate-400\b', 'text-gray-400'),

    # borders / surfaces
    (r'\bborder-slate-200\b', 'border-line'),
    (r'\bborder-slate-300\b', 'border-line'),
    (r'\bbg-slate-50\b', 'bg-offwhite'),
    (r'\bbg-white\/70\b', 'bg-white'),

    # radius bump for a more modern feel
    (r'\brounded-lg\b', 'rounded-xl'),
    (r'\brounded-md\b', 'rounded-lg'),

    # shadows -> theme shadow utilities
    (r'\bshadow-md\b', 'shadow-soft'),
    (r'\bshadow-sm\b', 'shadow-soft'),
    (r'\bshadow-xl\b', 'shadow-soft-lg'),
    (r'\bshadow-lg\b', 'shadow-soft-lg'),

    # backdrop-blur cards -> card-surface base (keep any extra classes after)
    (r'backdrop-blur-md ', ''),
]

changed = 0
for f in files:
    s = open(f, encoding="utf-8").read()
    orig = s
    for pat, rep in repl:
        s = re.sub(pat, rep, s)
    if s != orig:
        open(f, "w", encoding="utf-8").write(s)
        changed += 1
        print(f"  updated {f}")

print(f"✔ token-synced {changed} page file(s)")
PYEOF

echo "→ Step 3/3: cat — refresh shared Button component"
mkdir -p src/components/ui
cat > src/components/ui/Button.jsx << 'EOF'
import { Link } from "react-router-dom";

export default function Button({ to, href, variant = "primary", children, ...props }) {
  const base = variant === "outline" ? "btn-outline" : "btn-primary";

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={base} {...props}>
      {children}
    </Link>
  );
}
EOF

echo ""
echo "✅ Theme sync complete."
echo "   • All src/pages/*.jsx now use brand/navy/teal/violet/line tokens"
echo "   • Section wrappers use container-page + section-pad-sm"
echo "   • Radius bumped (rounded-lg→xl, rounded-md→lg) and shadows use shadow-soft(-lg)"
echo "   • Button.jsx refreshed to match btn-primary/btn-outline"
echo ""
echo "Refresh your browser — Vite hot-reloads automatically."
echo "If a page looks off, check it individually: it may have had a class"
echo "combo the regex didn't anticipate (e.g. bg-blue-50/60 typos)."
