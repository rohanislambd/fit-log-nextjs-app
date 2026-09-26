import { getAllWorkouts } from "@/lib/dataFatch";
import { IWorkout } from "@/types/workout.type";
import React from "react";
import WorkoutCard from "../workouts/WorkoutCard";
import Link from "next/link";

const HomePage = async () => {
  const workouts = await getAllWorkouts();
//   console.log(workouts);
  return (
    <div id="workouts" className="px-3 md:px-0">
      <div>
        <h2 className="text-3xl font-bold">THE LIBRARY</h2>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-10">
        {workouts.map((workout: IWorkout) => (
          <Link key={workout.id} href={`/workouts/${workout.id}`}>
            <WorkoutCard workout={workout} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
