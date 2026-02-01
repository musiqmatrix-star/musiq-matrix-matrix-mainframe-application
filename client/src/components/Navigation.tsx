/**
 * Navigation Component - MUSIQ MATRIX
 * Design: Cyberpunk Noir - Fixed navigation with gold accent CTA
 * Features: Logo, nav links, social icons, sign up button
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "FEATURES", href: "/#features" },
  { label: "COMMUNITY", href: "#community" },
];

const socialLinks = [
  { 
    label: "Discord", 
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  },
  { 
    label: "Twitter", 
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  { 
    label: "Facebook", 
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle hash links on the same page
    if (href.startsWith("#")) {
      if (href === "#community") {
        toast.info("Feature coming soon");
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Handle hash links from other pages (e.g., /#features)
    else if (href.includes("#") && !href.startsWith("/about")) {
      const [path, hash] = href.split("#");
      if (location === path || (location === "/" && path === "/")) {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleSignUp = () => {
    if (location === "/") {
      const conversionSection = document.getElementById("conversion");
      if (conversionSection) {
        conversionSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#conversion";
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    if (href.startsWith("/#")) return location === "/";
    return location === href || location.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/images/phoenix-logo.png" 
              alt="MUSIQ MATRIX" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display font-bold text-lg md:text-xl tracking-wider text-gradient-gold">
              MUSIQ<br className="hidden" />MATRIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("#") || link.href.includes("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`font-display text-sm tracking-widest transition-colors duration-300 relative group ${
                    isActive(link.href) ? "text-[#FFB800]" : "text-white/70 hover:text-[#FFB800]"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFB800] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-display text-sm tracking-widest transition-colors duration-300 relative group ${
                    isActive(link.href) ? "text-[#FFB800]" : "text-white/70 hover:text-[#FFB800]"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFB800] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              )
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Feature coming soon");
                  }}
                  className="text-white/50 hover:text-[#00F0FF] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Sign Up Button */}
            <Button
              onClick={handleSignUp}
              className="font-display text-sm tracking-wider bg-transparent border border-[#FFB800] text-[#FFB800] hover:bg-[#FFB800] hover:text-black transition-all duration-300 px-6"
            >
              SIGN UP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/70 hover:text-[#FFB800] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-white/10">
            {navLinks.map((link) => (
              link.href.startsWith("#") || (link.href.includes("#") && !link.href.startsWith("/about")) ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block font-display text-sm tracking-widest transition-colors ${
                    isActive(link.href) ? "text-[#FFB800]" : "text-white/70 hover:text-[#FFB800]"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-display text-sm tracking-widest transition-colors ${
                    isActive(link.href) ? "text-[#FFB800]" : "text-white/70 hover:text-[#FFB800]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Feature coming soon");
                  }}
                  className="text-white/50 hover:text-[#00F0FF] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <Button
              onClick={handleSignUp}
              className="w-full font-display text-sm tracking-wider bg-[#FFB800] text-black hover:bg-[#FFB800]/90 transition-all duration-300"
            >
              SIGN UP
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
