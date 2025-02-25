import ImpactCard from "@/components/home/impactCard";

import PageScroll from "./pageScroll";

export default function AboutPage() {
  return (
    <div>
      {/* text */}
      <div className="container mx-auto">
        <div className="max-h-[436px] py-[88px] flex justify-center text-xl font-bold">
          <div className="max-w-[900px] max-h-[260px] text-center">
            We are passionate web developer with a knack for creating engaging
            user experiences. My portfolio showcases a variety of projects that
            highlight my skills in front-end development and design.
          </div>
        </div>
        <div></div>
      </div>
      {/* impact */}
      <div className="container mx-auto py-11">
        <div className="flex justify-between">
          <div className="w-[50%] max-w-[648px] flex justify-center items-center text-xl font-semibold">
            OUR IMPACT
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-[50%]  max-w-[648px] gap-3">
            <div className="col-span-1 row-span-1">
              <ImpactCard count={1000} label={"labels"} />
            </div>
            <div className="col-span-1 row-span-1">
              <ImpactCard
                count={1000}
                label={"labels"}
                countClassName="text-textColor"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ImpactCard count={1000} label={"labels"} />
            </div>
            <div className="col-span-1 row-span-1">
              <ImpactCard count={1000} label={"labels"} />
            </div>
          </div>
        </div>
      </div>

      <PageScroll />

      <div className="h-screen bg-yellow-500"></div>
    </div>
  );
}
