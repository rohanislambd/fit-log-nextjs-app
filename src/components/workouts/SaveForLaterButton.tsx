"use client"
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import React, {  useContext } from "react";
import { FaSave } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(workoutContext);

  const handSaveForLater = () => {
    const alreadyAdded = savedWorkouts.some((item) => item.id === workout.id) 
     if (alreadyAdded) {
        toast.error(`${workout.name} is already added to Save for later`, {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });

      return;
      
    }

    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success(`${workout.name} added to Save for later`, {
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
  return (
    <div>
      <button 
        onClick={handSaveForLater}
      className="rounded-lg flex items-center border border-[#33383c] px-6 py-3 text-center text-sm font-semibold text-gray-300 transition hover:border-lime-400 hover:text-lime-400">
        {" "}
        <FaSave />
        Save for later
      </button>
    </div>
  );
};

export default SaveForLaterButton;
