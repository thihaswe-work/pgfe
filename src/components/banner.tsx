"use client";

interface Prop {
  text: string[];
}
const Banner = ({ text }: Prop) => {
  return (
    <div className="w-full h-[100px] md:h-[198px] relative flex items-center z-10 bg-background">
      <div className=" container mx-auto">
        <strong className=" text-lg sm:text-1xl md:text-3xl lg:text-[64px]  md:leading-[1] ">
          <div className="flex gap-2 md:gap-5">
            <h1>{text[0]}</h1>
            <h1>{text[1]}</h1>
          </div>
          <h1 className="flex gap-2 md:gap-5">
            <span className="text-textColor ">{text[2]}</span>
            <span>{text[3]}</span>
          </h1>
        </strong>
      </div>
    </div>
  );
};

export default Banner;
