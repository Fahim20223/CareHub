"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      type: "baby",
      badge: "BEST CHILD CARE",
      badgeIcon: "🎨",
      title: "We Care of",
      highlight: "Children",
      subtitle: "start with us!",
      description:
        "There are many variations of passages Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image:
        "https://images.unsplash.com/photo-1587616211892-e2e7f862cd7e?w=1920&q=80",
      circleImage:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      gradient: "from-purple-500 to-pink-500",
      darkGradient: "from-emerald-500 to-teal-600",
      badgeColor: "bg-purple-500",
      darkBadgeColor: "bg-emerald-500",
      accentColor: "text-purple-600",
      darkAccentColor: "text-emerald-400",
      buttonPrimary: "bg-pink-500 hover:bg-pink-600",
      darkButtonPrimary: "bg-emerald-500 hover:bg-emerald-600",
      buttonSecondary: "bg-teal-500 hover:bg-teal-600",
      darkButtonSecondary: "bg-teal-600 hover:bg-teal-700",
      decorIcon: "🚗",
      smallText: "Learn Play",
    },
    {
      id: 2,
      type: "elderly",
      badge: "BEST ELDERLY CARE",
      badgeIcon: "😊",
      title: "Live In Care &",
      highlight: "Your Family",
      subtitle: "Will Love",
      description:
        "There are many variations of passages Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image:
        "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1920&q=80",
      circleImage:
        "https://images.unsplash.com/photo-1587616211892-e2e7f862cd7e?w=800&q=80",
      gradient: "from-teal-400 to-blue-500",
      darkGradient: "from-green-500 to-emerald-700",
      badgeColor: "bg-red-400",
      darkBadgeColor: "bg-green-500",
      accentColor: "text-teal-600",
      darkAccentColor: "text-green-400",
      buttonPrimary: "bg-red-400 hover:bg-red-500",
      darkButtonPrimary: "bg-green-500 hover:bg-green-600",
      buttonSecondary: "bg-teal-500 hover:bg-teal-600",
      darkButtonSecondary: "bg-emerald-600 hover:bg-emerald-700",
      decorIcon: "🏡",
      smallText: "Find Home",
    },
    {
      id: 3,
      type: "sick",
      badge: "MEDICAL HOME CARE",
      badgeIcon: "⚕️",
      title: "Professional",
      highlight: "Healthcare",
      subtitle: "at Your Home",
      description:
        "There are many variations of passages Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80",
      circleImage:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
      gradient: "from-green-400 to-emerald-600",
      darkGradient: "from-teal-600 to-green-800",
      badgeColor: "bg-blue-500",
      darkBadgeColor: "bg-teal-500",
      accentColor: "text-green-600",
      darkAccentColor: "text-teal-400",
      buttonPrimary: "bg-blue-500 hover:bg-blue-600",
      darkButtonPrimary: "bg-teal-500 hover:bg-teal-600",
      buttonSecondary: "bg-emerald-500 hover:bg-emerald-600",
      darkButtonSecondary: "bg-green-600 hover:bg-green-700",
      decorIcon: "🏥",
      smallText: "Book Care",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index) => {
    setAutoPlay(false);
    setCurrentSlide(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-white dark:bg-gray-950 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "linear" }}
              src={currentSlideData.image}
              alt={currentSlideData.type}
              className="w-full h-full object-cover"
            />
            {/* Light Mode Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:hidden" />
            {/* Dark Mode Overlay */}
            <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/85 to-gray-900/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
              {/* Left Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="space-y-6 lg:space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentSlideData.badgeColor} dark:${currentSlideData.darkBadgeColor} text-white shadow-lg`}
                >
                  <span className="text-lg">{currentSlideData.badgeIcon}</span>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
                    {currentSlideData.badge}
                  </span>
                </motion.div>

                {/* Title */}
                <div className="space-y-2">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
                  >
                    {currentSlideData.title}
                  </motion.h1>

                  <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight ${currentSlideData.accentColor} dark:${currentSlideData.darkAccentColor}`}
                    style={{
                      textShadow: "2px 2px 0px rgba(255,255,255,0.3)",
                      WebkitTextStroke: "2px currentColor",
                      paintOrder: "stroke fill",
                    }}
                  >
                    {currentSlideData.highlight}
                  </motion.h1>

                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
                  >
                    {currentSlideData.subtitle}
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-full ${currentSlideData.buttonPrimary} dark:${currentSlideData.darkButtonPrimary} text-white font-semibold text-base sm:text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    About More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-full ${currentSlideData.buttonSecondary} dark:${currentSlideData.darkButtonSecondary} text-white font-semibold text-base sm:text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    Learn More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Content - Circular Image Design */}
              <motion.div
                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="hidden lg:flex justify-center items-center relative"
              >
                <div className="relative w-full max-w-lg aspect-square">
                  {/* Large Circle Background */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-emerald-500/30"
                  />

                  {/* Main Circular Image */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-800">
                      <img
                        src={currentSlideData.circleImage}
                        alt="Care service"
                        className="w-full h-full object-cover"
                      />
                      {/* Image Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} dark:${currentSlideData.darkGradient} opacity-20`}
                      />
                    </div>
                  </motion.div>

                  {/* Floating Decorative Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      scale: { delay: 1.6, type: "spring" },
                      rotate: { delay: 1.6, duration: 0.6 },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      },
                    }}
                    className="absolute -top-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-12"
                  >
                    <span className="text-5xl">
                      {currentSlideData.decorIcon}
                    </span>
                  </motion.div>

                  {/* Small Text Badge */}
                  <motion.div
                    initial={{ scale: 0, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 1.8, type: "spring" }}
                    className={`absolute top-8 right-12 ${currentSlideData.accentColor} dark:${currentSlideData.darkAccentColor} font-bold text-lg tracking-wider`}
                  >
                    {currentSlideData.smallText}
                  </motion.div>

                  {/* Decorative Circles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        scale: { delay: 1.4 + i * 0.2 },
                        opacity: {
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: 2 + i * 0.5,
                        },
                      }}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 ${currentSlideData.accentColor} dark:${currentSlideData.darkAccentColor} opacity-30`}
                      style={{
                        width: `${60 + i * 15}%`,
                        height: `${60 + i * 15}%`,
                        borderColor: "currentColor",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-12 h-3 bg-gray-800 dark:bg-emerald-400"
                : "w-3 h-3 bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Find Nearest */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-xl flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Find Nearest You
          </span>
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerSlider;
