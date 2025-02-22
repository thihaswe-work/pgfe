"use client";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HomeSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      title: "UniqueCall",
      description:
        "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. Cras mauris feugiat fusce eget dolor eu a dui consequat.",
      image: "/unique.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "UniqueCall",
      description:
        "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. Cras mauris feugiat fusce eget dolor eu a dui consequat.",
      image: "/unique.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "UniqueCall",
      description:
        "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. Cras mauris feugiat fusce eget dolor eu a dui consequat.",
      image: "/unique.png", // Replace with actual image path
    },
    {
      id: 4,
      title: "UniqueCall",
      description:
        "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. Cras mauris feugiat fusce eget dolor eu a dui consequat.",
      image: "/unique.png", // Replace with actual image path
    },

    // Add more slides if needed
  ];
  console.log(swiperRef);
  return (
    <>
      <div className="text-navbarBgColor text-center mb-10 text-2xl font-bold">
        MILES STONE
      </div>

      <Swiper
        className="container mx-auto"
        modules={[Pagination, Scrollbar, A11y, Navigation, Parallax]}
        spaceBetween={50}
        loop
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={true}
      >
        <SwiperSlide className="cursor-pointer">
          <div className="flex justify-center  p-6 bg-navbarBgColor w-[70%] mx-auto max-w-[978px] gap-5 rounded-md">
            <div>
              <div className="relative w-[485px] h-[257px]">
                <Image
                  src={"/unique.png"}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-background">Unique Call</h3>
              <p className="text-thirdBgColor">
                Nisl maecenas lectus quisque morbi vitae morbi id purus
                ultricies. Cras mauris feugiat fusce eget dolor eu a dui
                consequat. Nisl maecenas lectus quisque morbi vitae morbi id
                purus ultricies. Cras mauris feugiat fusce eget dolor eu a dui
                consequat. Nisl maecenas lectus quisque morbi vitae morbi id
                purus ultricies.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center gap-24 mt-4  border-b border-b-navbarBgColor overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={slide.id}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={cn(
                "relative flex flex-col items-center transition-all duration-300"
              )}
            >
              {/* Floating Image Icon */}
              <div
                className={`${
                  isActive ? "opacity-100" : "opacity-0"
                } transition-all duration-1000`}
              >
                <img
                  src="/unique.png" // Replace with actual icon path
                  alt={`Slide ${index + 1}`}
                  className={`w-6 h-6   rounded-full `}
                />
              </div>

              <div
                className={`${
                  isActive ? "translate-y-0" : " translate-y-[10px]"
                } h-[30px] w-1 bg-navbarBgColor transition-transform duration-1000 `}
              ></div>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default HomeSwiper;
