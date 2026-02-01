/**
 * Features Section - MUSIQ MATRIX
 * Design: Cyberpunk Noir - 4 pillar cards with gradient borders
 * Features: The Man, The Myth, The Machine, Matrixology 101
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FeatureCard {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
}

const features: FeatureCard[] = [
  {
    id: "the-man",
    title: "THE MAN",
    subtitle: "Meet the enigmatic coder behind the Matrix.",
    description: "Unveil the Maverick's secrets of frequency manipulation.",
    image: "/images/the-man.jpg",
    accentColor: "#FFB800",
  },
  {
    id: "the-myth",
    title: "THE MYTH",
    subtitle: "Explore the digital legends of frequency.",
    description: "Decode the myths' mysteries of the MUSIQ MATRIX.",
    image: "/images/the-myth.jpg",
    accentColor: "#00F0FF",
  },
  {
    id: "the-machine",
    title: "THE MACHINE",
    subtitle: "Dive into the core AI of the Matrix.",
    description: "Experience the cutting-edge algorithm at the heart of 'The Code'",
    image: "/images/the-machine.jpg",
    accentColor: "#FF00AA",
  },
  {
    id: "matrixology",
    badge: "MATRIXOLOGY 101",
    title: "MATRIXOLOGY 101",
    subtitle: "Level up in the Matrix with exclusive lessons on mastering the code.",
    description: "Unlock the MATRIX MAINFRAME!",
    image: "/images/matrixology.jpg",
    accentColor: "#7B2CBF",
  },
];

function FeatureCard({ feature, index }: { feature: FeatureCard; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleLearnMore = () => {
    toast.info("Feature coming soon");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        className="relative h-full rounded-lg overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(13, 13, 21, 0.9) 0%, rgba(20, 20, 35, 0.9) 100%)`,
        }}
      >
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${feature.accentColor}40, transparent 50%, ${feature.accentColor}20)`,
            padding: "1px",
          }}
        />

        {/* Inner Content */}
        <div className="relative p-1">
          <div className="rounded-lg overflow-hidden bg-[#0d0d15]">
            {/* Badge */}
            {feature.badge && (
              <div
                className="absolute top-4 right-4 z-10 px-3 py-1 rounded text-xs font-display tracking-wider"
                style={{
                  background: `${feature.accentColor}20`,
                  color: feature.accentColor,
                  border: `1px solid ${feature.accentColor}40`,
                }}
              >
                {feature.badge}
              </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              {/* Image Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, rgba(13, 13, 21, 0.8) 80%, rgba(13, 13, 21, 1) 100%)`,
                }}
              />
              {/* Accent Glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${feature.accentColor}, transparent)`,
                  boxShadow: `0 0 20px ${feature.accentColor}`,
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3
                className="font-display font-bold text-xl tracking-wider mb-2"
                style={{ color: feature.accentColor }}
              >
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm mb-2">{feature.subtitle}</p>
              <p className="text-white/50 text-sm mb-6">{feature.description}</p>

              {/* CTA Button */}
              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="w-full font-display text-xs tracking-wider border-white/20 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
                style={{
                  borderColor: `${feature.accentColor}40`,
                }}
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div
          className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderColor: feature.accentColor }}
        />
        <div
          className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderColor: feature.accentColor }}
        />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #080810 50%, #0a0a0f 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #FFB800 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-wider text-white mb-4">
            EXPLORE THE <span className="text-gradient-gold">MATRIX</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover the four pillars that form the foundation of the MUSIQ MATRIX experience.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
