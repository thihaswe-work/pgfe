"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const CustomMarquee = ({ direction }: { direction?: boolean }) => {
  return (
    <div>
      <Marquee
        className="text-lg font-bold w-full"
        direction={`${direction ? "right" : "left"}`}
        speed={50}
      >
        <div className="flex items-center gap-10 pr-10">
          {/* Add pr-40 */}
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <div
                key={item}
                className="flex items-center gap-3 text-base w-[487px] h-[103px] p-2 rounded-lg border border-thirdBgColor"
              >
                <div className="relative w-[62px] h-[72px] flex-shrink-0">
                  <Image
                    style={{
                      clipPath:
                        "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
                    }}
                    className="object-cover"
                    src={"/vector-2.png"}
                    alt={"avatar"}
                    fill
                  />
                </div>
                <div className=" flex flex-col gap-1 h-full">
                  <h3 className="flex-shrink-0 text-thirdBgColor">tut p</h3>
                  <span className="text-xs flex-shrink overflow-hidden text-secondary">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde dolorum ex molestiae ratione necessitatibus cumque
                    illum quae, commodi eligendi dolorem amet cupiditate !
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
