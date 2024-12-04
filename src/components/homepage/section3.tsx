import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-[40px] flex justify-center items-center  text-2xl text-center md:text-4xl my-14">
        ANYALYTICS TO GROW YOUR BUSINESS
      </div>
      <div className="md:h-72 w-full flex overflow-hidden justify-center">
        <div className="w-[170px] h-[130px] md:w-[40%] md:h-80 -rotate-6 translate-x-10 md:translate-x-28 translate-y-1 md:translate-y-0 relative flex-shrink-0">
          <Image src={"/photo1.png"} alt={""} layout="fill" objectFit="cover" />
        </div>
        <div className="w-[170px] h-[130px] md:w-[45%] md:h-80 relative  flex-shrink-0 z-50">
          <Image src={"/photo2.png"} alt={""} layout="fill" objectFit="cover" />
        </div>
        <div className="w-[170px] h-[130px] md:w-[40%] md:h-80 rotate-6 -translate-x-10 md:-translate-x-28 translate-y-1 md:translate-y-0 relative  flex-shrink-0">
          <Image src={"/photo3.png"} alt={""} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
