import { Quote, Star } from "lucide-react";

const quotes = [
  {
    q: "They rewired our fill line over a weekend so we didn't lose a single production day.",
    a: "Operations Manager, beverage manufacturer",
  },
  {
    q: "Clean panel work, clearly labeled, no shortcuts. Exactly what we needed.",
    a: "Facilities Lead, logistics company",
  },
  {
    q: "Fast to respond when our line went down early morning. Fixed within hours.",
    a: "Plant Supervisor, textile manufacturer",
  },
];

export default function TestimonialsPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
      {quotes.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
        >
          <div className="flex items-center gap-1 mb-3 text-brand">
            {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
          </div>
          <Quote className="text-brand/30 mb-2" size={22} />
          <p className="text-navy leading-snug flex-1">"{item.q}"</p>
          <p className="text-gray-500 text-sm mt-4 pt-4 border-t border-gray-100">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
