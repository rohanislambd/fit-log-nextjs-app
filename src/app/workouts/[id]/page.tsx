import WorkoutDetails from "@/components/workouts/WorkoutDetails";
import { getAllWorkouts } from "@/lib/dataFatch";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
interface IWorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsProps) => {
  const { id } = await params;

  const workouts = await getAllWorkouts();

  const workout = workouts.find(
    (workout: IWorkout) => workout.id === Number(id),
  );
  console.log(workout);

  return (
    // <div className="flex">
    //   \{/* image div */}
    //   <div>
    //     <Image
    //       src={workout.image}
    //       width={400}
    //       height={300}
    //       alt="workout image"
    //     ></Image>
    //   </div>
    //   {/* text div */}
    //   <div>
    //     <h2> {workout.name} </h2>
    //     <p>{workout.description}</p>
    //     <div className="pt-5 space-x-1">
    //       <div className="badge rounded-2xl  badge-outline bg-[#C2F800] text-black font-bold py-4 px-3">
    //         {workout.difficulty}
    //       </div>
    //       <div className="badge rounded-2xl badge-outline bg-[#C2F800] text-black font-bold  py-4 px-3">
    //         {workout.muscleGroups}

    //       </div>

    //       <div>
             
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <WorkoutDetails workout={workout}></WorkoutDetails>
  );
};

export default WorkoutDetailsPage;
