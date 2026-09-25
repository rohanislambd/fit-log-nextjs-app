"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { MdOutlineToday } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { todaysPlan, setTodayPlan } = useContext(workoutContext);

//   console.log(todaysPlan, setTodayPlan);
  const handleAddtoPlan = () => {
    const alreadyAdded = todaysPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
        toast.error(`${workout.name} is already added to today's plan`, {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });

      return;
      
    }

    setTodayPlan([...todaysPlan, workout]);
    toast.success(`${workout.name} Added to today's plan`, {
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
  };
  return (
    <div>
      <button
        onClick={handleAddtoPlan}
        className="rounded-lg flex items-center  bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
      >
        <MdOutlineToday /> Add to today's plan
      </button>
    </div>
  );
};

export default AddToPlanButton;
