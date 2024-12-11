import Link from "next/link";
import React from "react";
import FooterNav from "./footerNav";
import { footerData } from "@/app/lib/data";

const Footer = async () => {
  const FOOTER_LINK = [
    {
      href: "/",
      label: "Home /",
    },
    {
      href: "/about-us",
      label: "About Us /",
    },
    {
      href: "/product",
      label: "Product /",
    },
    {
      href: "/careers",
      label: "Careers /",
    },
    {
      href: "/blogs",
      label: "Blogs /",
    },
    {
      href: "/contact",
      label: "Contacts  /",
    },
  ];

  const response = await footerData();

  return (
    <div className="">
      <div className="flex gap-5 my-5 lg:px-[50px] px-[13px] flex-col lg:flex-row">
        {/* {left side} */}
        <div className="flex flex-1 flex-col gap-10 ">
          <div className="flex gap-2">
            <span className="text-3xl">PassionGeek</span>
            <span className="flex items-start">&#129109;</span>
          </div>
          <span className="lg:flex-1"></span>
          <div className="flex flex-1 flex-wrap">
            {FOOTER_LINK.map((item) => {
              return (
                <Link href={item.href} className="w-1/3" key={item.href}>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* {mid side} */}
        <div className="flex flex-1 lg:gap-10">
          <div className="flex flex-1 flex-col gap:10 ">
            <span className="lg:flex-1"></span>
            <div className="flex flex-col flex-1">
              <span className="text-[12px] text-gray-600">CONTACT US</span>
              <span className="">
                {response.data.contact ?? "+09998876554"}
              </span>
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[12px] text-gray-600">EMAIL</span>
              <span className="">
                {response.data.email ?? "passiongeek@logoipsum.com"}
              </span>
            </div>
          </div>
        </div>

        {/* {right side} */}
        <div className="flex  flex-1 flex-col  ">
          <span className=" justify-end hidden lg:flex">
            <FooterNav />
          </span>
          <div className="flex flex-col flex-1">
            <span className="text-[12px] text-gray-600">ADDRESS</span>
            <span className="">
              {response.data.address ??
                " 2118 Thornridge Cir. Syracuse, Connecticut 35624"}
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[12px] text-gray-600">OPENING HOURS</span>
            <span className="">{response.data.openhour ?? "9am—6pm"}</span>
          </div>
        </div>
        <div className="justify-end flex lg:hidden">
          <FooterNav />
        </div>
      </div>
      <span className="bg-sectionColor h-10 w-full  flex items-center justify-center">
        Copyright © PassionGeek | Powered by PassionGeek
      </span>
    </div>
  );
};

export default Footer;
