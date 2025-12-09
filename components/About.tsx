"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import type { Variants } from "framer-motion";

const stats = [
  { value: "20+", label: "Certifications" },
  { value: "6,000+", label: "Completed Jobs" },
  { value: "24/7", label: "Emergency Availability" },
];

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#050505] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT: IMAGE SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden h-[500px] w-full group">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Electrician working"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient (Optional for depth) */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Yellow Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-6 right-6 md:-right-6 md:bottom-10 bg-yellow-400 text-black p-8 rounded-2xl shadow-xl max-w-[260px]"
            >
              <Award size={32} className="mb-4 stroke-[1.5]" />
              <h3 className="text-4xl font-bold mb-1">15 YEARS</h3>
              <p className="text-sm font-medium leading-tight opacity-80">
                Of experience in electrical work
              </p>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: TEXT CONTENT --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-[2px] bg-yellow-400"></span>
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold uppercase leading-tight"
            >
              Proven Expertise <br /> You Can Trust
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-400 text-lg"
            >
              <p>
                With over a decade and a half of hands-on experience, we&apos;ve
                mastered the art of delivering top-quality electrical services
                that consistently exceed expectations.
              </p>
              <p>
                From complex troubleshooting and minor repairs to comprehensive
                installations, we handle it all with precision and care.
              </p>
            </motion.div>

            {/* Link */}
            <motion.a
              variants={itemVariants}
              href="#"
              className="inline-flex items-center gap-2 text-yellow-400 font-medium mt-2 hover:gap-3 transition-all"
            >
              Learn more
              <ArrowRight size={18} />
            </motion.a>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="w-full h-px bg-gray-800 my-4"
            />

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <h4 className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
