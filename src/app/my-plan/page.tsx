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

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }
    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }
    return b.rating - a.rating;
  });

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
        <div className="mx-3 md:mx-0">
          <h2 className="text-[30px] text-white font-bold mt-10">MY PLAN</h2>
          <p className="text-[14px] text-[8A92A0] ">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className=" mx-3 md:mx-0 min-h-30 mt-5 rounded-2xl bg-[#13161D]  py-6 px-6 flex items-center space-x-20  md:space-x-60  xl:space-x-100 ">
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

        <div className="flex items-center justify-between ml-3 md:mx-0">
          {/* Tabs */}

          <div className="my-8 w-full max-w-[340px] rounded-xl bg-[#151921] p-1">
            <div className="flex w-full gap-1">
              <button
                onClick={() => setActiveTab("today")}
                className={`flex-1 rounded-2xl px-3 py-2 text-xs sm:px-5 sm:text-sm font-semibold ${
                  activeTab === "today"
                    ? "btn btn-active btn-warning"
                    : "text-[#8A92A0]"
                }`}
              >
                Today's Plan
              </button>

              <button
                onClick={() => setActiveTab("saved")}
                className={`flex-1 rounded-2xl px-3 py-2 text-xs sm:px-8 sm:text-sm font-semibold ${
                  activeTab === "saved" ? "btn btn-warning" : "text-[#8A92A0]"
                }`}
              >
                Saved
              </button>
            </div>
          </div>
          {/* sort */}
          <div className="flex flex-col md:flex-row w-70  space-x-4 items-center">
            <h2 className="  md:text-2xl text-[#8A92A0] ">Sort By</h2>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="select w-[50%] rounded-2xl"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mx-3 md:mx-0">
          {sortedWorkouts.length > 0 ? (
            sortedWorkouts.map((workout: IWorkout) => (
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
