import type { Metadata } from "next";
import Link from "next/link";
import { SmilePlus, Sparkles, Zap, Wrench, Layers, Search, CheckCircle } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services | Moorabbin Oral Surgery",
  description:
    "Specialist oral surgery services including wisdom teeth removal, dental implants, All-on-Four, bone grafting, and more in Moorabbin VIC.",
};

const services = [
  {
    id: "wisdom-teeth",
    icon: SmilePlus,
    title: "Wisdom Teeth Removal",
    description:
      "Wisdom teeth, also known as third molars, are the last teeth to erupt in your mouth. They usually appear between ages 18 and 24, but can become impacted due to lack of space in your jaw, causing pain, infection, and damage to adjacent teeth.",
    points: [
      "Pain and discomfort relief",
      "Prevention of infection and damage to adjacent teeth",
      "Both local and general anaesthesia options for your comfort",
      "Recovery is typically quick, especially for younger patients",
    ],
  },
  {
    id: "implants",
    icon: Sparkles,
    title: "Dental Implants",
    description:
      "Are you missing teeth and looking for a solution that feels and looks like your natural teeth? Dental implants are placed in two stages: our surgeons carefully place a titanium implant into your jawbone, then your dentist attaches a crown or bridge to restore your smile and function.",
    points: [
      "Improved appearance — a natural-looking smile",
      "Enhanced function — enjoy eating and speaking comfortably",
      "Durability — a long-lasting solution that can last for many years",
      "Coordinated care with your treating dentist",
    ],
  },
  {
    id: "all-on-four",
    icon: Zap,
    title: "All-on-Four Dental Implants",
    description:
      "Are you missing multiple teeth and looking for a reliable, long-lasting solution? With All-on-Four, we strategically place four dental implants in your jawbone that securely support a full arch of replacement teeth, giving you a natural-looking and functional smile.",
    points: [
      "Improved appearance — a beautiful, natural-looking smile",
      "Enhanced function — eat, speak, and laugh with confidence",
      "Faster recovery compared to traditional implant procedures",
      "Cost-effective solution for replacing multiple teeth",
    ],
  },
  {
    id: "extractions",
    icon: Wrench,
    title: "General Tooth Extraction",
    description:
      "Sometimes complex tooth anatomy, medical conditions, or medications can make tooth extraction a more involved procedure. Our experienced surgeons carefully assess your situation and recommend the best approach, with a choice of general or local anaesthesia for your comfort.",
    points: [
      "Complex tooth anatomy — impacted, misaligned, or deep-rooted teeth",
      "Medical conditions such as osteoporosis or blood clotting disorders",
      "Over-retained baby teeth fused to the underlying bone",
      "Pain relief and improved oral health outcomes",
    ],
  },
  {
    id: "bone-grafting",
    icon: Layers,
    title: "Bone Grafting",
    description:
      "If you're missing teeth and have experienced bone loss in your jaw, bone grafting may be necessary before dental implant placement. Bone grafting adds bone material to your jawbone to create a suitable environment for implants and improve treatment success.",
    points: [
      "Autografts — bone taken from another part of your own body",
      "Allografts — bone substitutes made from synthetic or donor materials",
      "Improves dental implant success rate",
      "Restores facial structure and prevents further bone loss",
    ],
  },
  {
    id: "impacted-teeth",
    icon: Zap,
    title: "Exposure of Impacted Teeth",
    description:
      "Impacted teeth can become misaligned, affecting your smile and oral function. We surgically uncover a partially or fully buried tooth to allow it to erupt naturally, typically followed by orthodontic treatment to guide the tooth into its proper position.",
    points: [
      "Improved aesthetics — a straighter smile boosts confidence",
      "Enhanced function — properly aligned teeth improve chewing and biting",
      "Reduced risk of infections and damage to adjacent teeth",
      "Our surgeons and orthodontists work together for optimal results",
    ],
  },
  {
    id: "oral-pathology",
    icon: Search,
    title: "Oral Pathology",
    description:
      "Your oral health is a vital part of your overall well-being. Oral pathology is the study of diseases affecting the mouth and surrounding tissues. Early detection of oral diseases can help prevent serious complications, including cancer, infections, and functional impairments.",
    points: [
      "Sores or ulcers that don't heal",
      "White or red patches on the tongue, gums, or inner cheeks",
      "Jaw pain, swelling, or loose teeth",
      "Biopsy and personalised treatment planning",
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
