const ServiceDetailsLoading = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Skeleton */}
        <div className="w-full h-[350px] rounded-2xl bg-gray-300 dark:bg-green-900/40" />

        {/* Content Skeleton */}
        <div>
          <div className="h-8 w-3/4 rounded bg-gray-300 dark:bg-green-900/40 mb-4" />
          <div className="h-4 w-full rounded bg-gray-300 dark:bg-green-900/40 mb-2" />
          <div className="h-4 w-5/6 rounded bg-gray-300 dark:bg-green-900/40 mb-6" />

          <div className="h-6 w-40 rounded bg-gray-300 dark:bg-green-900/40 mb-6" />

          <div className="h-12 w-44 rounded-full bg-gray-300 dark:bg-green-900/40" />
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="mt-12">
        <div className="h-6 w-60 rounded bg-gray-300 dark:bg-green-900/40 mb-4" />
        <div className="space-y-3 max-w-4xl">
          <div className="h-4 rounded bg-gray-300 dark:bg-green-900/40" />
          <div className="h-4 rounded bg-gray-300 dark:bg-green-900/40" />
          <div className="h-4 w-5/6 rounded bg-gray-300 dark:bg-green-900/40" />
        </div>
      </div>

      {/* Features Skeleton */}
      <div className="mt-10">
        <div className="h-6 w-52 rounded bg-gray-300 dark:bg-green-900/40 mb-6" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-xl bg-gray-300 dark:bg-green-900/40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsLoading;
