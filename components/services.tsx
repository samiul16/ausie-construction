/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Electrical Repairs",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lighting Installation",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Wiring & Rewiring",
    image:
      "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Panel Upgrades",
    image:
      "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Surge Protection",
    image:
      "https://images.unsplash.com/photo-1592833075253-1574b6df5295?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Emergency Services",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
];

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          {/* Left Side: Title */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-yellow-400"></span>
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
                Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              What We Do
            </h2>
          </div>

          {/* Right Side: Description */}
          <p className="text-gray-500 max-w-md leading-relaxed text-sm md:text-base">
            Your trusted partner for all electrical needs – reliable, skilled,
            and timely solutions you can count on.
          </p>
        </motion.div>

        {/* --- GRID SECTION --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* --- BOTTOM BUTTON --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all"
          >
            All Services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub Component: Service Card ---
const ServiceCard = ({
  title,
  image,
  variants,
}: {
  title: string;
  image: string;
  variants: any;
}) => {
  return (
    <motion.div
      variants={variants}
      className="group relative h-72 w-full overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
        <h3 className="text-white text-xl font-bold tracking-wide">{title}</h3>

        {/* Arrow Icon */}
        <div className="text-yellow-400 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
