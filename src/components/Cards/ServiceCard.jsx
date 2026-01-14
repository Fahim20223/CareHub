"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, index }) => {
  // Example progress (for demo, calculate if needed)
  const progressPercent = service.progress || 65; // 0-100

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group rounded-2xl bg-white dark:bg-green-950/20 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full h-52 md:h-56">
        <Image
          width={500}
          height={500}
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        {/* Optional Date Badge */}
        {service.date && (
          <div className="absolute top-3 right-3 bg-teal-400 text-white px-3 py-1 rounded-xl text-xs font-semibold">
            {service.date}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
          {service.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {service.shortDescription}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-green-800/40 h-2 rounded-full mb-2">
          <div
            className="h-2 rounded-full bg-teal-400 dark:bg-green-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-300 mb-4">
          <span>${service.raised?.toLocaleString() || 24350} Raised</span>
          <span>${service.goal?.toLocaleString() || 35000} Goal</span>
        </div>

        {/* Read More / Donate Button */}
        <Link href={`/services/${service._id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-full bg-pink-500 dark:bg-green-500 text-white font-semibold text-sm shadow hover:shadow-lg transition-all duration-300"
          >
            Read more <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
