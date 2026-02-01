"use client";
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
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, #FFB800 1px, transparent 1px), linear-gradient(to bottom, #FFB800 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
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
              <h2 
                className="font-display font-bold text-2xl md:text-3xl tracking-wider text-gradient-gold mt-2 matrix-glitch"
                data-text="MUSIQ MATRIX"
              >
                MUSIQ MATRIX
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-xs md:text-sm tracking-[0.4em] text-cyan/80 mb-4 uppercase"
            >
              The Algorithm is a Script.
            </motion.p>

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-lg md:text-xl tracking-[0.3em] text-gradient-magenta mb-8"
            >
              FREQUENCY IN MOTION
            </motion.p>

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

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAppStore}
                  className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-4 py-2 hover:border-cyan/50 hover:bg-black/80 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.43.35 3.48.35s2.21-.37 3.49-.35c1.6.02 2.81.74 3.51 1.74-3.11 1.7-2.58 5.45.31 6.38-.61 1.51-1.44 3.01-2.5 4.49zM13 6.75c-.02 0-.04 0-.06 0 .02-1.33.54-2.61 1.48-3.53.93-.91 2.19-1.47 3.52-1.47h.06c-.02 1.33-.54 2.61-1.48 3.53-.93.91-2.19 1.47-3.52 1.47z" />
                  </svg>
                </button>
                <button
                  onClick={handleAppStore}
                  className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-4 py-2 hover:border-cyan/50 hover:bg-black/80 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 0-.1.12c-.2.279-.309.604-.309.944v.001c0 .166.025.326.071.477l.001.001a1.002 1.002 0 0 0 .937.671h15.582c.552 0 1-.448 1-1V.6c0-.552-.448-1-1-1H4.209a1 1 0 0 0-1 1c0 .34.109.665.309.944a.99.99 0 0 0 .091.1c.033.033.066.066.1.1zm1.791.786h13.2l-6.6 6.6-6.6-6.6zm13.2 18.8h-13.2l6.6-6.6 6.6 6.6zM14.5 12l6.1 6.1V5.9L14.5 12z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
