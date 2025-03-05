import Image from "next/image";
import PageScroll from "../../components/aboutus/pageScroll";

export default function AboutPage() {
  return (
    <div>
      {/* text */}
      <div className="container mx-auto">
        <div className=" flex flex-col justify-center text-2xl font-bold items-center max-w-[900px] mx-auto py-20">
          <div className=" text-[48px] text-textColor text-center ">
            WHY THE COMPANY NAME IS PASSIONGEEK?
          </div>
          <div className="text-secondColor text-center text-lg mx-auto">
            We are passionate web developer with a knack for creating engaging
            user experiences. My portfolio showcases a variety of projects that
            highlight my skills in front-end development and design.
          </div>
        </div>
      </div>
      {/* impact */}
      <div className="">
        <PageScroll />
      </div>

      <div className="pb-[88px]">
        {/* photos 1*/}
        <div className="grid grid-cols-7 grid-rows-2 h-[354px] gap-3 py-3">
          {/* s1 */}
          <div className="col-span-2 row-span-2 grid gird-cols-2 gap-3 gird-rows-2">
            <div className="col-span-2 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>

          {/* s2 */}
          <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-4 gap-3">
            <div className="col-span-1 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-2  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2 row-span-2  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>

          {/* s3 */}
          <div className="col-span-1 row-span-2  ">
            <Image
              alt="image"
              src="/home1.svg"
              width={100}
              height={100}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* s4 */}
          <div className="col-span-2 row-span-2 grid grid-cols-5 grid-rows-4 gap-3">
            <div className="col-span-2 row-span-2  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2 row-span-2  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-5 row-span-2  ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="text-center max-w-[900px] mx-auto flex flex-col items-center gap-6 py-11 font-semibold">
          <h1 className="text-textColor text-3xl ">CORE VALUES</h1>
          <p className="text-secondColor text-md">
            Software is our craft and we back it up with our relentless
            investments in R&D. So much so that we prefer to own the entire
            technology stack, including running our data centers globally.
          </p>
        </div>

        {/* photo 2 */}
        <div className="grid grid-cols-6 grid-rows-2 py-3 gap-3 h-[354px]">
          <div className="col-span-1 row-span-2   ">
            <Image
              alt="image"
              src="/home1.svg"
              width={100}
              height={100}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="col-span-3 row-span-2  grid grid-cols-3 grid-rows-2 gap-3">
            <div className="col-span-3 row-span-1 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
          <div className=" col-span-2 row-span-2 grid grid-cols-5 grid-rows-4 gap-3">
            <div className="col-span-1 row-span-1 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2 row-span-2 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-2 row-span-2 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 row-span-1 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
            <div className="col-span-5 row-span-2 ">
              <Image
                alt="image"
                src="/home1.svg"
                width={100}
                height={100}
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
