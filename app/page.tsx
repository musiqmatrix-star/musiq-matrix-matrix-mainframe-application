"use client";

import Navigation from "../client/src/components/Navigation";
import HeroSection from "../client/src/components/HeroSection";
import ValueSection from "../client/src/components/ValueSection";
import FeaturesSection from "../client/src/components/FeaturesSection";
import ConversionSection from "../client/src/components/ConversionSection";
import Footer from "../client/src/components/Footer";

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