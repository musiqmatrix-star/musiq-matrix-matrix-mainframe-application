/**
 * Hero Section Component - MUSIQ MATRIX
 * Design: Cyberpunk Noir - Cinematic hero with cosmic background
 * Updated with Syncopate Display fonts and Glitch effects.
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
          {/* Left Side - Character Image */}
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
            {/* Logo & Title */}
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
              {/* Applying Glitch to the Brand Name */}
              <h2 
                className="font-display font-bold text-2xl md:text-3xl tracking-wider text-gradient-gold mt-2 matrix-glitch"
                data-text="MUSIQ MATRIX"
              >
                MUSIQ MATRIX
              </h2>
            </motion.div>

            {/* Tagline - Using Mono font for a technical feel */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-xs md:text-sm tracking-[0.4em] text-cyan/80 mb-4 uppercase"
            >
              The Algorithm is a Script.
            </motion.p>

            {/* Main Headline - Using Syncopate Display + Glitch */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-4"
            >
              <span className="text-white">I AM THE </span>
              <span className="text-gradient-gold matrix-glitch" data-text="CODE.">CODE.</span>
              <br />
              <span className="text-gradient-cyan matrix-glitch" data-text="EXPERIENCE">EXPERIENCE</span>
            </motion.h1>

            {/* Subtitle - Frequency in Motion */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-lg md:text-xl tracking-[0.3em] text-gradient-magenta mb-8"
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
                className="font-display text-base tracking-widest bg-gradient-to-r from-[#FFB800] to-[#FFC933] text-black hover:from-[#FFC933] hover:to-[#FFD966] transition-all duration-300 px-10 py-7 glow-gold border-none"
              >
                ENTER THE MATRIX
              </Button>

              {/* App Store Badges */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAppStore}
                  className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-4 py-2 hover:border-cyan/50 hover:bg-black/80 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02