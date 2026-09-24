import Image from "next/image";
import React from "react";
import BannerImg from "@/assets/banner.png"
const Banner = () => {
  return (
    <div className="mx-3 md:mx-0">
      <div className=" md:flex justify-between py-4 md:py-18 px-3 md:px-14 bg-[#15171D] my-10 rounded-xl">
        {/* text part */}
        <div className=" space-y-5 ">
            <h6 className="text-[#C2F800] text-[11px] font-bold">WORKOUT LIBRARY</h6>

            <h1 className=" md:text-[60px] text-white font-bold md:max-w-[760px]">TRAIN WITH INTENT.  LOG EVERY SET.</h1>
            <p className="text-4 text-[#9CA3AF] max-w-[481px] ">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
            <button className="btn bg-[#C2F800] text-black rounded py-3 px-6 font-semibold">BROWSE WORKOUTS</button>
        </div>

        <div className="pt-10">
            <Image
            src={BannerImg}
            alt="Banner"
            width={334}
            height={334}
            ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
