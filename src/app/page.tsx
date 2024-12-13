import Section1 from "@/components/homepage/section1";
import Section2 from "@/components/homepage/section2";
import Section3 from "@/components/homepage/section3";
import Section4 from "@/components/homepage/section4";
import Testimonials from "@/components/homepage/testimonials";
export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div className="px-[13px] md:px-[40px] lg:px-[50px]">
        <Testimonials />
      </div>
    </div>
  );
}
