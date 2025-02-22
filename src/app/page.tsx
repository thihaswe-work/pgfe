import HomeSwiper from "@/components/home/homeSwiper";
import MilestoneCarousel from "@/components/home/mileStoneCarousel";
import Upper from "@/components/home/upper";

export default function Home() {
  return (
    <div className="">
      <Upper />
      <HomeSwiper />
      {/* <MilestoneCarousel /> */}
    </div>
  );
}
