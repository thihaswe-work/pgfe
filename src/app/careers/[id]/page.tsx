"use client"; // Required for hooks in Next.js

import { useEffect, useState } from "react";
import MiniList from "@/components/careers/CustomMini";
import { Button } from "@/components/ui/button";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineComputer } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById("apply-container");
      if (!targetDiv) return;

      const targetPosition = targetDiv.getBoundingClientRect().top;

      setIsSticky(targetPosition <= window.innerHeight - 40); // Adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16 container mx-auto px-3 md:px-2 lg:px-0">
      {/* role */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Frontend Developer
          </h3>
          <div className="text-textColor flex gap-[6px] items-center text-md">
            <MdOutlineComputer className="" />
            <span className="font-semibold">Developer</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-fit sm:w-[110px] md:w-[140px] flex gap-1 md:gap-2">
            <SlLocationPin className="md:text-md" />
            <p>Remote</p>
          </div>
          <div className="w-fit sm:w-[110px] md:w-[140px] flex gap-1 md:gap-2">
            <FaRegClock className="md:text-md" />
            <p>Full Time</p>
          </div>
          <div className="w-fit sm:w-[130px] md:w-[140px] flex gap-1 md:gap-2">
            <FaRegCalendar className="md:text-md" />
            <p>04 March 2025</p>
          </div>
        </div>
      </div>

      {/* requirement */}
      <div className="flex mt-16 flex-col md:flex-row justify-between h-full gap-10 relative">
        <div className="flex flex-col gap-16">
          <div className="text-secondColor">
            Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies
            sed habitant malesuada in. Lectus eu imperdiet in at sed. Cras
            mauris feugiat fusce eget dolor eu a dui consequat. Nisl maecenas
            lectus quisque morbi vitae morbi id purus ultricies. Vel nunc tortor
            adipiscing ultrices id. Dis imperdiet egestas non faucibus quis
            fames cras. Lorem ac tellus tincidunt tempor nam odio imperdiet.
          </div>

          {/* Requirement */}
          <MiniList
            title="Requirement"
            list={[
              "Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed.",
              "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam.",
              "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit.",
              "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
            ]}
          />
          {/* Responsibility */}
          <MiniList
            title="Responsibility"
            list={[
              "Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed.",
              "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam.",
              "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit.",
              "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
            ]}
          />

          {/* Benefit & Allowance */}
          <MiniList
            title="Benefit & Allowance"
            list={[
              "Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed.",
              "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam.",
              "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit.",
              "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
            ]}
          />
        </div>
        <div className="md:w-[2px] h-[2px] w-full md:h-auto bg-thirdBgColor block"></div>

        {/* Sticky Section */}
        <div className="w-full md:w-[300px] flex-shrink-0 flex sticky top-24 justify-center md:justify-end h-fit">
          <div
            id="apply-container"
            className="w-full md:w-64 md:h-64 flex flex-col gap-12"
          >
            {/* Button with dynamic class for fixed or static positioning */}
            <Link
              className={`w-[90%] ${
                isSticky
                  ? "md:static md:w-full md:translate-x-0 w-full"
                  : "fixed left-1/2 bottom-10 transform -translate-x-1/2 md:static md:translate-x-0"
              }`}
              href={`/careers/${1}/apply`}
            >
              <Button className="w-full text-navbarBgColor bg-textColor hover:bg-textColor hover:text-navbarBgColor">
                Apply Now
              </Button>
            </Link>

            {/* Social Sharing */}
            <div className="flex flex-col gap-7">
              <span className="text-thirdBgColor font-semibold md:text-md lg:text-lg">
                Share with
              </span>
              <span className="text-sm flex gap-1">
                <Image src={"/copy.svg"} alt="Copy" width={15} height={15} />
                <span>Copy link</span>
              </span>
              <span className="text-sm flex gap-1">
                <Image
                  src={"/linkedin.svg"}
                  alt="LinkedIn"
                  width={15}
                  height={15}
                />
                <span>LinkedIn</span>
              </span>
              <span className="text-sm flex gap-1">
                <Image
                  src={"/facebook.png"}
                  alt="Facebook"
                  width={18}
                  height={13}
                />
                <span>Facebook</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
