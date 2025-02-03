import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-[40px] flex justify-center items-center text-md text-center lg:text-2xl 2xl:text-3xl 3xl:text-4xl my-14 lg:tracking-widest font-bold">
        ANYALYTICS TO GROW YOUR BUSINESS
      </div>
      <div className=" h-56 md:h-72 lg:h-80 xl:h-96 1xl:h-[450px] w-full flex overflow-hidden justify-center">
        <div className="w-[60%] h-full md:w-[50%] md:h-72 lg:h-96 xl:h-full -rotate-[20deg] md:-rotate-10 lg:-rotate-12 translate-x-11 md:translate-x-28 lg:translate-x-36 translate-y-7  md:translate-y-6  lg:translate-y-8 1xl:translate-y-10 2xl:translate-y-20 3xl:translate-y-28 relative flex-shrink-0">
          <Image
            src={"/homePhoto1.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-[60%] h-full md:w-[45%] md:h-72 lg:h-96 xl:h-full relative  flex-shrink-0 z-10">
          <Image
            src={"/homePhoto2.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-[60%] h-full md:w-[50%] md:h-72 lg:h-96 xl:h-full  rotate-[20deg] md:rotate-10 lg:rotate-12 -translate-x-11 md:-translate-x-28  lg:-translate-x-36 translate-y-7 md:translate-y-6  lg:translate-y-8 1xl:translate-y-10 2xl:translate-y-20 3xl:translate-y-28 relative  flex-shrink-0">
          <Image
            src={"/homePhoto3.png"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
