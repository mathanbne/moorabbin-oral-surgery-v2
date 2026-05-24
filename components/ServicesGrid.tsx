import Link from "next/link";
import { SmilePlus, Wrench, Sparkles, Zap } from "lucide-react";

const services = [
  {
    icon: SmilePlus,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop",
    title: "Wisdom Teeth Removal",
    description:
      "Safe and comfortable extraction of impacted or problematic wisdom teeth, preventing future dental complications.",
    href: "/services#wisdom-teeth",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions using advanced implant technology for a natural look and lasting function.",
    href: "/services#implants",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Zap,
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&h=400&fit=crop",
    title: "All-on-X",
    description:
      "Full-arch restoration with as few as four implants — a life-changing solution for patients with significant tooth loss.",
    href: "/services#all-on-x",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=400&fit=crop",
    title: "Surgical Extractions",
    description:
      "Expert removal of damaged, broken, or impacted teeth with minimal discomfort and fast recovery.",
    href: "/services#extractions",
    color: "bg-cyan-50 text-cyan-700",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-sky-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            From routine extractions to complex full-arch restorations, we
            provide specialist oral surgery care across a full range of
            procedures.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-cyan-100 transition-all duration-300 flex flex-col"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-sky-900 text-lg mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 text-cyan-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
