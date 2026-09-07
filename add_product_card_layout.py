with open("src/pages/ServiceDetail.jsx", "r", encoding="utf-8") as f:
    content = f.read()

original_len = len(content)

old_block = '''        <h3 className="text-navy font-bold mt-10 mb-4">What's included</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {service.items.map((item) => {
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
          })}
        </div>'''

new_block = '''        {service.slug === "product-supplies" ? (
          <>
            <h3 className="text-navy font-bold mt-10 mb-4">Products we supply</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.items.map((item) => (
                <div key={item.name} className="bg-white border border-line rounded-xl overflow-hidden shadow-soft flex flex-col">
                  <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-navy font-semibold text-sm mb-1">{item.name}</h4>
                    {item.description && (
                      <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-navy font-bold mt-10 mb-4">What's included</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.items.map((item) => {
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
              })}
            </div>
          </>
        )}'''

if old_block in content:
    content = content.replace(old_block, new_block, 1)
else:
    print("WARNING: block not found — no changes made")

with open("src/pages/ServiceDetail.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {original_len} -> {len(content)} chars")
