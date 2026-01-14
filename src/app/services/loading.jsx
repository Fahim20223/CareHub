import ServicesSkeleton from "@/components/skeleton/ServicesSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-3">
      {[...Array(9)].map((_, index) => (
        <ServicesSkeleton key={index}></ServicesSkeleton>
      ))}
    </div>
  );
};

export default loading;
