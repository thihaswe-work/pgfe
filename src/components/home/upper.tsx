"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ImpactCard from "./impactCard";
import HomeCard from "./homeCard";

const Upper = () => {
  const photoRef1 = useRef<HTMLDivElement>(null);
  const photoRef2 = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [scale1, setScale1] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Shrink Image 1 immediately
    if (photoRef1.current) {
      const shrinkFactor1 = Math.max(1 - scrollPosition / 500, 0.1);
      setScale1(shrinkFactor1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Sticky Header */}
      <div
        ref={headerRef}
        className="font-bold text-[65px] 2xl:text-[100px] sticky top-0 bg-background w-full z-10"
      >
        <div className="container mx-auto text-center">
          <div className="flex gap-5 justify-center">
            <span>Inspire</span>
            <span className="text-textColor">Creativity,</span>
          </div>
          <div className="flex justify-center gap-5">
            <span className="text-textColor">Enrich</span>
            <span>Life</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Image 1 */}
        <div className=" flex justify-center" ref={photoRef1}>
          <Image
            src="/home.svg"
            alt="home image"
            width={100}
            height={100}
            className="object-cover w-full h-[672px]"
            style={{ transform: `scale(${scale1})` }}
          />
        </div>

        {/* impact */}
        <div ref={photoRef2} className="flex">
          <div className="w-[50%]  flex justify-center items-center text-xl font-semibold">
            OUR IMPACT
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-[50%] gap-3">
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

        {/* blogs */}
        <div className="py-11">
          <h3 className="mb-5">Popular Blog</h3>
          <div className="flex justify-between">
            <div className="w-1/4">
              <HomeCard
                img={"/home1.svg"}
                title={"User Center Design"}
                desc={"UI/UX"}
              />
            </div>
            <div className="w-1/4">
              <HomeCard
                img={"/home1.svg"}
                title={"User Center Design"}
                desc={"UI/UX"}
              />
            </div>
            <div className="w-1/4">
              <HomeCard
                img={"/home1.svg"}
                title={"User Center Design"}
                desc={"UI/UX"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upper;
