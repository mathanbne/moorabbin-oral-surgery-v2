"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-cyan-600" />
        </div>
        <h3 className="text-xl font-bold text-sky-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Thank you for getting in touch. We&apos;ll contact you within one
          business day to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-sky-900 mb-2">
        Book a Consultation
      </h2>
      <p className="text-gray-600 text-sm mb-8">
        Fill in the form below and we&apos;ll be in touch to confirm your free
        initial consultation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
              placeholder="Jane"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            placeholder="04xx xxx xxx"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition"
            placeholder="jane@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Reason for Visit
          </label>
          <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition bg-white text-gray-700">
            <option value="">Select a service…</option>
            <option>Wisdom Teeth Removal</option>
            <option>Dental Implants</option>
            <option>All-on-X</option>
            <option>Surgical Extraction</option>
            <option>Other / Not Sure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred Appointment Time
          </label>
          <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition bg-white text-gray-700">
            <option value="">Any time</option>
            <option>Morning (9am–12pm)</option>
            <option>Afternoon (12pm–3pm)</option>
            <option>Late afternoon (3pm–5pm)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Message / Additional Notes
          </label>
          <textarea
            rows={4}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition resize-none"
            placeholder="Tell us a bit about your situation or any questions you have…"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-cyan-600 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-cyan-700 transition-colors"
        >
          <Send size={16} />
          Send Message
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your details will only be used to contact
          you about your appointment.
        </p>
      </form>
    </div>
  );
}
