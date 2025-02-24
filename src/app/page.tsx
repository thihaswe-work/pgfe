import HomeCard from "@/components/home/homeCard";
import HomeSwiper from "@/components/home/homeSwiper";
import CustomMarquee from "@/components/home/marquee";
import Upper from "@/components/home/upper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Upper />
      <div className="py-11 container mx-auto">
        <h3 className="mb-5">Popular Blog</h3>
        <div className="flex justify-between flex-wrap ">
          <div className="w-[30%] max-w-[315px]">
            <HomeCard
              img={"/home1.svg"}
              title={"User Center Design"}
              desc={"UI/UX"}
            />
          </div>
          <div className="w-[30%] max-w-[315px]">
            <HomeCard
              img={"/home1.svg"}
              title={"User Center Design"}
              desc={"UI/UX"}
            />
          </div>
          <div className="w-[30%] max-w-[315px]">
            <HomeCard
              img={"/home1.svg"}
              title={"User Center Design"}
              desc={"UI/UX"}
            />
          </div>
        </div>
      </div>
      <HomeSwiper />
      <div className="flex flex-col gap-10 border-b border-thirdBgColor pb-20">
        <CustomMarquee />
        <CustomMarquee direction={true} />
        <CustomMarquee />
      </div>

      <div className="container mx-auto flex justify-between">
        <div className="max-w-[545px] flex flex-col justify-center">
          <h1 className="font-bold text-[40px] ">
            Get a booking schedule with us.
          </h1>
          <Button className="py-5 px-10 rounded-md bg-textColor w-fit h-fit flex gap-3">
            <Image src={"/book.png"} alt="" width={10} height={10} />
            <span> Book Now</span>
          </Button>
        </div>
        <div className="relative w-[50%] max-w-[618px] h-[412px] ">
          <Image src={"/three.svg"} alt="" fill />
        </div>
      </div>
    </div>
  );
}
