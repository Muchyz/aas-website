with open("src/pages/ServiceDetail.jsx", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

old_block = '''          {service.items.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4 shadow-soft">
              <CheckCircle2 className={a.text} size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
              <span className="text-navy text-sm">{item}</span>
            </div>
          ))}'''

new_block = '''          {service.items.map((item) => {
            const isObj = typeof item === "object";
            const label = isObj ? item.name : item;
            const img = isObj ? item.image : null;
            return (
              <div key={label} className="flex items-start gap-3 bg-white border border-line rounded-xl p-4 shadow-soft">
                {img ? (
                  <img src={img} alt={label} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                ) : (
                  <CheckCircle2 className={a.text} size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                )}
                <span className="text-navy text-sm">{label}</span>
              </div>
            );
          })}'''

if old_block in content:
    content = content.replace(old_block, new_block, 1)
else:
    print("WARNING: block not found — no changes made")

with open("src/pages/ServiceDetail.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
