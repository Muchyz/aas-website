#!/usr/bin/env python3
"""
Fixes broken project images by using picsum placeholders until real
site photos are available. Run from project root: python3 fix_project_images.py
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
    "src/pages/Projects.jsx",
    '<img src={`/projects/${img}`} alt={t} className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300" />',
    '<img src={`https://picsum.photos/seed/project${i}/500/300`} alt={t} className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300" />',
    "fix broken project images",
)

print("\nDone. Run 'npm run dev' to preview.")
print("Project cards now show placeholder photos instead of broken images.")
print("Replace with real site photos in public/projects/ when ready,")
print("then swap this line back to use the img filenames.")
