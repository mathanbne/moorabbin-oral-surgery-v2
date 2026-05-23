import Link from "next/link";
import { Phone, Calendar, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-700" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-600/20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-900/40 translate-y-1/2 -translate-x-1/4" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-cyan-300" />
            <span className="text-cyan-100 text-sm font-medium">
              AHPRA Certified Specialist Oral Surgeon
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Welcome to
            <span className="block text-cyan-300 mt-1">Moorabbin Oral Surgery</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-sky-100 leading-relaxed mb-8 max-w-xl animate-fade-in-up animate-delay-100">
            At Moorabbin Oral Surgery, we&apos;ve been providing top-notch oral surgery care
            to the Bayside community, south eastern suburbs and western suburbs for over
            two decades. Our experienced surgeons are dedicated to making your procedure
            as comfortable and stress-free as possible.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animate-delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-900 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-cyan-50 transition-colors shadow-lg"
            >
              <Calendar size={18} />
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition-colors"
            >
              Our Services
            </Link>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-8 animate-fade-in-up animate-delay-300">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "Personalised", label: "Care" },
              { value: "Long-Lasting", label: "Results" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-cyan-200 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-3 text-white text-sm">
          <Phone size={14} className="text-cyan-300" />
          <span>Call us:</span>
          <a
            href="tel:0395555960"
            className="font-semibold hover:text-cyan-300 transition-colors"
          >
            03 9555 5960
          </a>
          <span className="text-white/50">·</span>
          <span className="text-white/70">Mon–Fri 9am–5pm</span>
        </div>
      </div>
    </section>
  );
}
