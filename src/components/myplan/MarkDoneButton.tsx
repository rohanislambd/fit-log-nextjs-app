"use client";

import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const MarkDoneButton = () => {
  const [isDone, setIsDone] = useState(false);

  const handleMarkAsDone = () => {
    setIsDone(true);

    toast("Workout marked as done!", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleMarkAsDone}
      disabled={isDone}
      className={`btn rounded-3xl ${
        isDone
          ? "bg-gray-500 text-white cursor-not-allowed"
          : "bg-[#CCFF00] text-black"
      }`}
    >
      <MdDone />
      {isDone ? "Completed" : "Mark as Done"}
    </button>
  );
};

export default MarkDoneButton;