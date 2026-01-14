"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import React from "react";

const OverviewHeader = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-emerald-900/30 text-purple-600 dark:text-emerald-400 text-sm font-semibold mb-4">
          <Heart className="w-4 h-4" />
          Service We Provide
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Providing Good Qualities
          <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500 dark:from-emerald-400 dark:to-teal-400">
            For Your Loving Family
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
          We offer comprehensive care services tailored to meet the unique needs
          of your family members at every stage of life.
        </p>
      </motion.div>
    </div>
  );
};

export default OverviewHeader;
