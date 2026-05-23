import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moorabbin Oral Surgery | Specialist Oral Surgeon",
  description:
    "Specialist oral surgery in Moorabbin, VIC. Wisdom teeth removal, dental implants, All-on-X and more. Dr Balanand Subramanian — AHPRA certified. Free initial consultations.",
  keywords: [
    "oral surgery",
    "Moorabbin",
    "wisdom teeth",
    "dental implants",
    "All-on-X",
    "specialist oral surgeon",
    "Bayside",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
