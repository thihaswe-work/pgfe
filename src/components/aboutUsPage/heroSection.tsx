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
        className={`flex justify-center gap-[24px] h-[439px] lg:h-[439px]  ${
          layout === "right" ? "" : "flex-row-reverse"
        }`}
      >
        <div className="w-[583px] lg:w-[583px] h-full">
          <div className="flex flex-col gap-[37px] ">
            <div className="flex">
              <p className="w-[8px] h-[38px] rounded-[4px] bg-textColor"></p>
              <h3 className="text-xl font-bold ">{title}</h3>
            </div>
            <p>{desc}</p>
          </div>
        </div>
        <div className="w-[583px] h-full lg:w-[583px] relative">
          <Image src={image} alt={"heroSection Image"} fill />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
