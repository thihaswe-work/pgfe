import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl my-16">ANYALYTICS TO GROW YOUR BUSINESS</div>
      <div className="h-72 w-full flex overflow-hidden justify-center">
        <div className="w-[40%] h-80 -rotate-6 translate-x-4 translate-y-5 relative flex-shrink-0">
          <Image src={"/photo1.png"} alt={""} layout="fill" objectFit="cover" />
        </div>
        <div className="w-[40%] h-80 relative  flex-shrink-0 z-50">
          <Image src={"/photo2.png"} alt={""} layout="fill" objectFit="cover" />
        </div>
        <div className="w-[40%] h-80 rotate-6 -translate-x-4 translate-y-5 relative  flex-shrink-0">
          <Image src={"/photo3.png"} alt={""} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
