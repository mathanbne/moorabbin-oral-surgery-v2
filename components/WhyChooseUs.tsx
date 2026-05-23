import { ShieldCheck, Clock, Users, Microscope } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "AHPRA Certified Specialist",
    description:
      "Dr Subramanian is a fully registered Specialist Oral Surgeon with the Australian Health Practitioner Regulation Agency.",
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    description:
      "Serving the Moorabbin and Bayside communities for over two decades with a reputation for exceptional care.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description:
      "We use digital imaging and guided surgery planning for precise, predictable outcomes with faster recovery.",
  },
  {
    icon: Users,
    title: "Free Initial Consultations",
    description:
      "Your first consultation is complimentary — no obligation, just a thorough assessment and clear treatment plan.",
  },
];

const stats = [
  { value: "20+", label: "Years Serving Bayside" },
  { value: "4.63★", label: "Verified Patient Rating" },
  { value: "100%", label: "AHPRA Verified" },
  { value: "Free", label: "Initial Consultations" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-sky-900">
            Care You Can Trust
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Our patients choose us for our expertise, transparency, and
            commitment to comfortable, high-quality oral surgery.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-sky-900 text-base mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-sky-900 to-cyan-700 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-cyan-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
