import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface Prop {
  layout: "left" | "right";
  image: string | StaticImport;
  title: string;
  desc: string;
}
const HeroSection = ({ layout, image, title, desc }: Prop) => {
  return (
    <div
      className="w-full h-full "
      // style={
      //   layout === "left"
      //     ? {
      //         background:
      //           "linear-gradient(to bottom right, #06090d 89%, #1CEDE5 100%)",
      //       }
      //     : {}
      // }

      // style={{
      //   background: radial-gradient(50% 50% at 50% 50%, rgba(28, 237, 229, 0.2) 0%, rgba(28, 237, 229, 0.6) 100%);

      // }}
    >
      <div
        className={`flex flex-col lg:flex-row justify-center gap-[24px] items-center  lg:h-[439px]  ${
          layout === "right" ? "" : "flex-row-reverse"
        }`}
      >
        <div className="w-full md:w-[583px] lg:w-[583px] h-full">
          <div className="flex flex-col gap-[37px] ">
            <div className="flex">
              <p className="w-[8px] h-[38px] rounded-[4px] bg-textColor"></p>
              <h3 className="text-xl font-bold ">{title}</h3>
            </div>
            <p>{desc}</p>
          </div>
        </div>
        <div className="w-[347px] h-[240px] md:w-[635px] md:h-[439px]  lg:w-[583px] lg:h-full relative">
          <Image src={image} alt={"heroSection Image"} fill />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
