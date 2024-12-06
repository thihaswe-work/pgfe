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
    <div className="h-[550px] md:h-[450px] lg:h-[620px] bg-sectionColor overflow-hidden">
      <div className="flex items-center justify-center relative h-full w-full">
        <div className="w-full flex flex-col md:flex-row justify-around font-bold h-full 2xl:w-[65%] 4xl:w-[50%] ">
          <div className="flex flex-col items-center justify-center ">
            <span className="text-2xl  xl:text-2xl">2023</span>
            <span className="text-base md:text-md xl:text-xl">ESTABLISH</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className=" text-2xl xl:text-2xl">{state}+</span>
            <span className="text-base md:text-md xl:text-xl">
              EXPERT MEMBER
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl xl:text-2xl">1</span>
            <span className="text-base md:text-md xl:text-xl">BRANCH</span>
          </div>
        </div>
        <div className="w-[556px] h-[556px] lg:w-[750px] lg:h-[750px] xl:w-[900px] xl:h-[900px] border-white border-2 rounded-full border-dashed absolute"></div>
        <div className="w-[366px] h-[366px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] border-white border-2 rounded-full border-dashed absolute"></div>
        <div className="w-[176px] h-[176px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px] border-white border-2 rounded-full border-dashed absolute"></div>
      </div>
    </div>
  );
};

export default Section4;
