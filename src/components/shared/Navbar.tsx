"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import React, { useContext } from "react";
import { workoutContext } from "@/context/WorkoutProvider";

const Navbar = () => {
  const {todaysPlan, savedWorkouts} = useContext(workoutContext)
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathname === "/" ? "text-[#C2F800] bg-[#1A2312] rounded-2xl px-4" : ""}`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={`${pathname === "/my-plan" ? "text-[#C2F800] bg-[#1A2312] rounded-2xl px-4" : ""}`}
        >
          My plan{" "}
        </Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href='/'>
             <div className="flex space-x-2">
            <Image src={Logo} alt="logo" height={28} width={28}></Image>
            <p className="text-white text-[18px] font-bold">FITLOG</p>
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {/* Plan */}
          <Link href="/my-plan">
             <div className="flex items-center gap-2 rounded-full px-4 py-2 text-white">
            <span className="text-sm font-medium">Plan</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#C2F800] px-2 font-bold text-black">
              {todaysPlan.length}
            </span>
          </div>
          </Link>

          {/* Saved */}
          <Link href="/my-plan">
            <div className="flex items-center gap-2 rounded-full  px-4 py-2 text-gray-800">
            <span className="text-sm text-gray-400 font-medium">Saved</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border text-gray-400 px-2 font-bold">
             {savedWorkouts.length}
            </span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
