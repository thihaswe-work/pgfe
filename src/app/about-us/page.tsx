import HeroSection from "@/components/aboutUsPage/heroSection";
import IconSection from "@/components/aboutUsPage/iconSection";
import ProfileAndYear from "@/components/aboutUsPage/profileAndYear";
import Testimonials from "@/components/homepage/testimonials";
import {
  aboutSectionOneData,
  aboutSectionThreeData,
  aboutSectionTwoData,
} from "@/lib/data";

import Image from "next/image";

export default async function AboutPage() {
  const rectangleImage = "/rectangle.png";
  const maskGroupImage = "/mask-group.png";

  const sectionOneResponse = await aboutSectionOneData();
  const sectionTwoResponse = await aboutSectionTwoData();
  const sectionThreeResponse = await aboutSectionThreeData();

  return (
    <div>
      <div className="w-full h-[198px] relative flex justify-center items-center ">
        <span className="z-10 text-1xl font-bold">
          {sectionOneResponse?.data?.title ?? "About Us"}
        </span>
        <Image
          src={
            sectionOneResponse?.data?.image
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${sectionOneResponse.data.image}`
              : maskGroupImage
          }
          alt="about-us photo"
          fill
        />
      </div>
      {/* hero section */}

      <div className="px-[14px] md:px-[56px] lg:p-[45px] flex flex-col lg:gap-[120px] my-[120px] relative overflow-hidden ">
        <HeroSection
          layout={"right"}
          image={
            sectionTwoResponse?.data?.image
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${sectionTwoResponse.data.image}`
              : rectangleImage
          }
          title={sectionTwoResponse?.data?.title ?? "What We’re Doing?"}
          desc={
            sectionTwoResponse?.data?.desc ??
            `Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in.
      Lectus eu imperdiet in at sed. Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non
      faucibus quis fames cras. Lorem ac tellus tincidunt tempor nam odio imperdiet. Neque parturient
      vestibulum vestibulum in turpis urna cursus est cras. Proin at id vulputate pulvinar. Fames sapien ac quis suscipit.
      Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.

      Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies.
      Cras mauris feugiat fusce eget dolor eu a dui consequat. Et pretium
      viverra quam et nisi vestibulum vel. Faucibus aliquet risus massa tristique ultricies.
      Nulla aliquam scelerisque lacus id feugiat. Nec senectus urna proin proin sit. Accumsan id amet sit quam.
      Interdum elit ullamcorper imperdiet non neque dictum egestas massa lorem.`
          }
        />
        <HeroSection
          layout={"left"}
          image={
            sectionThreeResponse?.data?.image
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${sectionThreeResponse.data.image}`
              : maskGroupImage
          }
          title={
            sectionThreeResponse?.data?.title ?? "How Did We Build Our Team?"
          }
          desc={
            sectionThreeResponse?.data?.desc ??
            `Lorem ipsum dolor sit amet consectetur. Natoque phasellus ultricies sed habitant malesuada in. Lectus eu
        imperdiet in at sed. Vel nunc tortor adipiscing ultrices id. Dis imperdiet egestas non faucibus quis fames cras.
        Lorem ac tellus tincidunt tempor nam odio imperdiet. Neque parturient vestibulum vestibulum in turpis urna cursus est cras.
        Proin at id vulputate pulvinar. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat
        viverra duis.`
          }
        />
        <Image
          src={"/gradient.png"}
          alt={"gradient image"}
          className="w-[945px] h-[386px] absolute -right-52 -bottom-10"
          width={0}
          height={0}
        />
      </div>
      {/* profile and year section */}
      <div className="relative ">
        <ProfileAndYear />
        <Image
          src={"/gradientLeft.png"}
          alt="gradient left"
          width={0}
          height={0}
          className=" w-[945px] h-[386px] absolute top-32 -left-56"
        />
      </div>
      {/* {testimonials section} */}
      <div className=" px-[14px] lg:px-[45px] w-full h-full">
        <Testimonials />
      </div>
      {/* {icon section} */}
      <IconSection />
    </div>
  );
}
