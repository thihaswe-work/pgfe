import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface Prop {
  image?: string | StaticImageData;
  title: string;
  companyName: string;
  jobType: string;
  salary: string;
  requirement: string;
  deadline: string;
}
export function JobCard({
  image,
  title,
  companyName,
  jobType,
  salary,
  requirement,
  deadline,
}: Prop) {
  return (
    <Card className={"w-full  h-[400px] p-0 box-border overflow-hidden"}>
      <div className="flex w-full gap-3 h-full">
        {/* {image part} */}
        <div className="w-1/4 md:w-1/3 lg:w-1/2 h-[100%] relative">
          <Image src={image ? image : "/jobCard.png"} alt="jobs image" fill />
        </div>

        {/* jobs part */}
        <div className="w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-5 py-8 px-3">
          {/* job title */}
          <h3 className="text-[#007AFF] text-xl font-medium">{title}</h3>

          {/* company info */}
          <div className="text-sm md:text-md lg:text-base">
            <h5 className="text-black font-medium">{companyName}</h5>
            <div className="text-thirdBgColor">
              <div className=" flex">
                <div className="w-1/3">Job Type</div>
                <div className="">:</div>
                <div className="w-2/3 pl-2">{jobType}</div>
              </div>
              <div className="flex">
                <span className="w-1/3">Salary</span>
                <span>:</span>
                <span className="w-2/3 pl-2">{salary}</span>
              </div>
              <div className="flex">
                <span className="w-1/3">Requirement</span>
                <span>:</span>
                <span className="w-2/3 pl-2">{requirement}</span>
              </div>
            </div>
          </div>

          {/*form dead line */}
          <div className="flex text-sectionColor">
            <span className="w-1/3">Form Close</span>
            <span>:</span>
            <span className="w-2/3 pl-2 font-bold ">{deadline}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
