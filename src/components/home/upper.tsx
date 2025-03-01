"use client";

import ImageSlider from "./imageSlider";

const Upper = () => {
  return (
    <div className="relative ">
      {/* Sticky Header */}
      <div className=" flex justify-center absolute top-0 font-bold w-full z-10 gap-5 text-[100px] container inset-0 mx-auto h-fit">
        <div className="flex flex-col  items-end">
          <span>Innovate with</span>
          <span>Build like a</span>
        </div>
        <div className="flex flex-col text-textColor  ">
          <span className="">Passion,</span>
          <span className="">Geek</span>
        </div>
      </div>

      {/* Image */}
      <ImageSlider />
    </div>
  );
};

export default Upper;
