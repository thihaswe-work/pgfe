import Link from "next/link";
import React from "react";

const Footer = () => {
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
      href: "/carrier",
      label: "Carrier /",
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
  return (
    <div className="">
      <div className="flex flex-col gap-5 px-10 mb-10">
        {/* {left side} */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-3xl">PassionGeek</span>
            <span className="flex items-start">&#129109;</span>
          </div>
          <span className=" ">
            <p className="text-black p-2 bg-white rounded-full text-sm">
              &#129033;
            </p>
          </span>
        </div>
        {/* {mid side} */}
        <div className="flex justify-between px-1">
          <span className="flex-1"></span>
          <div className="flex flex-col flex-1">
            <span className="text-[12px] text-gray-600">CONTACT US</span>
            <span className="">+09998876554</span>
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[12px] text-gray-600">ADDRESS</span>
            <span className="">2118 </span>
          </div>
        </div>
        {/* {right side} */}
        <div className="flex justify-between px-1">
          <div className="flex flex-1 flex-wrap">
            {FOOTER_LINK.map((item) => {
              return (
                <Link href={item.href} className="w-1/3" key={item.href}>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[12px] text-gray-600">EMAIL</span>
            <span className="">passiongeek@logoipsum.com</span>
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[12px] text-gray-600">OPENING HOURS</span>
            <span className="">9am-6pm</span>
          </div>
        </div>
      </div>
      <span className="bg-sectionColor h-10 w-full  flex items-center justify-center">
        Copyright © PassionGeek Powered by Dohmein
      </span>
    </div>
  );
};

export default Footer;
