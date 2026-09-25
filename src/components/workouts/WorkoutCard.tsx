import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

interface workoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: workoutCardProps) => {
  return (
    <div>
      <div>
        <div className="card bg-base-100  shadow-sm ">
          <figure>
            <Image
              src={workout.image}
              width={400}
              height={150}
              alt="workoutImage"
              className="w-full h-65 object-cover"
            ></Image>
          </figure>
          <div className="pt-3 px-6 py-6 space-y-5">
            <div className="pt-5 space-x-1">
              <div className="badge badge-outline bg-[#C2F800] text-black font-bold">
                {workout.muscleGroups[0]}
              </div>

              {workout.muscleGroups[1] && (
                <div className="badge badge-outline bg-[#C2F800] text-black font-bold">
                  {workout.muscleGroups[1]}
                </div>
              )}
            </div>
            <div>
              <h2 className="card-title text-[20px] font-bold">
                {workout.name}
              </h2>
              <p className="text-[12px] text-[#9CA3AF] border-b border-[#9ca3af2a]  pb-3">
                {workout.equipment}
              </p>
            </div>
            <div className="flex space-x-5 text-[12px] text-[#9CA3AF] ">
              <p className="flex gap-2 items-center">
                {" "}
                <FiClock /> {workout.duration} min
              </p>
              <p className="flex gap-2 items-center">
                <FaFire /> {workout.caloriesBurned} kcal
              </p>
              <p className="flex gap-2 items-center">
                <CiStar /> {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
