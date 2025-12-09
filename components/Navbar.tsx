"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Youtube,
  Music,
  Phone,
  Clock,
  Zap,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for clean tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full font-sans">
      {/* --- TOP BAR --- */}
      <div className="hidden md:block w-full bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm text-gray-500">
          {/* Left: Social Icons */}
          <div className="flex items-center gap-4">
            <SocialIcon icon={<Instagram size={16} />} href="#" />
            <SocialIcon icon={<Youtube size={16} />} href="#" />
            <SocialIcon icon={<Music size={16} />} href="#" />
          </div>

          {/* Right: Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-yellow-500 transition-colors cursor-pointer">
              <Phone size={16} className="text-yellow-400" />
              <span className="font-medium">0420 264 105</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-yellow-400" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-gray-100"
            : "bg-white py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="text-yellow-400"
            >
              <Zap size={28} fill="currentColor" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-black">
              ELECTRIA
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink text="About" />
            <NavLink text="Services" />
            <NavLink text="FAQ" />
            <NavLink text="Blog" />
            <NavLink text="Pages" hasDropdown />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-md shadow-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/30 transition-all"
            >
              Get a Quote
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <MobileNavLink text="About" />
                <MobileNavLink text="Services" />
                <MobileNavLink text="FAQ" />
                <MobileNavLink text="Blog" />
                <MobileNavLink text="Pages" />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl mt-4"
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

// --- Sub Components ---

const SocialIcon = ({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) => (
  <motion.a
    href={href}
    whileHover={{ y: -2, color: "#000" }}
    className="text-gray-400 transition-colors"
  >
    {icon}
  </motion.a>
);

const NavLink = ({
  text,
  hasDropdown,
}: {
  text: string;
  hasDropdown?: boolean;
}) => {
  return (
    <motion.a
      href="#"
      className="relative text-gray-600 font-medium hover:text-black flex items-center gap-1 group"
      initial="initial"
      whileHover="hover"
    >
      {text}
      {hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-60" />}

      {/* Animated Underline */}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 bg-yellow-400 w-full origin-left"
        variants={{
          initial: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.a>
  );
};

const MobileNavLink = ({ text }: { text: string }) => (
  <a
    href="#"
    className="text-lg font-medium text-gray-700 hover:text-yellow-600 hover:pl-2 transition-all"
  >
    {text}
  </a>
);

export default Navbar;
