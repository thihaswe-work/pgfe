import { aboutIcons } from "@/lib/data";
import Image from "next/image";

interface Icon {
  id: number;
  image: string;
  created_at: string;
  updated_at: string;
}

const IconSection = async () => {
  const response = await aboutIcons();
  const icons: Icon[] = response ? response.data : undefined;

  return (
    <div className="w-full flex justify-center flex-wrap my-[44px] md:my-[64px]">
      {!icons
        ? [1, 2, 3, 4, 5].map((icon, index) => {
            return (
              <div
                className="text-center text-gray-50 font-semibold tracking-wide"
                key={index}
              >
                <Image
                  src={"/xdistburite.png"}
                  alt={""}
                  width={147}
                  height={65}
                />
                <span>Xdistburite</span>
              </div>
            );
          })
        : icons.map((icon) => {
            return (
              <div
                className="text-center text-gray-50 font-semibold tracking-wide"
                key={icon.id}
              >
                <Image
                  src={
                    icon.image
                      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${icon.image}`
                      : "/xdistburite.png"
                  }
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
