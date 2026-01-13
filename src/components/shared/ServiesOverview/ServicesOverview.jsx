"use client";
import React from "react";
import { motion } from "framer-motion";
import { Baby, Heart, Stethoscope, ArrowRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Baby Care",
      subtitle: "Providing Good Qualities",
      highlight: "For Your Loving Kids",
      description:
        "Professional childcare services with trained staff, safe environment, and engaging activities for your children's development.",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
      darkColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      features: [
        "Safe Environment",
        "Trained Staff",
        "Educational Activities",
        "Healthy Meals",
      ],
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Elderly Care",
      subtitle: "We Are Always Where",
      highlight: "Senior People Need Help",
      description:
        "Compassionate elderly care with experienced caregivers providing support, companionship, and medical assistance at home.",
      color: "bg-gradient-to-br from-teal-400 to-blue-500",
      darkColor: "bg-gradient-to-br from-green-500 to-emerald-600",
      features: [
        "Home Visit Care",
        "Medical Support",
        "Companionship",
        "24/7 Availability",
      ],
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "Medical Care",
      subtitle: "Professional Healthcare",
      highlight: "At Your Home",
      description:
        "Expert medical care services with certified nurses and healthcare professionals for treatment and recovery at home.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-500",
      darkColor: "bg-gradient-to-br from-teal-500 to-green-600",
      features: [
        "Medical Experts",
        "Home Treatment",
        "Emergency Care",
        "Health Monitoring",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
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
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-emerald-400 dark:to-teal-400">
              For Your Loving Family
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            We offer comprehensive care services tailored to meet the unique
            needs of your family members at every stage of life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-950 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              {/* Header with Icon */}
              <div
                className={`${service.color} dark:${service.darkColor} p-8 text-white relative overflow-hidden`}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 relative z-10"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 relative z-10">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm relative z-10">
                  {service.subtitle}
                </p>
                <p className="text-xl font-bold mt-1 relative z-10">
                  {service.highlight}
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-emerald-500 dark:to-teal-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 dark:hover:from-emerald-500 dark:hover:to-teal-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-emerald-500 dark:to-teal-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
