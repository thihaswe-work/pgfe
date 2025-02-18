import MiniList from "@/components/careers/CustomMini";
import { Button } from "@/components/ui/button";
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineComputer } from "react-icons/md";
import Image from "next/image";

export default async function Page() {
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
      <div className="flex mt-16 flex-col md:flex-row justify-between h-full gap-10 relative">
        <div className="flex flex-col gap-16 ">
          <div>
            Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies
            sed habitant malesuada in. Lectus eu imperdiet in at sed. . Cras
            mauris feugiat fusce eget dolor eu a dui consequat. Nisl maecenas
            lectus quisque morbi vitae morbi id purus ultricies. Vel nunc tortor
            adipiscing ultrices id. Dis imperdiet egestas non faucibus quis
            fames cras. Lorem ac tellus tincidunt tempor nam odio imperdiet.
          </div>

          {/* Requirement */}
          <MiniList
            title="Requirement"
            list={[
              "lLorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed. ",
              "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam,",
              "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. ",
              "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
            ]}
          />
          {/* Responsibility */}
          <MiniList
            title="Responsibility"
            list={[
              "lLorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed. ",
              "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam,",
              "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. ",
              "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
            ]}
          />

          {/* Benefit & Allowance */}
          <MiniList
            title="Benefit & Allowance"
            list={[
              "lLorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu imperdiet in at sed. ",
              "Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam,",
              "Neque parturient vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. ",
              "Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.",
            ]}
          />
        </div>
        <div className="md:w-[2px] h-[2px] w-full md:h-auto bg-thirdBgColor block "></div>
        <div className="w-full md:w-[300px] flex-shrink-0 flex justify-center md:justify-end">
          <div className="w-full md:w-64 md:h-64 flex flex-col items-center gap-16">
            <Button className="text-navbarBgColor bg-textColor w-[90%] fixed bottom-10 md:static mx-5 md:mx-0">
              Apply Now
            </Button>
            <div className="flex flex-col gap-7">
              <span className="text-thirdBgColor font-semibold">
                Share with
              </span>
              <span className="text-sm flex gap-1">
                <span>
                  <Image src={"/copy.svg"} alt="image" width={15} height={15} />
                </span>
                <span>Copy link</span>
              </span>
              <span className="text-sm flex gap-1">
                <span>
                  <Image
                    src={"/linkedin.svg"}
                    alt="image"
                    width={15}
                    height={15}
                  />
                </span>
                <span>Linkedin</span>
              </span>
              <span className="text-sm flex gap-1">
                <span>
                  <Image
                    src={"/facebook.svg"}
                    alt="image"
                    width={15}
                    height={15}
                  />
                </span>
                <span>Facebook</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
