import React from "react";
import { Users, Heart, Star, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Families",
      numberLabel: "01",
    },
    {
      icon: Heart,
      number: "500+",
      label: "Verified Caregivers",
      numberLabel: "02",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      numberLabel: "03",
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      numberLabel: "04",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#0a1628] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            OUR ACHIEVEMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Success Story
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thousands of families trust our service and we are proud to be a
            reliable care provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-[#1a2942] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {/* Number Label */}
                <div className="absolute top-6 right-6 text-4xl font-bold text-emerald-500/10 dark:text-emerald-500/20">
                  {stat.numberLabel}
                </div>

                <div className="relative">
                  <div className="bg-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
