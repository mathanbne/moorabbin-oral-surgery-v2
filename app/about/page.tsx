import type { Metadata } from "next";
import Link from "next/link";
import { Award, Globe, Microscope, Heart } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Moorabbin Oral Surgery",
  description:
    "Learn about Moorabbin Oral Surgery and Dr Balanand Subramanian — specialist oral surgeon serving Bayside for 20+ years.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
              Our Practice
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              About Us
            </h1>
            <p className="mt-4 text-sky-100 text-lg leading-relaxed">
              Providing top-notch oral surgery care to the Bayside community,
              south eastern suburbs and western suburbs for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl font-bold text-sky-900 mb-6">
                Serving Bayside for Over 20 Years
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Moorabbin Oral Surgery, we&apos;ve been providing top-notch oral surgery care
                  to the Bayside community, south eastern suburbs and western suburbs for over
                  two decades. Our experienced surgeons are dedicated to making your procedure
                  as comfortable and stress-free as possible.
                </p>
                <p>
                  What sets us apart? Our commitment to personalised care, state-of-the-art
                  techniques, and a focus on long-lasting results. Whether you need wisdom
                  teeth removal, dental implants, or TMJ treatment, we&apos;re here to help.
                </p>
                <p>
                  Ready to take the next step? Schedule a consultation today and experience
                  the Moorabbin Oral Surgery difference.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Heart, value: "20+", label: "Years in Practice", color: "bg-red-50 text-red-500" },
                { icon: Award, value: "AHPRA", label: "Certified Specialist", color: "bg-cyan-50 text-cyan-600" },
                { icon: Microscope, value: "Digital", label: "3D Imaging & Planning", color: "bg-sky-50 text-sky-600" },
                { icon: Globe, value: "3", label: "Languages Spoken", color: "bg-teal-50 text-teal-600" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-[#f8fafc] rounded-2xl p-6 text-center">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                      <Icon size={18} />
                    </div>
                    <div className="text-2xl font-bold text-sky-900">{item.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Surgeon Bio */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
              Meet the Surgeon
            </span>
            <h2 className="mt-2 text-3xl font-bold text-sky-900 mb-8">
              Dr Balanand Subramanian
            </h2>
            <div className="flex gap-4 mb-6 flex-wrap">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold">
                Specialist Oral Surgeon
              </span>
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold">
                AHPRA Registered
              </span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold">
                Hindi & Tamil
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                10+ Years Experience
              </span>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dr Balanand Subramanian is a fully qualified and AHPRA-registered
                Specialist Oral Surgeon with over 10 years of specialist
                experience. He has extensive training in all aspects of oral and
                maxillofacial surgery, with a particular focus on wisdom teeth
                management, dental implants, and complex surgical extractions.
              </p>
              <p>
                Dr Subramanian is passionate about patient-centred care and takes
                the time to explain every procedure clearly so patients feel
                informed and confident in their treatment. He speaks English,
                Hindi, and Tamil, making specialist care accessible to a wider
                cross-section of the local community.
              </p>
              <p>
                He works closely with referring dentists and orthodontists to
                deliver coordinated, holistic treatment outcomes for patients of
                all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            Modern Care
          </span>
          <h2 className="mt-2 text-3xl font-bold text-sky-900 mb-4">
            Advanced Technology
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            We invest in the latest technology to ensure precise diagnoses,
            predictable outcomes, and comfortable patient experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital 3D Imaging",
                description:
                  "Cone beam CT scanning provides detailed three-dimensional views of teeth, bone, and anatomy for precise surgical planning.",
              },
              {
                title: "Guided Implant Surgery",
                description:
                  "Computer-guided implant placement using digital planning software ensures optimal positioning and predictable results.",
              },
              {
                title: "Modern Anaesthesia",
                description:
                  "IV sedation and local anaesthesia options are tailored to each patient for maximum comfort and safety.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#ecfeff] rounded-2xl p-8">
                <h3 className="font-semibold text-sky-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
