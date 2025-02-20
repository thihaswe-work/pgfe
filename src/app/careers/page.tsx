import BannerCareer from "@/components/careers/bannerCareer";
import Paginated from "@/components/careers/paginated";

export default function CareersPage() {
  return (
    <div className="mb-20 w-full relative">
      <BannerCareer />

      <Paginated />
    </div>
  );
}
