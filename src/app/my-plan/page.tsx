"use client";
import EmtyDataCard from "@/components/myplan/EmtyDataCard";
import MyPlanCard from "@/components/myplan/MyPlanCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import React, { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

const MyPlanPage = () => {
  const { todaysPlan, setTodayPlan, savedWorkouts, setSavedWorkouts } =
    useContext(workoutContext);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const currentWorkouts = activeTab === "today" ? todaysPlan : savedWorkouts;

  const totalMinutes = currentWorkouts.reduce(
    (total: number, workout: IWorkout) => total + workout.duration,
    0,
  );
  const totalCalories = currentWorkouts.reduce(
    (total: number, workout: IWorkout) => total + workout.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (activeTab === "today") {
      setTodayPlan(todaysPlan.filter((workout: IWorkout) => workout.id !== id));
      toast.success("Workout removed from today", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setSavedWorkouts(
        savedWorkouts.filter((workout: IWorkout) => workout.id !== id),
      );

      toast.success("Workout removed from saved", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
       <div className="container mx-auto ">
      <div>
        <h2 className="text-[30px] text-white font-bold">MY PLAN</h2>
        <p className="text-[14px] text-[8A92A0] ">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="-300 min-h-[122px] mt-5 rounded-2xl bg-[#13161D]  py-6 px-6 flex items-center space-x-24  md:space-x-60  xl:space-x-100 ">
        <div>
          <p className=" text-[12px] text-[#8A92A0] ">Exercies</p>
          <p className="font-bold text-[36px] text-[#CCFF00] ">
            {currentWorkouts.length}
          </p>
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

      {/* Tabs */}
      <div className="  my-8 max-w-[240px] rounded-xl bg-[#151921] p-1 ">
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

      <div>
        {currentWorkouts.length > 0 ? (
          currentWorkouts.map((workout: IWorkout) => (
            <MyPlanCard
              key={workout.id}
              isTodayPlan={activeTab === "today"}
              workout={workout}
              handleRemove={handleRemove}
            ></MyPlanCard>
          ))
        ) : (
          <EmtyDataCard></EmtyDataCard>
        )}
      </div>
         </div>
    </div>
  );
};

export default MyPlanPage;
