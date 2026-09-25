import Link from 'next/link';
import React from 'react';

const EmtyDataCard = () => {
    return (
        <div className='border border-dashed min-h-75 border-[#111317] rounded-2xl flex flex-col justify-center items-center text-center '>
            
            <div className='space-y-4'>
                <h4 className='text-2xl font-bold '>NOTHING HERE YET</h4>
                <p className='text-[12px] text-[#A1A1AA] '>Browse the library and add a lift to get today moving.</p>
                <Link href="/">
                   <button className='btn text-black bg-[#C2F10D] rounded-3xl font-semibold mt-5'>Go to workouts</button>
                </Link>
            </div>
        </div>
    );
};

export default EmtyDataCard;