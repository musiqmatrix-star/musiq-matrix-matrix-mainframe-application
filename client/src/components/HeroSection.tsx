/**
 * Hero Section Component - MUSIQ MATRIX
 * Design: Cyberpunk Noir - Cinematic hero with cosmic background
 * Features: Brand messaging, CTA buttons, app store badges
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function HeroSection() {
  const handleJoinNow = () => {
    const conversionSection = document.getElementById("conversion");
    if (conversionSection) {
      conversionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAppStore = () => {
    toast.info("App Store download coming soon");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FFB800 1px, transparent 1px),
              linear-gradient(to bottom, #FFB800 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Character Image (Hidden on mobile, shown on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <img
                src="/images/the-man.jpg"
                alt="The Maverick"
                className="w-full max-w-md mx-auto rounded-lg"
                style={{
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFB800]/20 via-transparent to-transparent rounded-lg" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start mb-6"
            >
              <img
                src="/images/phoenix-logo.png"
                alt="MUSIQ MATRIX"
                className="h-24 md:h-32 w-auto animate-float"
              />
              <h2 className="font-display font-bold text-2xl md:text-3xl tracking-wider text-gradient-gold mt-2">
                MUSIQ MATRIX
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-xs md:text-sm tracking-[0.3em] text-white/60 mb-4"
            >
              THE ALGORITHM IS A SCRIPT.
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            >
              <span className="text-white">I AM THE </span>
              <span className="text-gradient-gold">CODE.</span>
              <br />
              <span className="text-gradient-cyan">EXPERIENCE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-lg md:text-xl tracking-[0.2em] text-gradient-magenta mb-8"
            >
              FREQUENCY IN MOTION
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                onClick={handleJoinNow}
                className="font-display text-base tracking-wider bg-gradient-to-r from-[#FFB800] to-[#FFC933] text-black hover:from-[#FFC933] hover:to-[#FFD966] transition-all duration-300 px-10 py-6 glow-gold"
              >
                JOIN NOW
              </Button>

              {/* App Store Badges */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAppStore}
                  className="flex items-center gap-2 bg-black/50 border border-white/20 rounded-lg px-4 py-2 hover:border-white/40 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60">Download on the</p>
                    <p className="text-xs font-semibold text-white">App Store</p>
                  </div>
                </button>

                <button
                  onClick={handleAppStore}
                  className="flex items-center gap-2 bg-black/50 border border-white/20 rounded-lg px-4 py-2 hover:border-white/40 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60">GET IT ON</p>
                    <p className="text-xs font-semibold text-white">Google Play</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      {/* Animated Scan Line */}
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent"
      />
    </section>
  );
}
