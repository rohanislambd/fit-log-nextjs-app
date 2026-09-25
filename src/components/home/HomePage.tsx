import { getAllWorkouts } from "@/lib/dataFatch";
import { IWorkout } from "@/types/workout.type";
import React from "react";
import WorkoutCard from "../workouts/WorkoutCard";

const HomePage = async () => {
  const workouts = await getAllWorkouts();
//   console.log(workouts);
  return (
    <div id="workouts" className="px-3">
      <div>
        <h2 className="text-3xl font-bold">THE LIBRARY</h2>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                workouts.map((workout:IWorkout) => <WorkoutCard key={workout.id} workout={workout}/>) 
            }
      </div>
    </div>
  );
};

export default HomePage;
