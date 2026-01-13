"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 2",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
      text: "Care.IO has been a blessing for our family. The caregivers are professional, caring, and treat my children like their own. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Family Caregiver",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
      text: "The elderly care service exceeded our expectations. My mother receives compassionate care every day. Thank you Care.IO!",
    },
    {
      name: "Emily Davis",
      role: "Healthcare Professional",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      rating: 5,
      text: "Outstanding medical home care services. The nurses are skilled and caring. They made my recovery process so much easier.",
    },
    {
      name: "David Martinez",
      role: "Senior Citizen",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
      text: "I feel safe and well-cared for. The caregivers are respectful and always available when I need help. Excellent service!",
    },
    {
      name: "Jennifer Lee",
      role: "Working Parent",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      rating: 5,
      text: "As a working mom, Care.IO gives me peace of mind. My kids love their caregivers and I can focus on work knowing they're in good hands.",
    },
    {
      name: "Robert Thompson",
      role: "Son of Elderly Parent",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
      text: "The level of care my father receives is exceptional. Professional, compassionate, and reliable. I couldn't ask for better service.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-emerald-900/30 text-blue-600 dark:text-emerald-400 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-emerald-400 dark:to-teal-400">
              Say About Us
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Real stories from real people who have experienced our exceptional
            care services. Their trust and satisfaction drive us to excel every
            day.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 relative overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                <Quote className="w-20 h-20 text-purple-500 dark:text-emerald-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100 dark:ring-emerald-900/50"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Happy Families" },
            { number: "50+", label: "Expert Caregivers" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 dark:from-emerald-500 dark:to-teal-600 rounded-3xl p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Experience Quality Care?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied families who trust Care.IO for their
            loved ones' care needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white text-purple-600 dark:text-emerald-600 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
