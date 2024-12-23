// "use client";
// // Import Swiper core and required modules

// import {
//   A11y,
//   Navigation,
//   Pagination,
//   Parallax,
//   Scrollbar,
// } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import Card from "./card";

// const Testimonials = () => {
//   const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   const chunkedArr = [];
//   for (let i = 0; i < numArr.length; i += 3) {
//     chunkedArr.push(numArr.slice(i, i + 3));
//   }

//   return (
//     <div className="">
//       <div className="flex justify-center text-2xl font-bold mb-[24px] mt-[120px]">
//         <h1>Testimonials</h1>
//       </div>
//       <Swiper
//         className="cursor-pointer"
//         // install Swiper modules
//         modules={[Pagination, Scrollbar, A11y, Navigation, Parallax]} // Ensure Navigation is included
//         spaceBetween={50}
//         loop
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation={{
//           prevEl: ".prev", // Specify class for prev button
//           nextEl: ".next", // Specify class for next button
//         }}
//       >
//         {/* swiper slide section */}
//         {chunkedArr.map((myArr, index) => {
//           return (
//             <SwiperSlide key={index} className="w-screen">
//               <div
//                 className={`flex cursor-pointer flex-col lg:flex-row items-center gap-5 ${
//                   myArr.length === 3
//                     ? "lg:justify-between"
//                     : "justify-center lg:justify-around"
//                 }`}
//               >
//                 {myArr.map((item: any) => {
//                   return (
//                     <div
//                       className={`w-[30%] max-w-[450px] min-w-[299px] h-[334px]`}
//                       key={item}
//                     >
//                       <Card
//                         name={"aung aung"}
//                         image={"/vector-6.png"}
//                         point={0}
//                         desc={
//                           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, alias. psum dolor sit amet consectetur adipisicing elit. Minima, alias. lorem ippsum dolor sit amet ."
//                         }
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonials;
