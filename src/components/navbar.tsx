"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const PATHNAME = usePathname();
  const NAVBAR_LIST = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "about-us" },
    { id: 3, label: "Product", href: "product" },
    { id: 4, label: "Carrier", href: "carrier" },
    { id: 5, label: "Blogs", href: "blogs" },
    { id: 6, label: "Contact", href: "contact" },
  ];
  return (
    <div className="border-b border-gray-600 h-20 items-center flex justify-between px-[13px] lg:px-[50px]">
      <h3 className="text-textColor font-bold text-2xl w-1/2 ">PassionGeek</h3>
      <div className="lg:hidden cursor-pointer">
        <button id="menu-button" className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="gap-5 hidden w-1/2 justify-end lg:flex">
        {NAVBAR_LIST.map((item) => {
          return (
            <Link href={item.href} key={item.id}>
              <div
                className={`hover:text-textColor font-bold ${
                  PATHNAME === item.href ? "text-textColor" : ""
                }`}
              >
                {item.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
