"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ValueSection />
        <FeaturesSection />
        <ConversionSection />
      </main>
      <Footer />
    </div>
  );
}
