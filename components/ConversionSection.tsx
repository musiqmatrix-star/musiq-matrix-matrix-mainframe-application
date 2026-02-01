"use client";
/**
 * Conversion Section - MUSIQ MATRIX
 * Design: Cyberpunk Noir - Email signup with cosmic background
 * Purpose: Invite engagement without pressure
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ConversionSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Welcome to the Matrix! Check your email for confirmation.");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section
      id="conversion"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, rgba(123, 44, 191, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 0% 100%, rgba(0, 240, 255, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse at 100% 100%, rgba(255, 184, 0, 0.1) 0%, transparent 40%),
              linear-gradient(180deg, #0a0a0f 0%, #0d0d18 50%, #0a0a0f 100%)
            `,
          }}
        />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB800]/30 to-transparent"
        />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FFB800 1px, transparent 1px),
              linear-gradient(to bottom, #FFB800 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6">
            <span className="text-white">ENTER THE </span>
            <span className="text-gradient-magenta">MATRIX</span>
          </h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/60 mb-10"
          >
            Join the MUSIQ MATRIX Revolution. Sign up now and unlock the code of frequency.
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="relative"
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              {/* Input Container with Gradient Border */}
              <div className="relative flex-1">
                <div
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{
                    background: "linear-gradient(90deg, #FFB800, #00F0FF, #FF00AA)",
                    padding: "1px",
                  }}
                />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative w-full h-14 px-6 rounded-full bg-[#0d0d15] border-0 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#FFB800]/50"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 rounded-full font-display text-sm tracking-wider bg-gradient-to-r from-[#FFB800] to-[#FFC933] text-black hover:from-[#FFC933] hover:to-[#FFD966] transition-all duration-300 glow-gold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    JOINING...
                  </span>
                ) : (
                  "SIGN UP"
                )}
              </Button>
            </div>

            {/* Privacy Note */}
            <p className="mt-4 text-xs text-white/40">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.form>
        </motion.div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#gradient-divider)"
            d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient-divider" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB800" />
              <stop offset="50%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#FF00AA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
