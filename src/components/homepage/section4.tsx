"use client";
import React, { useEffect, useState } from "react";

const Section4 = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (state < 300) {
        setState((prev) => prev + 1);
      }
    }, 1);

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="h-[300px] bg-red-600 overflow-hidden">
      <div className="flex items-center justify-center relative h-full w-full">
        <div className="w-full flex justify-around font-bold ">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl">2023</span>
            <span>ESTABLISH</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl">{state}+</span>
            <span>EXPERT MEMBER</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl">1</span>
            <span>BRANCH</span>
          </div>
        </div>
        <div className="w-[900px] h-[900px] border-white border-2 rounded-full border-dashed absolute"></div>
        <div className="w-[600px] h-[600px] border-white border-2 rounded-full border-dashed absolute"></div>
        <div className="w-[200px] h-[200px] border-white border-2 rounded-full border-dashed absolute"></div>
      </div>
    </div>
  );
};

export default Section4;
