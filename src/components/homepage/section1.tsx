"use client";
import Image from "next/image";
import React from "react";
// Import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Section1 = () => {
  return (
    <Swiper
      className="cursor-pointer"
      loop
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={100} // Add space between slides if needed
      slidesPerView={1} // Only show one slide at a time (each is 100vw)
      pagination={{ clickable: true }} // Pagination dots are clickable
      // scrollbar={{ draggable: true }} // Make the scrollbar draggable
      // onSwiper={(swiper) => console.log(swiper)} // Optional: log the swiper instance
      // onSlideChange={() => console.log("slide change")} // Optional: log slide change
    >
      {/* swiper slide section */}
      {[1, 2, 3, 4].map((item) => {
        return (
          <SwiperSlide key={item} className="w-[100vw] px-[13px] lg:px-[50px]">
            <div className="flex flex-col md:flex-row md:justify-center justify-between py-10 md:py-0">
              <div className=" md:w-2/3 flex">
                <span className="text-textColor text-xl md:text-3xl lg:text-3xl 1xl:text-4xl flex flex-col font-bold">
                  <span className="text-white">SIMPLE </span>
                  <span className="">SOLLUTIONS</span>
                  <span className="text-white">FOR COMPLEX </span>
                  <span>PROBLEMS</span>
                </span>
              </div>
              <div className=" md:w-1/3 flex justify-center">
                <div className="">
                  <div className="relative w-[250px] h-[250px] md:w-[270px] md:h-[270px]  lg:w-[330px] lg:h-[330px] xl:w-[400px] xl:h-[400px] 1xl:w-[600px] 1xl:h-[600px]  2xl:w-[600px] 2xl:h-[600px]   ">
                    <Image src={"/chess.png"} alt={"chessimage"} fill />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Section1;
