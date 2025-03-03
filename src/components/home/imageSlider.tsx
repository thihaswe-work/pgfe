"use client"; // Required for Next.js app directory

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function ImageSlider() {
  return (
    <div className="h-auto">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true, // Ensures pagination is clickable
          el: ".swiper-pagination", // Define the pagination container
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[calc(100vh-80px)]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image
            src="/home.svg"
            alt="Home Image 1"
            width={100}
            height={100}
            className="object-cover w-full h-[calc(100vh-80px)] border-none"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Image
            src="/home.svg"
            alt="Home Image 2"
            width={100}
            height={100}
            className="object-cover w-full h-[calc(100vh-80px)] border-none"
          />
        </SwiperSlide>

        {/* Pagination Container */}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
}
