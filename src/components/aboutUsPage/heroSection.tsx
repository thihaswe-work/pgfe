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
    <div className="w-full h-full bg-gradient-to-br from-[#06090D] to-[#080f0c]">
      <div
        className={`flex justify-center gap-[24px] h-[439px] lg:h-[439px] ${
          layout === "right" ? "" : "flex-row-reverse"
        }`}
      >
        <div className="w-[583px] lg:w-[583px] h-full">
          <div className="flex flex-col gap-[37px]">
            <div className="flex">
              <p className="w-[8px] h-[38px] rounded-[4px] bg-textColor"></p>
              <h3 className="text-xl font-bold">{title}</h3>
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
