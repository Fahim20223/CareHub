import Services from "@/components/home/Services";
import React from "react";
export const metadata = {
  title: "All Services",
  description: "Services we are providing",
};

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto w-[95%] mb-9 mt-9">
      <h2 className="text-center text-4xl font-bold mb-10">Our Services</h2>
      <Services />
    </div>
  );
};

export default ServicesPage;
