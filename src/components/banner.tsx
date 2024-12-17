import Image, { StaticImageData } from "next/image";
import React from "react";

interface Prop {
  image: string | StaticImageData;
  title: string;
}

const Banner = ({ title, image }: Prop) => {
  return (
    <div className="w-full h-[198px] relative flex justify-center items-center ">
      <span className="z-10 text-1xl font-bold">{title}</span>
      <Image src={image} alt="about-us photo" fill />
    </div>
  );
};

export default Banner;
