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
import { homeTestimonialsData } from "@/lib/data";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { usePathname } from "next/navigation";

interface Data {
  id: number;
  name: string;
  role: string;
  content: string;
  created_at: string;
  updated_at: string;
  image: string;
}

const Testimonials = () => {
  const [data, setData] = useState<Data[] | undefined>([]);
  const pathname = usePathname();
  useEffect(() => {
    const apiRequest = async () => {
      try {
        const response = await homeTestimonialsData();
        setData(response.data);
      } catch (error) {
        console.log("Error fetching testimonials data:", error);
        setData(undefined);
      }
    };
    apiRequest();
  }, []);

  return (
    <div className={`relative select-none `}>
      <div className="py-8 flex justify-between lg:justify-around w-full items-center container mx-auto">
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
        className="cursor-pointer px-[13px] md:px-[40px] lg:px-[50px]"
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

        <SwiperSlide className=" h-auto cursor-pointer">
          <div className="flex justify-center mx-auto gap-20 md:gap-5 lg:gap-20  p-6 bg-navbarBgColor  w-[70vw]">
            <div className="relative w-[485px] h-[257px]">
              <Image src={"/unique.png"} alt="image" fill />
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
        <SwiperSlide className=" h-auto cursor-pointer ">
          <div className="flex justify-center mx-auto gap-20 md:gap-5 lg:gap-20  p-6 bg-navbarBgColor">
            <div className="relative w-[485px] h-[257px]">
              <Image src={"/unique.png"} alt="image" fill />
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
        <SwiperSlide className=" h-auto cursor-pointer ">
          <div className="flex justify-center mx-auto gap-20 md:gap-5 lg:gap-20  p-6 bg-navbarBgColor">
            <div className="relative w-[485px] h-[257px]">
              <Image src={"/unique.png"} alt="image" fill />
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
