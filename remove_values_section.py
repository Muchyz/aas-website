#!/usr/bin/env python3
"""
Removes the 'Why clients stay' (Values) section from Home.jsx.
Run from project root: python3 remove_values_section.py
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

old_block = '''      {/* Values */}
      <section className="container-page section-pad-sm">
        <p className="tag-chip mb-3"><span className="tag-dot" /> Why clients stay</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {VALUES.map((v, i) => {
            const tiles = ["icon-tile-amber", "icon-tile-sky", "icon-tile-teal"];
            return (
              <div key={v.t} className="card-surface p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-soft ${tiles[i % 3]}`}>
                    <CheckCircle2 className="text-white" size={19} />
                  </div>
                  <h4 className="text-lg font-bold text-navy">{v.t}</h4>
                </div>
                <p className="text-gray-600 text-sm mt-2">{v.d}</p>
              </div>
            );
          })}
        </div>
      </section>

'''

replace_in_file("src/pages/Home.jsx", old_block, "", "remove Why clients stay section")

print("\nDone. Run 'npm run dev' to preview.")
print("The Values section is removed. Note: VALUES import and")
print("CheckCircle2 import in data.js/Home.jsx are now unused there")
print("but won't break anything — safe to leave as is.")
