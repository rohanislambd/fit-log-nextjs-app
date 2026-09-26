import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workout.type";
import AddToPlanButton from "./AddToPlanButton";
import SaveForLaterButton from "./SaveForLaterButton";

type WorkoutDetailsProps = {
  workout: IWorkout;
};

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  return (
    <section className="min-h-screen bg-[#0b0d0f] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-lime-400"
        >
          ← Back to workouts
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-[#25282b] bg-[#111417] shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[350px] bg-[#181b1e] lg:min-h-[600px]">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Difficulty */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-lime-400 px-4 py-1.5 text-xs font-bold text-black">
                  {workout.difficulty}
                </span>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Category */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
                Strength Training
              </p>

              {/* Title */}
              <h1 className="text-3xl font-black uppercase leading-tight sm:text-4xl">
                {workout.name}
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-gray-400">
                {workout.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-5 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-md bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              
             <div className="my-3 h-px " />

              {/* Workout Information */}
              <div className="overflow-hidden rounded-xl border border-[#242936] bg-[#151921]">
                {/* Equipment */}
                <div className="flex items-center justify-between border-b border-[#242936] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Equipment
                  </p>
                  <p className="text-xs font-medium text-white">
                    {workout.equipment}
                  </p>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-b border-[#242936] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Difficulty
                  </p>
                  <p className="text-xs font-medium text-white">
                    {workout.difficulty}
                  </p>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between border-b border-[#242936] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Sets
                  </p>
                  <p className="text-xs font-medium text-white">
                    {workout.sets}
                  </p>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between border-b border-[#242936] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Reps
                  </p>
                  <p className="text-xs font-medium text-white">
                    {workout.reps}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between border-b border-[#242936] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Duration
                  </p>
                  <p className="text-xs font-medium text-white">
                    {workout.duration} min
                  </p>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between border-b border-[#242936] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Calories
                  </p>
                  <p className="text-xs font-medium text-white">
                    {workout.caloriesBurned} kcal
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase text-gray-500">
                    Rating
                  </p>

                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-xs font-medium text-white">
                      {workout.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-8">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">
                  Instructions
                </h2>

                <ol className="space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-gray-400"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AddToPlanButton workout={workout}></AddToPlanButton>

                <SaveForLaterButton workout={workout}></SaveForLaterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
