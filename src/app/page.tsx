import Section1 from "@/components/homepage/section1";
import Section2 from "@/components/homepage/section2";
import Section3 from "@/components/homepage/section3";
import Section4 from "@/components/homepage/section4";
import Testimonials from "@/components/homepage/testimonials";
export default function Home() {
  return (
    <div className="">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div className=" bg-secondBgColor">
        <Testimonials />
      </div>
    </div>
  );
}
