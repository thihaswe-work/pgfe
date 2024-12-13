import Image from "next/image";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-[170px] md:w-[273px] relative ">
        <Image
          style={{
            clipPath:
              "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
          }}
          className="absolute left-0 bottom-2 md:w-[139px] md:h-[161px]"
          src={"/vector-6.png"}
          alt={"avatar"}
          width={87}
          height={100}
        />
        <Image
          style={{
            clipPath:
              "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
          }}
          className="absolute top-24 md:top-3 right-14 md:w-[101px] md:h-[116px]"
          src={"/vector-2.png"}
          alt={"avatar"}
          width={62}
          height={72}
        />
        <Image
          style={{
            clipPath:
              "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
          }}
          className="absolute bottom-0 right-4 md:w-[121px] md:h-[140px]"
          src={"/vector-7.png"}
          alt={"avatar"}
          width={75}
          height={87}
        />
      </div>
      <div className="flex text-center flex-col flex-1 justify-center">
        <div className="text-md md:text-lg  font-bold">
          Get Rating 9 out of 10.
        </div>
        <div className="text-base">Review from 5.6 k</div>
      </div>
    </div>
  );
};

export default ProfileSection;
