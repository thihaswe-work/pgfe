import Image from "next/image";
import React from "react";
interface Prop {
  img: string;
  title: string;
  desc: string;
}

const HomeCard = ({ img, title, desc }: Prop) => {
  return (
    <div className=" space-y-2 w-full h-full   ">
      <h3 className="font-semibold">Ui/Ux</h3>
      <Image
        src={img}
        alt={""}
        width={100}
        height={100}
        className="rounded-sm h-[277px] object-cover w-full "
      />
      <h3 className="font-semibold">{title}</h3>
      <span className="text-thirdBgColor text-sm">{desc}</span>
    </div>
  );
};

export default HomeCard;
