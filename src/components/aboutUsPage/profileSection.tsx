import Image from "next/image";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="flex-1 relative ">
        <Image
          style={{
            clipPath:
              "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
          }}
          className="absolute left-0 bottom-2"
          src={"/vector-6.png"}
          alt={"avatar"}
          width={139}
          height={161}
        />
        <Image
          style={{
            clipPath:
              "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
          }}
          className="absolute top-3 right-14"
          src={"/vector-2.png"}
          alt={"avatar"}
          width={101}
          height={116}
        />
        <Image
          style={{
            clipPath:
              "polygon(0 30%, 51% 0, 100% 29%, 100% 73%, 51% 100%, 0 71%)",
          }}
          className="absolute bottom-0 right-4"
          src={"/vector-7.png"}
          alt={"avatar"}
          width={121}
          height={140}
        />
      </div>
      <div className="flex text-center flex-col flex-1 justify-center">
        <div className="text-lg font-bold">Get Rating 9 out of 10.</div>
        <div className="text-base">Review from 5.6 k</div>
      </div>
    </div>
  );
};

export default ProfileSection;
