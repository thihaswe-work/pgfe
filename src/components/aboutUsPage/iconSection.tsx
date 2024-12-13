import Image from "next/image";

const IconSection = () => {
  const icons = [1, 2, 3, 4, 5];
  return (
    <div className="w-full flex justify-center flex-wrap my-[44px] md:my-[64px]">
      {icons.map((icon, index) => {
        return (
          <div
            className="text-center text-gray-50 font-semibold tracking-wide"
            key={index}
          >
            <Image src={"/xdistburite.png"} alt={""} width={147} height={65} />
            <span>Xdistburite</span>
          </div>
        );
      })}
    </div>
  );
};

export default IconSection;
