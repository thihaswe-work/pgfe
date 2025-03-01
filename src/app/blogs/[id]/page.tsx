/* eslint-disable @typescript-eslint/no-unused-vars */

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
      <div className=" ">
        <div className="flex flex-col gap-16 mb-10 px-2 md:px-3 lg:px-0 container mx-auto py-16">
          {/* breadcrumb */}
          <h3>{"Blog > Current Events"}</h3>

          {/* title */}
          <div className="flex justify-between w-full items-center">
            <h3 className="text-2xl font-bold">
              The Future of Web Development: Trends Shaping 2025 and Beyond
            </h3>
            <h5 className="text-thirdBgColor text-md">{"Ui/Ux"}</h5>
          </div>

          {/* content */}
          <div className="flex flex-col w-full gap-8">
            {/* photos */}
            <div className=" ">
              <div className="relative w-full h-[500px]">
                <Image
                  src={"/blog1.svg"}
                  alt="image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="text-secondary">
              <h6 className="text-md text-thirdBgColor mb-3">
                26 February 2026
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros. Fames sapien ac quis suscipit.
                Vitae at sed euismod nunc. Scelerisque etiam viverra consequat
                viverra duis.Lorem ipsum dolor sit amet consectetur adipiscing
                elit. Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra
                consequat viverra duis.Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Suspendisse varius enim in eros. Fames sapien
                ac quis suscipit.
              </p>
            </div>
            <ul className="text-secondary">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. Suspendisse varius enim in eros. Fames sapien ac
                quisSuspendisse varius enim in eros. Fames sapien ac quis
                suscipit.Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. suscipit.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. Suspendisse varius enim in eros. Fames sapien ac
                quisSuspendisse varius enim in eros. Fames sapien ac quis
                suscipit.Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. suscipit.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.Suspendisse varius enim in eros. Fames sapien ac
                quisSuspendisse varius enim in eros. Fames sapien ac quis
                suscipit.Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. suscipit. Suspendisse varius enim in eros. Fames
                sapien ac quis suscipit.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.Suspendisse varius enim in eros. Fames sapien ac
                quisSuspendisse varius enim in eros. Fames sapien ac quis
                suscipit.Suspendisse varius enim in eros. Fames sapien ac quis
                suscipit. suscipit. Suspendisse varius enim in eros. Fames
                sapien ac quis suscipit.
              </li>
            </ul>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros. Fames sapien ac quis suscipit.
              Vitae at sed euismod nunc. Scelerisque etiam viverra consequat
              viverra duis.Lorem ipsum dolor sit amet consectetur adipiscing
              elit. Suspendisse varius enim in eros. Fames sapien ac quis
              suscipit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros. Fames sapien ac quis suscipit.
              Vitae at sed euismod nunc. Scelerisque etiam viverra consequat
              viverra duis.Lorem ipsum dolor sit amet consectetur adipiscing
              elit. Suspendisse varius enim in eros. Fames sapien ac quis
              suscipit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
