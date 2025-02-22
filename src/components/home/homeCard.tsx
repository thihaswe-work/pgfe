import Image from "next/image";
import React from "react";
interface Prop {
  img: string;
  title: string;
  desc: string;
}

const HomeCard = ({ img, title, desc }: Prop) => {
  return (
    <div className="max-w-[348px] space-y-2">
      <Image
        src={img}
        alt={""}
        width={100}
        height={100}
        className="rounded-sm h-[277px] object-cover w-full"
      />
      <h3>{title}</h3>
      <span className="text-thirdBgColor">{desc}</span>
    </div>
  );
};

export default HomeCard;
