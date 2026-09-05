#!/usr/bin/env python3
"""
Changes 'Related services' to show ALL other services, not just a curated 2.
Run from project root: python3 show_all_related.py
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

replace_in_file(
    "src/pages/ServiceDetail.jsx",
    '''  const relatedSlugs = RELATED_SERVICES[service.slug] || [];
  const related = relatedSlugs
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter(Boolean);''',
    '''  const related = SERVICES.filter((s) => s.slug !== service.slug);''',
    "show all other services as related",
)

print("\nDone. Run 'npm run dev' to preview.")
print("Every service page now lists all other services at the bottom.")
