"use client"
import WorkoutCard from '@/components/workouts/WorkoutCard';
import { workoutContext } from '@/context/WorkoutProvider';
import React, { useContext }  from 'react';

const MyPlanPage = () => {
    const {todaysPlan} = useContext(workoutContext)

    return (
        <div className='container mx-auto'>
           
         <div>
                <h2 className='text-[30px] text-white font-bold'>MY PLAN</h2>
                <p className='text-[14px] text-[8A92A0] '>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='-300 min-h-[122px] mt-5 rounded-2xl bg-[#13161D]  py-6 px-6 flex items-center space-x-100 '>
                <div>
                    <p className=' text-[12px] text-[#8A92A0] '>Exercies</p>
                    <p className='font-bold text-[36px] text-[#CCFF00] '>0</p>
                </div>
                <div>
                    <p className=' text-[12px] text-[#8A92A0] '>Minutes</p>
                    <p className='font-bold text-[36px] '>23</p>
                </div>
                <div>
                    <p className=' text-[12px] text-[#8A92A0] '>Exercies</p>
                    <p className='font-bold text-[36px] '>0</p>
                </div>

            </div>
            <div>
                {
                    todaysPlan.length > 0 ? (
                        todaysPlan.map(plan => <WorkoutCard key={plan.id}  workout={plan}></WorkoutCard>)
                    ): <p>no data </p>
                }
            </div>

           
        </div>
    );
};

export default MyPlanPage;