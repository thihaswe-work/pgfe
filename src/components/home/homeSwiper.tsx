/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const swiperRef = useRef<any | null>(null);
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

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-24">
      <div className="text-navbarBgColor text-center mb-10 text-3xl font-bold">
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
        {slides.map((item) => {
          return (
            <SwiperSlide className="cursor-pointer" key={item.id}>
              <div className="flex justify-center  p-6 bg-navbarBgColor w-[70%] mx-auto max-w-[978px] gap-5 rounded-md ">
                <div>
                  <div className="relative w-[285px] xl:w-[485px] h-[257px]">
                    <Image
                      src={"/unique.png"}
                      alt="image"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-background text-lg font-semibold mb-3">
                    Unique Call
                  </h3>
                  <p className="text-thirdBgColor text-sm">
                    Nisl maecenas lectus quisque morbi vitae morbi id purus
                    ultricies. Cras mauris feugiat fusce eget dolor eu a dui
                    consequat. Nisl maecenas lectus quisque morbi vitae morbi id
                    purus ultricies. Cras mauris feugiat fusce eget dolor eu a
                    dui consequat. Nisl maecenas lectus quisque morbi vitae
                    morbi id purus ultricies.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex justify-center gap-24 mt-4  border-b border-b-navbarBgColor overflow-hidden w-full">
        {[...slides.flatMap((slide) => [slide, slide])].map((slide, index) => {
          const isSecondChild = index % 2 !== 0; // Check if it's the second occurrence
          const isActive = Math.floor(index / 2) === activeIndex; // Adjust index for active check

          return (
            <button
              key={`${slide.id}-${index}`}
              onClick={() => swiperRef.current?.slideTo(Math.floor(index / 2))}
              className={cn(
                "relative flex flex-col items-center transition-all duration-300 gap-3"
                // Hide the second occurrence
              )}
            >
              {/* Floating Image Icon */}
              <div
                className={`${
                  isActive && !isSecondChild ? "opacity-100" : "opacity-0"
                } transition-all duration-1000`}
              >
                <img
                  src="/unique.png" // Replace with actual icon path
                  alt={`Slide ${Math.floor(index / 2) + 1}`}
                  className={`w-6 h-6 rounded-full`}
                />
              </div>

              <div
                className={`${
                  isActive && !isSecondChild
                    ? "translate-y-0"
                    : "translate-y-[10px]"
                } h-[30px] w-[2px] bg-navbarBgColor transition-transform duration-1000`}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HomeSwiper;
