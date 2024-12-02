"use client";
import Image from "next/image";
import React from "react";
// Import Swiper core and required modules
import {
  Pagination,
  Scrollbar,
  A11y,
  Navigation,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar"; // Make sure to include scrollbar style
import "swiper/css/navigation"; // Add this import for navigation styles

const Testimonials = () => {
  return (
    <div className="relative select-none">
      <h1 className="text-4xl pl-24 font-bold text-transparent">
        TESTIMONIALS
      </h1>

      <Swiper
        className="cursor-pointer"
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Navigation, Parallax]} // Ensure Navigation is included
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".prev", // Specify class for prev button
          nextEl: ".next", // Specify class for next button
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* swiper slide section */}
        {[1, 2, 3, 4].map((item) => {
          return (
            <SwiperSlide key={item} className="w-[100vw] cursor-pointer">
              <div className="flex flex-row-reverse justify-center mx-auto gap-20">
                <div className="w-1/5">
                  <span className="justify-center flex flex-col font-bold mb-3">
                    <span className="text-3xl">Carolynn Willms</span>
                    <span>Octobai Accountantable By Officer</span>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit quidem nulla excepturi necessitatibus. Dolore, odit
                    aut? Necessitatibus, facere incidunt, quibusdam a
                    consequuntur assumenda, at vero culpa et minus id est.
                  </p>
                </div>
                <div className="">
                  <Image
                    src={"/chessImage.jpeg"}
                    alt={"chessimage"}
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between w-[80%] mx-auto z-10">
        <button className="prev bg-gray-500 text-white p-2 rounded-full">
          {"<"}
        </button>
        <button className="next bg-gray-500 text-white p-2 rounded-full">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
