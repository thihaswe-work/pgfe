"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const PageScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const helloRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if any "hello" section is intersecting (in view)
        const isAnyHelloInView = entries.some((entry) => entry.isIntersecting);
        setIsScrolled(isAnyHelloInView); // Set state to true if any hello section is in view
      },
      { threshold: 0.1 } // Adjust how much of the "hello" section needs to be visible to trigger
    );

    // Observe each "hello" div
    helloRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      helloRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="relative py-[88px]">
        {/* Sticky Section */}
        <div className="flex flex-col gap-11 h-screen sticky top-0">
          <h1 className="text-[80px] font-bold flex gap-5 justify-center tracking-wider h-32">
            <span>What </span>
            <span>is</span>
            <span className="text-textColor">Passion</span>
            <span className="text-textColor">Geek?</span>
          </h1>

          {/* Background Image with dynamic opacity */}
          <Image
            src={"/aboutus.svg"}
            alt="aboutus"
            width={100}
            height={100}
            className={`object-cover w-full h-[calc(100vh-168px)] -z-10 transition-opacity duration-500 ${
              isScrolled ? "opacity-50" : "opacity-100"
            }`} // Apply opacity change based on visibility of "hello" div
          />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 flex flex-col ">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                helloRefs.current[index] = el;
              }}
              className="h-[calc(100vh-168px)] flex justify-center text-5xl font-bold gap-11 items-center"
            >
              <div className="flex justify-center items-center w-[50%] max-w-[648px] text-3xl font-bold">
                Our Vision
              </div>
              <div className="flex justify-center items-center w-[50%] max-w-[648px] text-md text-secondary">
                Lorem ipsum dolor sit amet consectetur. Natoque phasellus
                ultricies sed habitant malesuada in. Lectus eu imperdiet in at
                sed. Vel nunc tortor adipiscing ultrices id. Dis imperdiet
                egestas non faucibus quis fames cras. Lorem ac tellus tincidunt
                tempor nam odio imperdiet. Neque parturient vestibulum
                vestibulum in turpis urna cursus est cras. Proin at id vulputate
                pulvinar. Fames sapien ac quis suscipit. Vitae at sed euismod
                nunc. Scelerisque etiam viverra consequat viverra duis.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageScroll;
