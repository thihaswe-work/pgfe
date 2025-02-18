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
  const maxLength = 220;

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
        <h3 className={"font-bold text-lg"}>{title}</h3>
        <span className={"text-secondary"}>
          {`${desc.slice(0, maxLength)}`}
          {desc.length > maxLength && (
            <span className=" cursor-pointer ml-1">
              {` ${desc.length > maxLength && "..."}`}
            </span>
          )}
        </span>

        <div className="mt-8 flex gap-11">
          <div className="w-[150px] flex gap-2">
            <SlLocationPin className="text-lg" />
            <p>Remote</p>
          </div>
          <div className="w-[150px] flex gap-2">
            <FaRegClock className="text-lg" />
            <p>Full Time</p>
          </div>
          <div className="w-[150px] flex gap-2">
            <FaRegCalendar className="text-lg" />
            <p>04 March 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
