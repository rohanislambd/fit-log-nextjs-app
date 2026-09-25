const Loading = () => {
  return (
    <div className="min-h-screen bg-[#090c0d] text-white">
      <div className="mx-auto max-w-[1100px] px-4 py-4">
        {/* Back button */}
        <div className="mb-4 h-4 w-28 animate-pulse rounded bg-zinc-800" />

        {/* Main Card */}
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#101415]">
          <div className="grid md:grid-cols-2">
            
            {/* Image Skeleton */}
            <div className="relative h-[500px] md:h-[540px]">
              <div className="h-full w-full animate-pulse bg-zinc-800" />

              {/* Badge */}
              <div className="absolute left-4 top-4 h-5 w-20 animate-pulse rounded-full bg-zinc-700" />
            </div>

            {/* Content Skeleton */}
            <div className="p-6 md:p-7">
              
              {/* Category */}
              <div className="mb-3 h-3 w-28 animate-pulse rounded bg-zinc-700" />

              {/* Title */}
              <div className="mb-4 h-8 w-40 animate-pulse rounded bg-zinc-700" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-zinc-800" />
                <div className="h-3 w-[90%] animate-pulse rounded bg-zinc-800" />
                <div className="h-3 w-[65%] animate-pulse rounded bg-zinc-800" />
              </div>

              {/* Tags */}
              <div className="mt-5 flex gap-2">
                <div className="h-6 w-12 animate-pulse rounded bg-zinc-700" />
                <div className="h-6 w-14 animate-pulse rounded bg-zinc-700" />
              </div>

              {/* Divider */}
              <div className="my-5 h-px w-full bg-zinc-800" />

              {/* Workout Info */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index}>
                    <div className="mb-2 h-2.5 w-20 animate-pulse rounded bg-zinc-800" />
                    <div className="h-3 w-24 animate-pulse rounded bg-zinc-700" />
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-2">
                <div className="h-4 w-4 animate-pulse rounded bg-zinc-700" />
                <div className="h-3 w-8 animate-pulse rounded bg-zinc-700" />
                <div className="h-3 w-24 animate-pulse rounded bg-zinc-800" />
              </div>

              {/* Instructions */}
              <div className="mt-7">
                <div className="mb-4 h-4 w-24 animate-pulse rounded bg-zinc-700" />

                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-4 w-4 shrink-0 animate-pulse rounded-full bg-zinc-700" />
                      <div className="h-3 flex-1 animate-pulse rounded bg-zinc-800" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex gap-3">
                <div className="h-9 w-32 animate-pulse rounded-md bg-zinc-700" />
                <div className="h-9 w-28 animate-pulse rounded-md bg-zinc-800" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;