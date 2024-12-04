import React from "react";

const Section2 = () => {
  return (
    <div className="bg-gray-950 lg:px-48 py-16 ">
      <h1 className="text-4xl text-center font-bold mb-11 tracking-wider">
        HOW CAN WE DO
      </h1>

      <div className=" md:h-auto w-full relative h-[612px]  flex flex-col md:flex-row  justify-between items-center md:items-start lg:[text-23px]">
        <div className=" flex-shrink-0 w-[230px] h-[230px] rounded-full lg:w-[24vw] lg:h-[24vw] xl:w-[27vw] xl:h-[27vw]  smxxl:w-[30vw] smxxl:h-[30vw] xxl:w-[32vw] xxl:h-[32vw] border-dashed border-white border-2 flex justify-center items-center  left-3/3">
          WEB DEVELOPMENT
        </div>

        <div className=" w-[230px] h-[230px] rounded-full lg:w-[24vw] lg:h-[24vw] xl:w-[27vw] xl:h-[27vw]  smxxl:w-[30vw] smxxl:h-[30vw] xxl:w-[32vw] xxl:h-[32vw] border-dashed border-white border-2 flex justify-center items-center absolute bottom-48 md:bottom-0 md:left-1/3 lg:-translate-x-2 xl:-translate-x-4 xxl:-translate-x-6">
          UX/UI
        </div>

        <div className=" flex-shrink-0 w-[230px] h-[230px] rounded-full lg:w-[24vw] lg:h-[24vw] xl:w-[27vw] xl:h-[27vw]  smxxl:w-[30vw] smxxl:h-[30vw] xxl:w-[32vw] xxl:h-[32vw] border-dashed border-white border-2 flex justify-center items-center  left-2/3">
          APP DEVELOPMENT
        </div>
      </div>
    </div>
  );
};

export default Section2;
