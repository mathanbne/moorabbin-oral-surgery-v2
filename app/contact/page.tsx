import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Moorabbin Oral Surgery",
  description:
    "Book a free consultation or get in touch with Moorabbin Oral Surgery. 510 South Road, Moorabbin VIC 3189. Call 03 9555 5960.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sky-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
              Contact Us
            </h1>
            <p className="mt-4 text-sky-100 text-lg leading-relaxed">
              Book a free consultation or send us a message — we&apos;re here
              to help Monday to Friday.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-8">
                Practice Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-900 mb-1">Address</div>
                    <div className="text-gray-600 text-sm">
                      510 South Road<br />Moorabbin VIC 3189
                    </div>
                    <a
                      href="https://maps.google.com/?q=510+South+Road+Moorabbin+VIC+3189"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 text-sm font-medium hover:underline mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-900 mb-1">Phone</div>
                    <a
                      href="tel:0395555960"
                      className="text-gray-600 text-sm hover:text-cyan-600 transition-colors"
                    >
                      03 9555 5960
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-900 mb-1">Email</div>
                    <a
                      href="mailto:admin@moorabbinoralsurgery.com"
                      className="text-gray-600 text-sm hover:text-cyan-600 transition-colors break-all"
                    >
                      admin@moorabbinoralsurgery.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sky-900 mb-1">Hours</div>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div className="flex justify-between gap-8">
                        <span>Monday – Friday</span>
                        <span>9:00am – 5:00pm</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-[#ecfeff] rounded-2xl overflow-hidden h-48 flex items-center justify-center border border-cyan-100">
                <div className="text-center">
                  <MapPin size={28} className="text-cyan-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">510 South Road, Moorabbin VIC 3189</p>
                  <a
                    href="https://maps.google.com/?q=510+South+Road+Moorabbin+VIC+3189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 text-sm font-semibold hover:underline mt-1 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
