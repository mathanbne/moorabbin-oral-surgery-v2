import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services#wisdom-teeth", label: "Wisdom Teeth Removal" },
  { href: "/services#implants", label: "Dental Implants" },
  { href: "/services#all-on-x", label: "All-on-X" },
  { href: "/services#extractions", label: "Surgical Extractions" },
];

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-sm leading-none">
                  Moorabbin
                </div>
                <div className="text-cyan-400 text-xs font-medium">
                  Oral Surgery
                </div>
              </div>
            </div>
            <p className="text-sky-200 text-sm leading-relaxed">
              Specialist oral surgery serving the Bayside community for over 20
              years. AHPRA certified and trusted by thousands of patients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-200 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sky-200 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sky-200 text-sm">
                <MapPin size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                510 South Road, Moorabbin VIC 3189
              </li>
              <li className="flex items-center gap-2.5 text-sky-200 text-sm">
                <Phone size={14} className="text-cyan-400 shrink-0" />
                <a href="tel:0395555960" className="hover:text-cyan-400 transition-colors">
                  03 9555 5960
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sky-200 text-sm">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <a href="mailto:admin@moorabbinoralsurgery.com" className="hover:text-cyan-400 transition-colors break-all">
                  admin@moorabbinoralsurgery.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sky-200 text-sm">
                <Clock size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>Mon–Fri: 9:00am – 5:00pm<br />Sat–Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sky-400 text-xs">
          <p>© {new Date().getFullYear()} Moorabbin Oral Surgery. All rights reserved.</p>
          <p>Dr Balanand Subramanian — AHPRA Specialist Oral Surgeon</p>
        </div>
      </div>
    </footer>
  );
}
