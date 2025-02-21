"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Upper = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Scroll effect for shrinking the image
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (photoRef.current) {
      const shrinkFactor = Math.max(1 - scrollPosition / 300, 0.1);
      setScale(shrinkFactor);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      {/* text header */}
      <div className=" font-bold text-[65px] 2xl:text-[120px] sticky top-0 bg-background w-full  z-10">
        <div className=" container mx-auto text-center">
          <div className="flex gap-5 justify-center">
            <span>Inspire</span>
            <span className="text-textColor">Creativity</span>
          </div>
          <div className="flex justify-center gap-5">
            <span className="text-textColor">Enrich</span>
            <span>Life</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col container mx-auto ">
        <div className="bg-red-200 h-screen flex justify-center" ref={photoRef}>
          <div className="h-96"></div>
          {/* <div className="relative w-[50vw] h-[50vh] -z-10"> */}
          <Image
            src="/logo.png"
            alt="home image"
            width={100}
            height={100}
            className={`object-cover bg-white w-full h-[500px]`}
            style={{
              transform: `scale(${scale})`, // Apply the dynamic scaling
              // Smooth scaling transition
            }}
          />
          {/* </div> */}
        </div>
        <div className="bg-green-200 h-screen"></div>
      </div>
    </div>
  );
};

export default Upper;
