"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Clock, Award, Users, ArrowRight } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "01",
      title: "Dedicated Team",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.",
      color: "from-pink-400 to-rose-400",
      darkColor: "from-emerald-400 to-teal-500",
      bgLight: "bg-pink-50",
      bgDark: "bg-emerald-950/30",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "02",
      title: "Trusted Institute",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.",
      color: "from-cyan-400 to-blue-400",
      darkColor: "from-teal-400 to-emerald-500",
      bgLight: "bg-cyan-50",
      bgDark: "bg-teal-950/30",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "03",
      title: "Affordable Price",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.",
      color: "from-orange-400 to-amber-400",
      darkColor: "from-green-400 to-emerald-500",
      bgLight: "bg-orange-50",
      bgDark: "bg-green-950/30",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "04",
      title: "Emergency Support",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis excepturi words of voluptatum deleniti atque.",
      color: "from-purple-400 to-violet-400",
      darkColor: "from-emerald-400 to-green-500",
      bgLight: "bg-purple-50",
      bgDark: "bg-emerald-950/30",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Features Grid Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className={`${feature.bgLight} dark:${feature.bgDark} rounded-3xl p-6 lg:p-8 relative overflow-hidden group cursor-pointer transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-emerald-500/30 hover:shadow-xl`}
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`text-4xl font-bold bg-gradient-to-r ${feature.color} dark:${feature.darkColor} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}
                  >
                    {feature.number}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} dark:${feature.darkColor} flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-2xl transition-all`}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=800&q=80"
                    alt="Elderly care"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Small Images */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80"
                    alt="Baby care"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&q=80"
                    alt="Medical care"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Stats Card */}
              {/* <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-teal-600 rounded-3xl p-6 shadow-2xl"
              >
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-1">30+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-emerald-900/30 text-pink-600 dark:text-emerald-400 text-sm font-semibold mb-4">
                  <Heart className="w-4 h-4" />
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  We Are The Best And
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-400 dark:to-teal-400">
                    Expert For Kids & Senior Care
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour randomised words which don't look
                  even. Many desktop publishing packages and web page editors
                  now use as their default model text.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      Our Experts Nurse
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Take a look at our up of the round shows
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      24/7 Live Support
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Take a look at our up of the round shows
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 dark:from-emerald-500 dark:to-teal-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Discover More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
