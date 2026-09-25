"use client"
import { IWorkout } from '@/types/workout.type';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface IWorkoutContext {
    todaysPlan: IWorkout[];
    setTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
    savedWorkouts: IWorkout[];
    setSavedWorkouts:Dispatch<SetStateAction<IWorkout[]>>;
}



export const workoutContext = createContext<IWorkoutContext>({
    todaysPlan: [],
    setTodayPlan: () => {},
    savedWorkouts:[],
    setSavedWorkouts: () => {}
});


const WorkoutProvider = ({children}:{children:ReactNode}) => {
    const [todaysPlan, setTodayPlan] = useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

    const sharedData = {
        todaysPlan,
        setTodayPlan,
        savedWorkouts,
        setSavedWorkouts
    }
    

    return (
        <workoutContext.Provider value={sharedData}>
            {children}
        </workoutContext.Provider>
    );
};

export default WorkoutProvider;