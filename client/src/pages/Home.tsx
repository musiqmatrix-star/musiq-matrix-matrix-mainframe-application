/**
 * Home Page - MUSIQ MATRIX
 * Design: Cyberpunk Noir
 * Sections: Navigation, Hero, Value, Features, Conversion, Footer
 */

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Global Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section - Identity Layer */}
        <HeroSection />

        {/* Value Reinforcement - Trust Layer */}
        <ValueSection />

        {/* Feature Grid - Understanding Layer */}
        <FeaturesSection />

        {/* Conversion Section - Invitation Layer */}
        <ConversionSection />
      </main>

      {/* Footer - Closure Layer */}
      <Footer />
    </div>
  );
}
