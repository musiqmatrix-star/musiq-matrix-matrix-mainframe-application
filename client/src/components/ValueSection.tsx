/**
 * Value Reinforcement Section - MUSIQ MATRIX
 * Design: Cyberpunk Noir - Trust layer with declarative messaging
 * Purpose: "Yes, you're in the right place" moment
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ValueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #0d0d15 50%, #0a0a0f 100%)",
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FFB800] to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00F0FF] to-transparent" />
      </div>

      {/* Horizontal Glow Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB800]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider mb-6">
            <span className="text-gradient-cyan">CONNECT.</span>{" "}
            <span className="text-gradient-gold">EXPERIENCE.</span>{" "}
            <span className="text-gradient-magenta">TRANSFORM.</span>
          </h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Join the MUSIQ MATRIX Revolution. Sign up now and unlock the code of frequency.
          </motion.p>

          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 mx-auto w-48 h-0.5 bg-gradient-to-r from-[#FFB800] via-[#00F0FF] to-[#FF00AA]"
          />
        </motion.div>
      </div>
    </section>
  );
}
