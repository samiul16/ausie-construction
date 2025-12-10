"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, ShieldCheck, Wallet, ArrowRight } from "lucide-react";
import type { Variants } from "framer-motion";

const features = [
  {
    title: "Swift Response",
    description: "Count on us for prompt service when you need it most.",
    icon: <Clock className="text-yellow-400" size={24} />,
  },
  {
    title: "Trusted Experts",
    description:
      "Our electricians are certified and experienced, ensuring top quality.",
    icon: <Users className="text-yellow-400" size={24} />,
  },
  {
    title: "Safety First",
    description:
      "We prioritize safety in every project, keeping your home or business secure.",
    icon: <ShieldCheck className="text-yellow-400" size={24} />,
  },
  {
    title: "Affordable Solutions",
    description: "High-quality service at prices that work for your budget.",
    icon: <Wallet className="text-yellow-400" size={24} />,
  },
];

const WhyUs = () => {
  // Container controls the staggering of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card
      },
    },
  };

  // Item controls the slide from/to Left
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100, // Start off-screen to the left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-yellow-400"></span>
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
                Why Us?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
              Reliable and Efficient
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base leading-relaxed">
            Construction projects demand precision, planning, and quality
            execution. Our experienced team delivers reliable results every
            time.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // once: false allows animation to replay on scroll up/down
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#F9FAFB] p-8 rounded-2xl group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-yellow-500 font-medium text-sm hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
