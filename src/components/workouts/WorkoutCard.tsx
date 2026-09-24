import { IWorkout } from '@/types/workout.type';
import React from 'react';

interface workoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({workout}:workoutCardProps) => {
    return (
        <div>
            Workout: {workout.name}
        </div>
    );
};

export default WorkoutCard;