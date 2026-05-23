import type { Metadata } from "next";
import Link from "next/link";
import { SmilePlus, Sparkles, Zap, Wrench, CheckCircle } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services | Moorabbin Oral Surgery",
  description:
    "Specialist oral surgery services including wisdom teeth removal, dental implants, All-on-X, and surgical extractions in Moorabbin VIC.",
};

const services = [
  {
    id: "wisdom-teeth",
    icon: SmilePlus,
    title: "Wisdom Teeth Removal",
    description:
      "Wisdom teeth (third molars) often lack sufficient room to erupt properly, leading to pain, infection, and crowding. Early removal prevents these complications and protects neighbouring teeth.",
    points: [
      "Assessment with digital X-rays and 3D imaging",
      "Both simple and complex surgical extractions",
      "Local anaesthesia or IV sedation options",
      "Aftercare instructions and follow-up included",
    ],
  },
  {
    id: "implants",
    icon: Sparkles,
    title: "Dental Implants",
    description:
      "Dental implants are titanium posts placed into the jawbone to support a crown, bridge, or denture. They look and function like natural teeth and can last a lifetime with proper care.",
    points: [
      "Thorough planning using guided surgery software",
      "Single implants, multiple implants or full arch",
      "Bone grafting when required",
      "Coordinated care with your treating dentist",
    ],
  },
  {
    id: "all-on-x",
    icon: Zap,
    title: "All-on-X",
    description:
      "All-on-4 or All-on-6 is a full-arch implant technique that replaces an entire upper or lower arch of teeth using just four to six implants. A cost-effective, permanent solution for patients with extensive tooth loss.",
    points: [
      "Immediate or staged loading options",
      "Replaces full arch of teeth in one procedure",
      "Avoids the need for bone grafting in many cases",
      "Dramatically improved quality of life and confidence",
    ],
  },
  {
    id: "extractions",
    icon: Wrench,
    title: "Surgical Extractions",
    description:
      "When a tooth is severely broken, decayed, or impacted, surgical removal may be required. We perform all types of complex extractions with precision and minimal discomfort.",
    points: [
      "Impacted canines and exposure for orthodontics",
      "Broken or root-fractured teeth",
      "Pre-prosthetic surgery preparation",
      "Post-extraction socket preservation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
              Specialist Care
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              Our Services
            </h1>
            <p className="mt-4 text-sky-100 text-lg leading-relaxed">
              From straightforward extractions to complex implant restorations,
              we deliver specialist-level care with modern techniques and
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon panel */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="bg-[#ecfeff] rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-sky-900">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle
                          size={18}
                          className="text-cyan-600 shrink-0 mt-0.5"
                        />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-cyan-700 transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
