"use client";
import { IoMdArrowRoundUp } from "react-icons/io";
const FooterNav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <span className="cursor-pointer">
      <p
        onClick={scrollToTop}
        className="text-black p-2 bg-white rounded-full text-md w-10 flex justify-center items-center"
      >
        <IoMdArrowRoundUp />
      </p>
    </span>
  );
};

export default FooterNav;
