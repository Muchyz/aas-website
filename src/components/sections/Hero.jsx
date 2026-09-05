import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const slides = [
  {
    image: "/hero-panel.jpg",
    tag: "Advanced Automation Systems · Kenya",
    heading: "Engineering,",
    highlight: "Delivered.",
    desc: "Electrical installations, instrumentation & full automation across Kenya — certified engineers, zero excuses.",
  },
  {
    image: "/hero-pcb.jpg",
    tag: "Precision Instrumentation",
    heading: "Every Signal,",
    highlight: "Accounted For.",
    desc: "From PCB-level diagnostics to full control system builds — precision engineered, thoroughly tested.",
  },
  {
    image: "/hero-control.jpg",
    tag: "24/7 Emergency Response",
    heading: "Downtime,",
    highlight: "Eliminated.",
    desc: "Fast turnaround on call-outs and installations so your production line never stalls.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // preload all slide images so switching is instant, no pop-in
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden" style={{ height: "calc(100svh - 72px)" }}>

      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.image + index}
            src={slide.image}
            alt="AAS industrial automation equipment"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,42,71,0.6) 0%, rgba(14,42,71,0.4) 40%, rgba(14,42,71,0.18) 70%, rgba(14,42,71,0.06) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col px-4 pt-3 pb-3">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-shrink-0 flex justify-between"
        >
          {["Certified & Compliant", "ISO-Aligned", "24/7 Support"].map((b) => (
            <span
              key={b}
              className="flex items-center gap-1 bg-black/50 border border-white/20 text-white font-semibold px-2 py-0.5 rounded-full"
              style={{ fontSize: "10px" }}
            >
              <CheckCircle2 size={11} style={{ color: "var(--color-sky)" }} />
              {b}
            </span>
          ))}
        </motion.div>

        <div className="flex-1" />

        <div
          className="flex-shrink-0 flex flex-col gap-2 rounded-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,42,71,0.0) 0%, rgba(14,42,71,0.55) 15%, rgba(14,42,71,0.7) 85%, rgba(14,42,71,0.0) 100%)",
            padding: "14px 10px",
            margin: "-14px -10px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-[2px] flex-shrink-0" style={{ background: "var(--color-brand)" }} />
                <span
                  className="font-bold uppercase tracking-widest"
                  style={{ fontSize: "9px", color: "var(--color-sky)" }}
                >
                  {slide.tag}
                </span>
              </div>

              <h1
                className="font-extrabold text-white tracking-tight leading-none"
                style={{ fontSize: "clamp(1.8rem, 8vw, 2.8rem)" }}
              >
                {slide.heading}
                <br />
                <span style={{ color: "var(--color-sky)" }}>{slide.highlight}</span>
              </h1>

              <p className="text-gray-300 leading-snug" style={{ fontSize: "11px" }}>
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2">
            <Link
              to="/services"
              className="flex-1 flex items-center justify-center gap-1 text-white font-bold rounded-lg"
              style={{ padding: "9px 0", fontSize: "12px", background: "var(--color-brand)" }}
            >
              Free Quote <ArrowRight size={12} />
            </Link>
            <a
              href="tel:+254794726207"
              className="flex-1 flex items-center justify-center gap-1 border border-white/30 bg-white/10 text-white font-semibold rounded-lg"
              style={{ padding: "9px 0", fontSize: "12px" }}
            >
              <Phone size={12} /> Call Now
            </a>
          </div>

          <div className="grid grid-cols-4 rounded-xl overflow-hidden border border-white/10">
            {[
              { v: "4", l: "Solutions" },
              { v: "24/7", l: "Response" },
              { v: "100%", l: "Coverage" },
              { v: "Same-Day", l: "Turnaround" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`text-center ${i % 2 === 0 ? "bg-white/10" : "bg-white/5"}`}
                style={{ padding: "6px 0" }}
              >
                <p className="font-extrabold text-white leading-none" style={{ fontSize: "14px" }}>
                  {s.v}
                </p>
                <p className="text-gray-400 uppercase tracking-wide mt-0.5" style={{ fontSize: "8px" }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 pt-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: i === index ? "18px" : "6px",
                  height: "6px",
                  background: i === index ? "var(--color-sky)" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex-1" />
      </div>
    </section>
  );
}
