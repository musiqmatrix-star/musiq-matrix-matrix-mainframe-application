"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navLinks = [
  { label: "MUSIC CATALOG", href: "#music-catalog" },
  { label: "VISUAL MEDIA", href: "#visual-media" },
  { label: "MATRX MERCH", href: "/matrx-merch", highlight: true },
  { label: "MAINFRAME OS", href: "#mainframe" },
  { label: "GENESIS", href: "#genesis" },
  { label: "ELEMENTAL PROTOCOL", href: "#elemental-protocol" },
  { label: "LOGIN", href: "#login" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignUp = () => {
    toast.success("Connection to Matrix established. Welcome.");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md py-3 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FFB800] flex items-center justify-center font-display font-black text-black text-xl skew-x-[-12deg] group-hover:skew-x-0 transition-transform">
            M
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-white">
            MUSIQ<span className="text-[#FFB800]">MATRIX</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-mono text-xs tracking-[0.15em] transition-colors hover:text-[#FFB800] ${
                pathname === link.href ? "text-[#FFB800]" : 
                link.highlight ? "text-white border-b border-white/30 pb-1" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#0a0a0f] border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-sm tracking-widest text-white/70 hover:text-[#FFB800]"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleSignUp}
              className="w-full bg-[#FFB800] text-black font-display font-bold rounded-none"
            >
              SIGN UP
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
