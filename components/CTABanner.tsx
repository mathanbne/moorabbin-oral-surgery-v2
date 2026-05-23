import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-900 to-cyan-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
          Book your free initial consultation today. Our specialist team is
          here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-sky-900 px-8 py-3.5 rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-md"
          >
            <Calendar size={18} />
            Book Free Consultation
          </Link>
          <a
            href="tel:0395555960"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors"
          >
            <Phone size={18} />
            03 9555 5960
          </a>
        </div>
      </div>
    </section>
  );
}
