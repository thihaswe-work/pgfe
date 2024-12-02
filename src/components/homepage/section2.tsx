import React from "react";

const Section2 = () => {
  return (
    <div className="bg-gray-950 px-52 py-16">
      <h1 className="text-4xl text-center font-bold mb-11 tracking-wider">
        HOW CAN WE DO
      </h1>

      <div className="relative flex justify-between">
        <div className="w-[25vw] h-[25vw] rounded-full xxl:w-[35vw] xxl:h-[35vw] xxl:text-4xl border-dashed border-white border-2 flex justify-center items-center  left-3/3">
          WEB DEVELOPMENT
        </div>

        <div className="w-[25vw] h-[25vw] rounded-full xxl:w-[35vw] xxl:h-[35vw] xxl:text-4xl border-dashed border-white border-2 flex justify-center items-center absolute left-1/3 -translate-x-4">
          UX/UI
        </div>

        <div className="w-[25vw] h-[25vw] rounded-full xxl:w-[35vw] xxl:h-[35vw] xxl:text-4xl border-dashed border-white border-2 flex justify-center items-center  left-2/3">
          APP DEVELOPMENT
        </div>
      </div>
    </div>
  );
};

export default Section2;
