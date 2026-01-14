"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

const OverviewButtons = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 dark:from-emerald-500 dark:to-teal-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
        >
          View All Services
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OverviewButtons;
