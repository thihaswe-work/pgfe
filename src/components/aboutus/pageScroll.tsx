"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const PageScroll = () => {
  const helloRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [opacityStates, setOpacityStates] = useState<number[]>(
    Array(2).fill(1)
  );
  const [isBlurred, setIsBlurred] = useState(false); // State to manage blur effect

  // Intersection Observer to handle when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const isAnyHelloInView = entries.some(
          (entry: IntersectionObserverEntry) => entry.isIntersecting
        );

        // Apply blur when any div is in view
        setIsBlurred(isAnyHelloInView);
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0, // Trigger when any part of the element is visible
      }
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
  }, []); // Empty dependency array ensures it runs only once

  // Scroll handler for opacity change
  useEffect(() => {
    const handleScroll = () => {
      const updatedOpacities = [...opacityStates];
      helloRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < 148) {
            updatedOpacities[index] = 0;
          } else {
            updatedOpacities[index] = 1;
          }
        }
      });
      setOpacityStates(updatedOpacities);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once to initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures it runs only once

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

          {/* Background Image with dynamic blur effect */}
          <Image
            src={"/aboutusbg.svg"}
            alt="aboutus"
            width={100}
            height={100}
            className={`object-cover w-full h-[calc(100vh-168px)] transition-all duration-500`}
            style={{
              filter: isBlurred ? "blur(8px)" : "none", // Apply blur when in view
            }}
          />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 flex flex-col">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                helloRefs.current[index] = el;
              }}
              className="h-[calc(100vh-168px)] flex  text-background justify-center text-5xl font-bold gap-11 items-center transition-opacity duration-500"
              style={{ opacity: opacityStates[index] }}
            >
              <div className="flex justify-center items-center w-[50%] max-w-[648px] text-3xl font-bold">
                Our Vision
              </div>
              <div className="flex justify-center items-center w-[50%] max-w-[648px] text-md ">
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
