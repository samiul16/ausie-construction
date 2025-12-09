"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const questions = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire metropolitan area and surrounding suburbs. If you are unsure if we cover your location, please give us a call.",
  },
  {
    question: "Do you handle small jobs?",
    answer:
      "Absolutely. No job is too small for us, from changing a difficult lightbulb to fixing a single faulty outlet.",
  },
  {
    question: "How soon can you arrive?",
    answer:
      "For emergencies, we aim to arrive within 60 minutes. For standard appointments, we can usually schedule you within 24-48 hours.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we offer free, no-obligation estimates for all major installation and repair projects.",
  },
];

const tickerItems = [
  "ELECTRIA",
  "FAST",
  "RELIABLE",
  "SAFE",
  "ELECTRIA",
  "FAST",
  "RELIABLE",
  "SAFE",
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white font-sans overflow-hidden">
      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: FAQ ACCORDION */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-8 h-[2px] bg-yellow-400"></span>
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
                FAQ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F9FAFB] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900">
                      {q.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                          {q.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition-colors"
            >
              More questions <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden"
          >
            <img
              // Placeholder for the "Switch Lamp Figure" image
              src="https://images.unsplash.com/photo-1473594659356-a404044aa2c2?q=80&w=2000&auto=format&fit=crop"
              alt="Creative Electrical Art"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* --- INFINITE MARQUEE --- */}
      <div className="w-full bg-yellow-400 py-4 overflow-hidden flex border-y border-yellow-500">
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
                <span className="text-black font-bold text-lg tracking-widest uppercase">
                  {item}
                </span>
                <span className="ml-12 w-2 h-2 bg-black rounded-full" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
