import ImpactCard from "@/components/home/impactCard";

import PageScroll from "../../components/aboutus/pageScroll";

export default function AboutPage() {
  return (
    <div>
      {/* text */}
      <div className="container mx-auto">
        <div className=" flex flex-col justify-center text-2xl font-bold items-center max-w-[900px] mx-auto py-20">
          <div className=" text-[60px] text-textColor text-center ">
            Why the company name is passionGeek?
          </div>
          <div className="text-secondBgColor text-center text-md mx-auto">
            We are passionate web developer with a knack for creating engaging
            user experiences. My portfolio showcases a variety of projects that
            highlight my skills in front-end development and design.
          </div>
        </div>
      </div>
      {/* impact */}
      <div></div>
      <PageScroll />
      <div className="container mx-auto py-11">
        <div className="flex justify-between">
          <div className="w-[50%] max-w-[648px] flex justify-center items-center text-2xl font-semibold">
            WHAT WE DO
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-[50%]  max-w-[648px] gap-3">
            <div className="col-span-1 row-span-1">
              <ImpactCard count={"UI/UX designer"} countClassName="text-lg" />
            </div>
            <div className="col-span-1 row-span-1">
              <ImpactCard count={"UI/UX designer"} countClassName="text-lg" />
            </div>
            <div className="col-span-1 row-span-1">
              <ImpactCard count={"UI/UX designer"} countClassName="text-lg" />
            </div>
            <div className="col-span-1 row-span-1">
              <ImpactCard count={"UI/UX designer"} countClassName="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
