import React from "react";

const Section2 = () => {
  return (
    <div className="bg-secondBgColor lg:px-48 py-16 ">
      <h1 className="text-2xl text-center font-bold mb-11 tracking-wider">
        HOW WE DO
      </h1>

      <div className=" md:h-auto w-full relative h-[612px] font-bold  flex flex-col md:flex-row  justify-between items-center md:items-start lg:[text-23px] 2xl:text-[35px]">
        <div className=" flex-shrink-0 w-[230px] h-[230px] md:w-[36vw] md:h-[36vw]  rounded-full lg:w-[23vw] lg:h-[23vw] xl:w-[27vw] xl:h-[27vw]  1xl:w-[30vw] 1xl:h-[30vw] border-dashed border-white border-2 flex justify-center items-center  left-3/3">
          WEB DEVELOPMENT
        </div>

        <div className=" w-[230px] h-[230px] rounded-full  md:w-[36vw] md:h-[36vw] lg:w-[23vw] lg:h-[23vw] xl:w-[27vw] xl:h-[27vw]  1xl:w-[30vw] 1xl:h-[30vw] border-dashed border-white border-2 flex justify-center items-center absolute bottom-48 md:bottom-0 md:left-1/3 lg:-translate-x-2 xl:-translate-x-4 1xl:-translate-x-7 md:-translate-x-3">
          UX/UI
        </div>

        <div className=" flex-shrink-0 w-[230px] h-[230px] md:w-[36vw] md:h-[36vw]  rounded-full lg:w-[23vw] lg:h-[23vw] xl:w-[27vw] xl:h-[27vw]  1xl:w-[30vw] 1xl:h-[30vw] border-dashed border-white border-2 flex justify-center items-center  left-2/3">
          APP DEVELOPMENT
        </div>
      </div>
    </div>
  );
};

export default Section2;
