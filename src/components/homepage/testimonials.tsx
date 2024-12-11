"use client";
import Image from "next/image";
// Import Swiper core and required modules
import {} from "swiper";
import {
  A11y,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { testimonialsData } from "@/app/lib/data";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Data {
  id: number;
  name: string;
  role: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const Testimonials = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const apiRequest = async () => {
      try {
        const response = await testimonialsData();
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };
    apiRequest();
  }, []);

  return (
    <div className="relative select-none bg-secondBgColor">
      <div className="py-8 flex justify-between lg:justify-around w-full px-[13px] md:px-[40px] lg:px-[50px] items-center">
        {/* <h1 className={` ${styles.testimonials} `}>Testimonials</h1> */}
        <div className="w-3/5 md:w-3/5 lg:w-2/5 h-9 md:h-10 lg:h-14 xl:h-20 relative">
          <Image src={"/testimonials.png"} alt="testimonials" fill />
        </div>
        <div className="w-1/3 flex justify-end xl:justify-center">
          <i
            className="fa-solid fa-quote-left text-textColor text-2xl lg:text-4xl "
            aria-hidden
          ></i>
        </div>
      </div>

      <Swiper
        className="cursor-pointer"
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Navigation, Parallax]} // Ensure Navigation is included
        spaceBetween={50}
        loop
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".prev", // Specify class for prev button
          nextEl: ".next", // Specify class for next button
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {/* swiper slide section */}

        {data.length === 0 ? (
          <SwiperSlide className="w-[100vw] h-auto cursor-pointer">
            <div className="flex justify-center mx-auto gap-20 md:gap-5 lg:gap-20 md:flex-row-reverse flex-col-reverse items-center md:items-start lg:items-center">
              {/* Skeleton for text */}
              <div className="md:w-2/5 lg:w-1/5 w-4/5">
                <span className="justify-center flex flex-col mb-3">
                  <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                  {/* Name skeleton */}
                  <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse mt-2"></div>
                  {/* Title skeleton */}
                </span>
                <p className="h-24 bg-gray-300 rounded animate-pulse"></p>
                {/* Description skeleton */}
              </div>

              {/* Skeleton for image */}
              <div className="flex relative justify-center items-center md:h-[200px] md:w-[200px] lg:h-[400px] lg:w-[400px]">
                <div className="h-full w-full bg-gray-300 animate-pulse rounded-full"></div>
                {/* Image skeleton */}
              </div>
            </div>
          </SwiperSlide>
        ) : (
          data.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="w-[100vw] h-auto cursor-pointer"
              >
                <div className="flex justify-center mx-auto gap-20 md:gap-5 lg:gap-20 md:flex-row-reverse flex-col-reverse items-center md:items-start lg:items-center">
                  <div className="md:w-2/5 lg:w-1/5 w-4/5">
                    <span className="justify-center flex flex-col mb-3">
                      <span className="text-3xl font-bold">
                        {item.name ?? "Carolyn Willms"}
                      </span>
                      <span>
                        {item.role ?? "Global Accountability Officer"}
                      </span>
                    </span>
                    <p>
                      {item.content ??
                        `
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit quidem nulla excepturi necessitatibus. Dolore, odit
                      aut? Necessitatibus, facere incidunt, quibusdam a
                      consequuntur assumenda, at vero culpa et minus id est.`}
                    </p>
                  </div>
                  <div className="flex relative justify-center items-center md:h-[200px] md:w-[200px] lg:h-[400px] lg:w-[400px] ">
                    <Image
                      src={"/unplash.png"}
                      alt={"unplash"}
                      height={300}
                      width={300}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 md:left-0 md:right-0 flex justify-between w-[90%] -left-3 -right-3 md:w-[80%] mx-auto z-10 ">
        <button className="prev bg-gray-500 text-white p-2 rounded-full">
          {"<"}
        </button>
        <button className="next bg-gray-500 text-white p-2 rounded-full ">
          {">"}
        </button>
      </div>
    </div>
  );
};
// };

export default Testimonials;
