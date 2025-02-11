/* eslint-disable @typescript-eslint/no-unused-vars */
import Banner from "@/components/banner";
import Image from "next/image";
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <Banner image={"/blogs.svg"} title={"Blogs"} />
      <div className=" py-10 mt-36 w-full relative overflow-hidden">
        <div className="flex flex-col gap-10 mb-10 px-2 md:px-3 lg:px-0 container mx-auto">
          {/* breadcrumb */}
          <h3>{"Blog > Current Events"}</h3>

          {/* title */}
          <h3 className="text-lg">
            The Future of Web Development: Trends Shaping 2025 and Beyond
          </h3>

          {/* content */}
          <div className="flex flex-col w-full">
            {/* photos */}
            <div className="w-full grid grid-cols-2 grid-rows-3 md:grid-rows-2 gap-x-7 gap-y-4 h-[800px] md:h-[488px] xl:h-[600px] py-8">
              <div className="relative col-span-2 row-span-1 md:col-span-1 md:row-span-2">
                <Image
                  src={"/blog1.svg"}
                  alt="image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative col-span-2 row-span-1 md:col-span-1 md:row-span-1 ">
                <Image
                  src={"/blog4.svg"}
                  alt="image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative col-span-2 row-span-1 md:col-span-1 md:row-span-1">
                <Image
                  src={"/blog2.svg"}
                  alt="image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="flex gap-2 col-span-2">
                <span className="h-6 w-[2px] bg-navbarBgColor"></span>
                <span className="">Image Caption goes here</span>
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <span className="mb-5 text-md">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                nulla odio nisl vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada fringilla.
              </span>
              <span className="">
                Collaboratively deploy intuitive partnerships whereas customized
                e-markets. Energistically maintain performance based strategic
                theme areas whereas just in time methodologies.
                Phosfluorescently drive functionalized intellectual capital and.
              </span>
            </div>
            <div className="py-4 pl-6">
              <div className="flex gap-2">
                <span className="h-6 w-[2px] bg-navbarBgColor"></span>
                <span className="">
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus.
                </span>
              </div>
            </div>
            <div className="py-4">
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </div>

            {/* conclusion */}
            <div className="py-6 ">
              <h3 className="font-bold text-1xl mb-5">Conclusion</h3>
              <div className="flex flex-col gap-4">
                <span>
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                  Tellus id scelerisque est ultricies ultricies. Duis est sit
                  sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus
                  habitasse.
                </span>
                <span>
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                  condimentum mi massa. In tincidunt pharetra consectetur sed
                  duis facilisis metus. Etiam egestas in nec sed et. Quis
                  lobortis at sit dictum eget nibh tortor commodo cursus.
                </span>
                <span>
                  Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                  aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                  Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
                  consectetur dictum. Donec posuere pharetra odio consequat
                  scelerisque et, nunc tortor. Nulla adipiscing erat a erat.
                  Condimentum lorem posuere gravida enim posuere cursus diam.
                </span>
              </div>

              {/* bg color */}
            </div>
          </div>
        </div>

        <Image
          src={"/gradient.png"}
          alt="gradient bg photo"
          className=" absolute bottom-[3%] right-0"
          width={553}
          height={150}
        />
        <Image
          src={"/gradientLeft.png"}
          alt="gradient bg photo"
          className=" h-full -left-0 absolute -bottom-[50%]"
          width={553}
          height={100}
        />
      </div>
    </div>
  );
}
