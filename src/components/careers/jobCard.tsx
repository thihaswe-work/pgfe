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
  return (
    <div className={"w-full flex h-[150px] gap-3"}>
      <div className="h-full translate-y-[10px]">
        <Image
          src={image ?? "/developer.svg"}
          alt="category image"
          width={46}
          height={52}
          className="object-cover"
        />
      </div>
      <div className="h-full flex flex-col">
        <h3 className={"font-bold text-xl"}>{title}</h3>
        <span className={""}>{desc}</span>

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
