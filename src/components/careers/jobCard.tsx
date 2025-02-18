import Image, { StaticImageData } from "next/image";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
interface Prop {
  title: string;
  desc: string;
  image?: string | StaticImageData;
}
export function JobCard({ image, title, desc }: Prop) {
  const maxLength1 = 150;
  const maxLength2 = 250;

  return (
    <div
      className={
        "w-full flex h-[150px] gap-3 hover:border-l-[3px] hover:pl-3 hover:border-textColor transition-all duration-300"
      }
    >
      <div className="h-full translate-y-[10px] flex-shrink-0">
        <Image
          src={image ?? "/developer.svg"}
          alt="category image"
          width={31}
          height={24}
          className="object-cover"
        />
      </div>
      <div className="h-full flex flex-col">
        <h3 className={"font-bold text-md md:text-lg"}>{title}</h3>
        <span className={"text-secondary text-sm md:text-base md:hidden"}>
          {`${desc.slice(0, maxLength1)}`}
          {desc.length > maxLength1 && (
            <span className=" cursor-pointer ml-1">
              {` ${desc.length > maxLength1 && "..."}`}
            </span>
          )}
        </span>
        <span className={"text-secondary text-sm md:text-base hidden md:block"}>
          {`${desc.slice(0, maxLength2)}`}
          {desc.length > maxLength2 && (
            <span className=" cursor-pointer ml-1">
              {` ${desc.length > maxLength2 && "..."}`}
            </span>
          )}
        </span>
        <div className="mt-8 flex w-full text-sm sm:text-base md:text-base gap-2 md:gap-0">
          <div className=" w-fit sm:w-[110px]  md:w-[140px] flex gap-2">
            <SlLocationPin className="md:text-md" />
            <p>Remote</p>
          </div>
          <div className="  w-fit sm:w-[110px] md:w-[140px] flex gap-2 ">
            <FaRegClock className="md:text-md" />
            <p>Full Time</p>
          </div>
          <div className=" w-fit sm:w-[130px] md:w-[140px] flex gap-2">
            <FaRegCalendar className="md:text-md" />
            <p>04 March 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
