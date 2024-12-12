import Image, { StaticImageData } from "next/image";
import React from "react";

interface Prop {
  name: string;
  image: string | StaticImageData;
  point: number;
  desc: string;
}

const Card = ({ name, image, point, desc }: Prop) => {
  // Total stars

  return (
    <div className="w-full h-full bg-white rounded-lg flex flex-col p-4 text-black">
      <div className="justify-center flex">
        <Image src={image} alt="avatar" width={101} height={116} />
      </div>
      <div className="flex items-center flex-col">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="mt-2 flex items-center">
          {/* Loop to display 5 stars */}
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={` text-lg ${index < 4 ? "text-textColor" : ""}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm ">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
