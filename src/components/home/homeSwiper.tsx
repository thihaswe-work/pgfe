/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";

const VerticalTimelineSwiper = () => {
  const swiperRef = useRef<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      year: "2025",
      title: "UniqueCall",
      description: "Description 1",
      link: "www.uniquecall.com",
      image: "/iphone.svg",
      icon: "/unique.png",
      colorCode: "#ff9b0c", // Orange
    },
    {
      id: 2,
      year: "2024",
      title: "Fresh Feature",
      description: "Description 2",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/fresh.svg",
      colorCode: "#22c55e", // Green
    },
    {
      id: 3,
      year: "2023",
      title: "Milestone 1",
      description: "Description 3",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/door.svg",
      colorCode: "#3b82f6", // Blue
    },
    {
      id: 4,
      year: "2022",
      title: "Step 4",
      description: "Description 4",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/halal.svg",
      colorCode: "#9333ea", // Purple
    },
    {
      id: 5,
      year: "2021",
      title: "Step 5",
      description: "Description 5",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/icon5.png",
      colorCode: "#f43f5e", // Red
    },
    {
      id: 6,
      year: "2020",
      title: "Step 6",
      description: "Description 6",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/icon6.png",
      colorCode: "#f97316", // Dark Orange
    },
    {
      id: 7,
      year: "2019",
      title: "Step 7",
      description: "Description 7",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/icon7.png",
      colorCode: "#14b8a6", // Teal
    },
    {
      id: 8,
      year: "2018",
      title: "Step 8",
      description: "Description 8",
      link: "www.example.com",
      image: "/iphone.svg",
      icon: "/icon8.png",
      colorCode: "#eab308", // Yellow
    },
  ];

  const getVisibleIcons = () => {
    const totalIcons = slides.length;
    const visibleRange = 5; // Always show 3 icons centered
    const offset = Math.floor(visibleRange / 2);

    return Array.from({ length: visibleRange }, (_, i) => {
      return slides[(activeIndex + i - offset + totalIcons) % totalIcons];
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-auto container">
      <div className="text-3xl font-bold mb-6">MILESTONES</div>

      <div className="flex w-full h-[80vh] justify-center relative ">
        {/* Timeline (Left Side) */}
        <div className="w-[15%] flex flex-col gap-3 items-center justify-center relative ">
          {getVisibleIcons().map((slide) => (
            <button
              key={slide.id}
              onClick={() => swiperRef.current?.slideTo(slides.indexOf(slide))}
              className={`relative flex flex-col gap-3  transition-all`}
            >
              <div className="flex gap-5 items-center">
                <Image
                  width={100}
                  height={100}
                  src={slide.icon}
                  alt="icon"
                  className={`w-10 h-10 object-contain  transition-all 
                    
                    ${""}
                    `}
                />
                <span
                  className={` ${
                    slide.id === slides[activeIndex].id
                      ? "opacity-100 z-10"
                      : "opacity-0"
                  } text-lg font-semibold mt-2`}
                >
                  {slide.year}
                </span>
              </div>
              <div className="w-[2px] h-10 bg-thirdBgColor ml-5"></div>
            </button>
          ))}
        </div>

        {/* Swiper Vertical Slides (Right Side) */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          direction="vertical"
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-[85%]  h-full flex justify-center items-center "
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full p-0 m-0">
              <div className="flex justify-center items-center w-full">
                <div
                  className={`relative flex items-center bg-background rounded-xl w-full max-w-[1000px] -top-3 h-[433px] `}
                  style={{ boxShadow: `0 0 50px ${slide.colorCode}80` }}
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-b rounded-xl"></div> */}

                  {/* Text Content */}
                  <div className="w-[52%] flex flex-col gap-4 p-10">
                    <h2 className="text-xl font-bold">{slide.title}</h2>
                    <p className="mt-4 text-lg">{slide.description}</p>
                    <a
                      href={slide.link}
                      className="text-red-400 underline mt-4 inline-block"
                    >
                      {slide.link}
                    </a>
                  </div>

                  {/* Slide Image */}
                  <div className="w-[48%] flex justify-end h-full">
                    <Image
                      src={slide.image}
                      alt="Slide Image"
                      width={100}
                      height={100}
                      className="rounded-md drop-shadow-xl h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VerticalTimelineSwiper;
