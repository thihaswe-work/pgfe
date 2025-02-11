"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuBar from "./menuBar";
import { NAVBAR_LIST } from "@/util/navbarList";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const navbarList = NAVBAR_LIST;

  const [open, setOpen] = useState(false); // Start with the menu closed

  return (
    <div
      className={`${
        !open ? "" : ""
      }   h-20 items-center flex justify-between container mx-auto px-2 md:px-3 lg:px-0`}
    >
      <Link href={"/"}>
        <h3 className="relative h-12 w-40 cursor-pointer">
          <Image src={"/logo.png"} alt="logo" fill />
        </h3>
      </Link>

      {/* MenuBar for mobile view */}
      <div className={`text-center`}>
        <MenuBar open={open} setOpen={setOpen} />
      </div>

      {/* {menu bar button} */}
      <div className="lg:hidden cursor-pointer">
        <button
          id="menu-button"
          className="text-background"
          onClick={() => setOpen(!open)} // Toggle open state
        >
          {open ? (
            <div className="text-xl font-semibold">X</div>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <div className="gap-5 hidden w-1/2 justify-end lg:flex">
        {navbarList.map((item) => (
          <Link href={item.href} key={item.id}>
            <div
              className={`hover:text-textColor text-background font-bold ${
                pathname === item.href ? "text-textColor" : ""
              }`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
