import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const MyPlanCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <div className="mt-4">
      <div className="flex h-43 p-4 rounded-2xl bg-[#13161D]">
        <div>
          <Image
            src={workout.image}
            alt="workout"
            width={144}
            height={80}
            className="rounded-2xl "
          ></Image>
        </div>

        <div className="pl-4 flex flex-col justify-center space-y-3 ">
          <h2 className="text-2xl font-bold">{workout.name}</h2>
          <p className=" text-[12px] font-semibold text-[#8A92A0] ">
            {workout.equipment}
          </p>

          <div className="flex space-x-5 text-[12px] text-[#9CA3AF] ">
            <p className="flex gap-2 items-center">
              <FiClock className="text-[#CCFF00]" /> {workout.duration} min
            </p>
            <p className="flex gap-2 items-center">
              <FaFire className="text-[#CCFF00]" /> {workout.caloriesBurned}{" "}
              kcal
            </p>
            <p className="flex gap-2 items-center">
              <CiStar className="text-[#CCFF00]" /> {workout.rating}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <button className="btn  btn-outline rounded-3xl  ">
            View Details
          </button>

          <button className="btn rounded-3xl text-black bg-[#CCFF00]">
            {" "}
            <MdDone /> Mark as Done
          </button>

          <button>
            <RxCross1 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;
