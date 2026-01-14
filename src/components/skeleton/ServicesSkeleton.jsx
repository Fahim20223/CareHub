"use client";

const ServicesSkeleton = ({ index }) => {
  return (
    <div
      className="animate-pulse group rounded-2xl bg-white dark:bg-green-950/20 shadow-md overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Skeleton */}
      <div className="w-full h-52 md:h-56 bg-gray-200 dark:bg-green-900" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-200 dark:bg-green-900 rounded" />

        {/* Short Description */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 dark:bg-green-900 rounded" />
          <div className="h-3 w-5/6 bg-gray-200 dark:bg-green-900 rounded" />
        </div>

        {/* Progress Bar Skeleton */}
        <div className="w-full bg-gray-200 dark:bg-green-800/40 h-2 rounded-full">
          <div className="h-2 rounded-full bg-gray-300 dark:bg-green-700 w-2/3" />
        </div>

        {/* Raised / Goal */}
        <div className="flex justify-between text-xs text-gray-400 dark:text-green-300 font-medium">
          <div className="h-3 w-1/4 bg-gray-200 dark:bg-green-900 rounded" />
          <div className="h-3 w-1/4 bg-gray-200 dark:bg-green-900 rounded" />
        </div>

        {/* Button Skeleton */}
        <div className="h-9 w-full bg-gray-200 dark:bg-green-900 rounded-full mt-2" />
      </div>
    </div>
  );
};

export default ServicesSkeleton;
