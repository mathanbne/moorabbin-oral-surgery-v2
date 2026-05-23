import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Dr Subramanian was incredibly professional and put me at ease from the very first consultation. My wisdom teeth removal was quick and recovery was smooth. Highly recommend!",
    rating: 5,
    procedure: "Wisdom Teeth Removal",
  },
  {
    name: "James T.",
    text: "After years of being self-conscious about my smile, the dental implants have been life-changing. The team at Moorabbin Oral Surgery was thorough, caring, and the results are amazing.",
    rating: 5,
    procedure: "Dental Implants",
  },
  {
    name: "Linda K.",
    text: "Excellent practice with a warm, professional team. The free consultation meant I could ask all my questions before committing. The whole experience exceeded my expectations.",
    rating: 5,
    procedure: "Surgical Extraction",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            Patient Reviews
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-sky-900">
            What Our Patients Say
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-700 font-semibold">4.63</span>
            <span className="text-gray-500 text-sm">average rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sky-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{t.procedure}</div>
                </div>
                <span className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full font-medium">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
