import { aboutIcons } from "@/lib/data";
import { cookies } from "next/headers";
import Image from "next/image";

interface Icon {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
}

const IconSection = async () => {
  const response = await aboutIcons();
  const icons: Icon[] = response.data;
  return (
    <div className="w-full flex justify-center flex-wrap my-[44px] md:my-[64px]">
      {icons.map((icon, index) => {
        return (
          <div
            className="text-center text-gray-50 font-semibold tracking-wide"
            key={icon.id}
          >
            <Image
              src={icon.image ?? "/xdistburite.png"}
              alt={""}
              width={147}
              height={65}
            />
            <span>Xdistburite</span>
          </div>
        );
      })}
    </div>
  );
};

export default IconSection;
