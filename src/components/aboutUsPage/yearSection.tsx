import Image from "next/image";
import React from "react";

const YearSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-end justify-end ">
      <div className="flex flex-col">
        <div className="flex items-center overflow-hidden">
          <div className="text-center text-sm md:text-lg  ">
            <h3 className=" font-bold">Since From</h3>
            <span>2017-2024</span>
          </div>
          <Image
            className="md:w-[250px] h-[150px]"
            src={"/g-year.png"}
            alt="year photo"
            width={150}
            height={100}
          />
        </div>

        <div className="">
          {/* <div
            className="w-[150px] h-[150px] bg-textColor absolute right-12 -top-2 flex justify-center items-center font-bold text-lg"
            style={{
              clipPath:
                " polygon(0 26%, 50% 0, 100% 26%, 100% 77%, 51% 100%, 0 78%)",
            }}
          >
            <span>2024</span>
          </div> */}
          <div className="relative h-[200px]">
            <Image
              src={"/2024.png"}
              alt="2024 image"
              width={167}
              height={192}
              className="absolute -right-4  md:right-10 md:-top-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearSection;
