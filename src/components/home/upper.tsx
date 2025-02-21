"use client";
import React from "react";

const Upper = () => {
  return (
    <div className="relative">
      {/* text header */}
      <div className=" font-bold text-[120px] sticky top-0 bg-background w-full">
        <div className=" container mx-auto text-center">
          <div className="flex gap-5">
            <span>Inspire</span>
            <span className="text-textColor">Creativity</span>
          </div>
          <div className="flex justify-center gap-5">
            <span className="text-textColor">Enrich</span>
            <span>Life</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col container mx-auto ">
        <div className="bg-red-200 h-screen"></div>
        <div className="bg-green-200 h-screen"></div>
      </div>
    </div>
  );
};

export default Upper;
