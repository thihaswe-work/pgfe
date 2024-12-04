"use client";
import Image from "next/image";
import React from "react";
// Import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Section1 = () => {
  return (
    <Swiper
      className="cursor-pointer"
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50} // Add space between slides if needed
      slidesPerView={1} // Only show one slide at a time (each is 100vw)
      pagination={{ clickable: true }} // Pagination dots are clickable
      // scrollbar={{ draggable: true }} // Make the scrollbar draggable
      onSwiper={(swiper) => console.log(swiper)} // Optional: log the swiper instance
      onSlideChange={() => console.log("slide change")} // Optional: log slide change
    >
      {/* swiper slide section */}
      {[1, 2, 3, 4].map((item) => {
        return (
          <SwiperSlide key={item} className="w-[100vw] px-10">
            <div className="flex">
              <div className="w-2/3">
                <span className="text-textColor text-8xl flex flex-col font-bold">
                  <span className="text-white">SIMPLE </span>
                  <span className="">SOLLUTIONS</span>
                  <span className="text-white">FOR COMPLEX </span>
                  <span>PROBLEMS</span>
                </span>
              </div>
              <div className="w-1/3">
                <Image
                  src={"/chess.png"}
                  alt={"chessimage"}
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Section1;
