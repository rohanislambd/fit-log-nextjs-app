const Loading = () => {
  return (
    <div>
      {/* Banner Skeleton */}
      <section className="container mx-auto mt-5 px-6">
        <div className="flex min-h-[365px] items-center justify-between rounded-xl bg-[#13161D] px-10">
          {/* Left content */}
          <div className="space-y-5">
            {/* Small title */}
            <div className="h-4 w-32 rounded bg-gray-700"></div>

            {/* Heading */}
            <div className="space-y-3">
              <div className="h-10 w-[450px] rounded bg-gray-700"></div>
              <div className="h-10 w-[380px] rounded bg-gray-700"></div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-3 w-[400px] rounded bg-gray-700"></div>
              <div className="h-3 w-[350px] rounded bg-gray-700"></div>
            </div>

            {/* Button */}
            <div className="h-10 w-36 rounded bg-gray-700"></div>
          </div>

          {/* Image skeleton */}
          <div className="h-52 w-52 rounded-full bg-gray-700"></div>
        </div>
      </section>

      {/* Workout Cards Skeleton */}
      <div className="container mx-auto mt-5 px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="card bg-base-100 shadow-sm">
              {/* Image Skeleton */}
              <div className="skeleton h-65 w-full rounded-none"></div>

              {/* Content */}
              <div className="space-y-5 px-6 py-6 pt-3">
                {/* Badges */}
                <div className="flex gap-1 pt-5">
                  <div className="skeleton h-5 w-14 rounded-full"></div>
                  <div className="skeleton h-5 w-14 rounded-full"></div>
                </div>

                {/* Title + Equipment */}
                <div>
                  <div className="skeleton mb-2 h-6 w-3/4"></div>

                  <div className="skeleton h-3 w-1/2 border-b border-[#9ca3af2a] pb-3"></div>
                </div>

                {/* Workout Info */}
                <div className="flex gap-5">
                  <div className="skeleton h-4 w-16"></div>
                  <div className="skeleton h-4 w-16"></div>
                  <div className="skeleton h-4 w-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;