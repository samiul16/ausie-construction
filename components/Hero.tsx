"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ArrowRight } from "lucide-react";
import type { Variants, Transition } from "framer-motion";

const images = [
  "/landing/construction-landing.jpg", // Electrician 1
  "/landing/construction-landing-3.jpg", // Industrial
  "/landing/construction-landing-2.jpg", // Wires
];

const testimonials = [
  {
    name: "Electria helped me so fast!",
    text: '"Super friendly and got everything working perfectly."',
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Top-notch service!",
    text: '"Team was professional, punctual, and got the job done."',
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide logic (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Text Animation Variants (Staggered Top to Bottom)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each element
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const tickerItems = [
    "CONSTRUCTION",
    "FAST",
    "RELIABLE",
    "SAFE",
    "CONSTRUCTION",
    "FAST",
    "RELIABLE",
    "SAFE",
  ];

  return (
    <>
      <section className="relative w-full min-h-[90vh] bg-[#050505] text-white flex items-center overflow-hidden py-12">
        {/* Background decoration (optional subtle glow) */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900/40 via-[#050505] to-[#050505] -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight"
            >
              Smart Construction. <br /> Sustainable Outcomes.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg max-w-lg leading-relaxed"
            >
              Expert solutions for all your electrical needs – fast, safe, and
              efficient. We power your world with precision.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105 active:scale-95">
                <span>+61 0420 264 105</span>
                <div className="bg-white/20 p-1 rounded-full">
                  <Phone size={16} />
                </div>
              </button>
              <button className="border border-gray-700 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                Explore Our Services
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="h-px w-full bg-gray-800 my-2"
            />

            {/* Testimonials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-8"
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <img
                    src={t.avatar}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full grayscale opacity-80"
                  />
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <h4 className="font-bold text-sm text-white mb-1">
                      {t.name}
                    </h4>
                    <p className="text-xs text-gray-500 italic">{t.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: IMAGE SLIDER --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[650px] w-full"
          >
            {/* Decorative Back Card (The offset border effect) */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-yellow-400/10 rounded-[2.5rem] z-0" />

            {/* Slider Container */}
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Electrical Services"
                  className="absolute inset-0 w-full h-full object-cover"
                  // Slide Animation
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                />

                {/* Dark Overlay on image for better contrast if needed */}
                <div className="absolute inset-0 bg-black/20" />
              </AnimatePresence>

              {/* Slider Progress Indicators (Optional but nice) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImage
                        ? "w-8 bg-yellow-400"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- INFINITE MARQUEE --- */}
      <div className="w-full bg-yellow-400 py-12 overflow-hidden flex border-y border-yellow-500">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // Adjust speed here (lower = faster)
          }}
          style={{ width: "fit-content" }}
        >
          {/* We repeat the array twice to ensure seamless loop */}
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, index) => (
              <div key={index} className="flex items-center mx-6">
                <span className="text-black font-bold text-2xl tracking-widest uppercase">
                  {item}
                </span>
                <span className="ml-12 w-2 h-2 bg-black rounded-full" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
