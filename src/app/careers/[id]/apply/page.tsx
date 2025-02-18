import ApplyForm from "@/components/careers/applyForm";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export default function Page() {
  return (
    <div className=" py-16 container mx-auto px-3 md:px-2 lg:px-0 ">
      {/* role */}
      <div className="flex flex-col gap-4 between ">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Frontend Developer
          </h3>
          <div className="text-textColor flex gap-[6px] items-cente text-md">
            <MdOutlineComputer className="translate-y-1 " />
            <span className="font-semibold">Developer</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className=" w-fit sm:w-[110px]  md:w-[140px] flex gap-1 md:gap-2">
            <SlLocationPin className="md:text-md" />
            <p>Remote</p>
          </div>
          <div className="  w-fit sm:w-[110px] md:w-[140px] flex gap-1 md:gap-2 ">
            <FaRegClock className="md:text-md" />
            <p>Full Time</p>
          </div>
          <div className=" w-fit sm:w-[130px] md:w-[140px] flex gap-1 md:gap-2">
            <FaRegCalendar className="md:text-md" />
            <p>04 March 2025</p>
          </div>
        </div>
      </div>

      {/* requirement */}
      <div className="mt-16 ">
        <h3 className="text-md font-semibold">Apply Form</h3>
        <div className="flex justify-center">
          <div className="w-[640px]">
            <ApplyForm />
          </div>
        </div>
      </div>
    </div>
  );
}
