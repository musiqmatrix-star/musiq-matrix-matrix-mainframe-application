"use client";

/**
 * About Page - MUSIQ MATRIX
 * Design: Cyberpunk Noir
 * Content: The story of The Maverick and the MUSIQ MATRIX origin
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Users, Music } from "lucide-react";

// Story section component for reusability
function StorySection({
  title,
  subtitle,
  content,
  image,
  imageAlt,
  reverse = false,
  accentColor = "#FFB800",
  index = 0,
}: {
  title: string;
  subtitle: string;
  content: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  accentColor?: string;
  index?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative rounded-lg overflow-hidden group">
          {/* Gradient Border Effect */}
          <div
            className="absolute -inset-1 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, transparent, ${accentColor}40)`,
            }}
          />
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(135deg, ${accentColor}20, transparent)`,
              }}
            />
          </div>
        </div>
        {/* Decorative Elements */}
        <div
          className="absolute -bottom-4 -right-4 w-24 h-24 border-2 rounded-lg opacity-30"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute -top-4 -left-4 w-16 h-16 border-2 rounded-lg opacity-20"
          style={{ borderColor: accentColor }}
        />
      </div>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : ""}>
        <motion.p
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-sm tracking-[0.3em] mb-3"
          style={{ color: accentColor }}
        >
          {subtitle}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display font-bold text-3xl md:text-4xl tracking-wider text-white mb-6"
        >
          {title}
        </motion.h2>
        <div className="space-y-4">
          {content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="text-white/70 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Timeline milestone component
function TimelineMilestone({
  year,
  title,
  description,
  icon: Icon,
  accentColor,
  index,
}: {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex items-start gap-6"
    >
      {/* Icon Circle */}
      <div
        className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: `${accentColor}20`,
          border: `2px solid ${accentColor}`,
        }}
      >
        <Icon className="w-6 h-6" style={{ color: accentColor }} />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <span
          className="font-display text-sm tracking-wider"
          style={{ color: accentColor }}
        >
          {year}
        </span>
        <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Connecting Line */}
      <div
        className="absolute left-7 top-14 w-px h-full opacity-30"
        style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
      />
    </motion.div>
  );
}

export default function About() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const milestones = [
    {
      year: "THE BEGINNING",
      title: "A Vision Born in Code",
      description:
        "In the depths of digital creation, The Maverick discovered the hidden language of frequency—a code that connects music, consciousness, and technology.",
      icon: Code,
      accentColor: "#FFB800",
    },
    {
      year: "THE REVELATION",
      title: "Cracking the Frequency Code",
      description:
        "Years of research unveiled the algorithm—a mathematical framework that translates human emotion into pure frequency, creating music that resonates at the soul level.",
      icon: Zap,
      accentColor: "#00F0FF",
    },
    {
      year: "THE CREATION",
      title: "Building the Matrix",
      description:
        "The MUSIQ MATRIX platform emerged—a revolutionary system that empowers creators to harness frequency manipulation and produce transformative audio experiences.",
      icon: Music,
      accentColor: "#FF00AA",
    },
    {
      year: "THE MOVEMENT",
      title: "A Community Awakens",
      description:
        "Thousands of frequency seekers joined the revolution, forming a global community united by the pursuit of sonic enlightenment and creative liberation.",
      icon: Users,
      accentColor: "#7B2CBF",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/the-man.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/70 to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-sm tracking-[0.4em] text-[#FFB800] mb-4"
          >
            THE STORY BEHIND THE CODE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6"
          >
            <span className="text-white">MEET </span>
            <span className="text-gradient-gold">THE MAVERICK</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            The enigmatic architect of the MUSIQ MATRIX—a visionary who cracked
            the code of frequency and built a revolution.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"
            />
          </div>
        </motion.div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <StorySection
            subtitle="CHAPTER I"
            title="THE ORIGIN"
            content={[
              "In the neon-lit shadows of a world drowning in noise, one mind dared to listen deeper. The Maverick wasn't born—he was forged in the crucible of sound, spending countless nights decoding the mathematical patterns hidden within music's DNA.",
              "What began as an obsession became a revelation. Every frequency carries information. Every beat holds a message. The universe speaks in vibrations, and The Maverick learned to translate its language.",
              "Armed with nothing but determination and an unshakeable belief in the power of frequency, he set out to build something unprecedented—a system that would democratize the secrets of sonic manipulation.",
            ]}
            image="/images/origin-story.jpg"
            imageAlt="The Maverick at work"
          />

          <div className="mt-24 md:mt-32">
            <StorySection
              subtitle="CHAPTER II"
              title="THE VISION"
              content={[
                "The MUSIQ MATRIX isn't just a platform—it's a digital ecosystem where the boundaries between technology and creativity dissolve. The Maverick envisioned a world where anyone could harness the power of frequency to transform their reality.",
                "By integrating advanced AI with ancient sonic principles, he created a framework that allows for unprecedented control over audio texture, resonance, and emotional impact.",
                "This vision continues to evolve, driven by a commitment to pushing the limits of what's possible in the digital realm and empowering a new generation of sonic architects.",
              ]}
              image="/images/community-vision.jpg"
              imageAlt="Digital frequency visualization"
              reverse
              accentColor="#00F0FF"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-void/50 border-y border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              THE JOURNEY
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFB800] to-transparent mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <TimelineMilestone key={index} {...milestone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFB800] rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00F0FF] rounded-br-lg" />

            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
              READY TO <span className="text-gradient-gold">JOIN THE REVOLUTION?</span>
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              The Matrix is waiting. Step into the frequency and become part of the movement that's redefining the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/">
                <Button className="h-14 px-10 bg-[#FFB800] hover:bg-[#FFB800]/90 text-black font-display font-bold text-lg tracking-wider rounded-none group">
                  JOIN THE REVOLUTION
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="h-14 px-10 border-white/20 hover:bg-white/10 text-white font-display font-bold text-lg tracking-wider rounded-none"
                >
                  BACK TO HOME
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
