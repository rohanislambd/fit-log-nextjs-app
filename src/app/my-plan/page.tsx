"use client";
import WorkoutCard from "@/components/workouts/WorkoutCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const { todaysPlan, savedWorkouts } = useContext(workoutContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const currentWorkouts = activeTab === "today" ? todaysPlan : savedWorkouts;

  const totalMinutes = currentWorkouts.reduce((total:number ,workout:IWorkout) => total + workout.duration, 0);
  const  totalCalories = currentWorkouts.reduce((total:number ,workout:IWorkout)=> total + workout.caloriesBurned ,0)

  return (
    <div className="container mx-auto">
      <div>
        <h2 className="text-[30px] text-white font-bold">MY PLAN</h2>
        <p className="text-[14px] text-[8A92A0] ">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="-300 min-h-[122px] mt-5 rounded-2xl bg-[#13161D]  py-6 px-6 flex items-center space-x-100 ">
        <div>
          <p className=" text-[12px] text-[#8A92A0] ">Exercies</p>
          <p className="font-bold text-[36px] text-[#CCFF00] ">{currentWorkouts.length}</p>
        </div>
        <div>
          <p className=" text-[12px] text-[#8A92A0] ">Minutes</p>
          <p className="font-bold text-[36px] ">{totalMinutes}</p>
        </div>
        <div>
          <p className=" text-[12px] text-[#8A92A0] ">Calories</p>
          <p className="font-bold text-[36px] ">{totalCalories}</p>
        </div>
      </div>

      <div className="  my-8 max-w-[240px] rounded-xl bg-[#151921] p-1 ">
        {/* Tabs */}
        <div className=" flex gap-2  py-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-5  text-sm font-semibold ${
              activeTab === "today"
                ? " btn btn-active rounded-2xl  btn-warning"
                : "text-[#8A92A0]"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-5  text-sm font-semibold ${
              activeTab === "saved"
                ? "btn rounded-2xl px-8 btn-warning"
                : "text-[#8A92A0]"
            }`}
          >
            Saved 
          </button>
        </div>
      </div>

      {/* <div>
                {
                    todaysPlan.length > 0 ? (
                        todaysPlan.map(plan => <WorkoutCard key={plan.id}  workout={plan}></WorkoutCard>)
                    ): <p>no data </p>
                }
            </div> */}
    </div>
  );
};

export default MyPlanPage;
