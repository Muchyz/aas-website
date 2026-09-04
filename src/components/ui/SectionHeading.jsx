export default function SectionHeading({ eyebrow, title, subtitle, light, align = "center" }) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl mb-12 ${isCenter ? "text-center mx-auto" : "text-left"}`}>
      {eyebrow && (
        <p className={`tag-chip mb-3 ${isCenter ? "justify-center" : ""} ${light ? "text-sky" : ""}`}>
          <span className="tag-dot" style={light ? { background: "#7dd3fc" } : undefined} />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 ${light ? "text-gray-300" : "text-gray-600"}`}>{subtitle}</p>
      )}
      <div className={`fingerprint-divider mt-5 ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}
