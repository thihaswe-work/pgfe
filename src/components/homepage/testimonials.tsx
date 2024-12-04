"use client";
import Image from "next/image";
// Import Swiper core and required modules
import {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./homepage.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  return (
    <div className="relative select-none">
      <div className="my-8 flex justify-between md:mx-36 ">
        <h1
          className={`text-6xl md:pl-24 font-bold text-transparent ${styles.textShadow} `}
        >
          Testimonials
        </h1>
        <div className="w-1/3 flex justify-center">
          <i
            className="fa-solid fa-quote-left text-textColor text-6xl"
            aria-hidden
          ></i>
        </div>
      </div>

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
            <SwiperSlide key={item} className="w-[100vw] h-auto cursor-pointer">
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
// };

export default Testimonials;
