"use client";

import { IWorkout } from "@/types/workout.type";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IWorkoutContext {
  todaysPlan: IWorkout[];
  setTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
  savedWorkouts: IWorkout[];
  setSavedWorkouts: Dispatch<SetStateAction<IWorkout[]>>;
}

export const workoutContext = createContext<IWorkoutContext>({
  todaysPlan: [],
  setTodayPlan: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todaysPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedTodayPlan = localStorage.getItem("todayPlan");
    const savedWorkoutsData = localStorage.getItem("savedWorkouts");

    if (savedTodayPlan) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodayPlan(JSON.parse(savedTodayPlan));
    }

    if (savedWorkoutsData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSavedWorkouts(JSON.parse(savedWorkoutsData));
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "todayPlan",
      JSON.stringify(todaysPlan)
    );

    localStorage.setItem(
      "savedWorkouts",
      JSON.stringify(savedWorkouts)
    );
  }, [todaysPlan, savedWorkouts, isLoaded]);

  const sharedData = {
    todaysPlan,
    setTodayPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;