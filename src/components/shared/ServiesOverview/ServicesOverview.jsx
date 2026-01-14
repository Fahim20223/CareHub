// "use client";
import React from "react";
import { motion } from "framer-motion";

import Services from "@/components/home/Services";
import OverviewHeader from "@/components/Overview/OverviewHeader";
import OverviewButtons from "@/components/Overview/OverviewButtons";

const ServicesOverview = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <OverviewHeader />
        {/* Services Grid */}
        <div className="">
          <Services limit={4} />
        </div>

        {/* View All Services Button */}
        <OverviewButtons />
      </div>
    </section>
  );
};

export default ServicesOverview;
