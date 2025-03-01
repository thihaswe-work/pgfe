import HomeCard from "@/components/home/homeCard";
import VerticalTimelineSwiper from "@/components/home/homeSwiper";
import CustomMarquee from "@/components/home/marquee";
import Upper from "@/components/home/upper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Upper />

      <div className="relative   ">
        <div className="flex flex-col  ">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`${
                i % 2 ? "flex-row-reverse" : "flex-row"
              } flex gap-16 items-center h-[50vh] flex-shrink-0`}
            >
              <div className="h-[585px] flex items-center">
                <Image
                  src={`/home${i + 1}.svg`}
                  alt="home first image"
                  width={100}
                  height={100}
                  className=" w-full  h-[280px]  object-cover"
                />
              </div>

              <div className={`flex flex-col  w-[25%] `}>
                <h3 className="text-xl font-bold ">300+</h3>
                <span className="text-lg font-bold">IN HOUSE STAFFS</span>
                <p className="text-thirdBgColor">
                  Nisl maecenas lectus quisque morbi vitae morbi id purus
                  ultricies. Cras mauris feugiat fusce eget dolor eu a dui
                  consequat.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VerticalTimelineSwiper />

      <div className="py-11 container mx-auto">
        {/* <h3 className="mb-5">Popular Blog</h3> */}
        <div className="flex justify-between flex-wrap max-w-[1126px] mx-auto">
          <div className="w-[30%] max-w-[315px]">
            <HomeCard
              img={"/blog.svg"}
              title={"User Center Design"}
              desc={
                "lorem ipsum dolar isat amt lorem ipsum dolar isat amt lorem  dolar isat amt ipsum dolar dolar ipsum isat amt loremdolar ipsum dolar isat amt ipsum dolar "
              }
            />
          </div>
          <div className="w-[30%] max-w-[315px]">
            <HomeCard
              img={"/blog.svg"}
              title={"User Center Design"}
              desc={
                "lorem ipsum dolar isat amt lorem ipsum dolar isat amt lorem  dolar isat amt ipsum dolar dolar ipsum isat amt loremdolar ipsum dolar isat amt ipsum dolar "
              }
            />
          </div>
          <div className="w-[30%] max-w-[315px]">
            <HomeCard
              img={"/blog.svg"}
              title={"User Center Design"}
              desc={
                "lorem ipsum dolar isat amt lorem ipsum dolar isat amt lorem  dolar isat amt ipsum dolar dolar ipsum isat amt loremdolar ipsum dolar isat amt ipsum dolar "
              }
            />
          </div>
        </div>
      </div>

      <div className=" py-6">
        <div className="items-center text-center max-w-[800px] gap-10 mx-auto flex flex-col justify-center">
          <h1 className="font-bold text-[40px] ">
            We’d like to ask you a few questions to better understand your
            software development needs.
          </h1>
          <Button className="py-5 px-10 rounded-md bg-textColor w-fit h-fit flex gap-3 hover:bg-textColor font-semibold">
            <Image src={"/book.png"} alt="" width={10} height={10} />
            <span> Contact Now</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-10  py-20 relative overflow-hidden">
        <CustomMarquee />
        <CustomMarquee direction={true} />
        <CustomMarquee />
        <Image
          src={"/homebg.svg"}
          alt="homeleft"
          width={100}
          height={100}
          className="h-full absolute w-[774px] left-0 object-cover -translate-x-[50%] z-10"
        />
        <Image
          src={"/homebg.svg"}
          alt="homeleft"
          width={100}
          height={100}
          className="h-full absolute w-[774px] right-0 object-cover translate-x-[50%] z-10"
        />
      </div>
    </div>
  );
}
