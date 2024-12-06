"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const NAVBAR_LIST = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "about-us" },
    { id: 3, label: "Product", href: "product" },
    { id: 4, label: "Careers", href: "careers" },
    { id: 5, label: "Blogs", href: "blogs" },
    { id: 6, label: "Contact", href: "contact" },
  ];

  return (
    <div
      className={`border-b border-gray-600 h-20 items-center flex justify-between px-[13px] lg:px-[50px] bg-[rgba(17,25,40,0.75)]  border-[rgba(255,255,255,0.125)] backdrop-blur-[16px] backdrop-saturate-[180%]" `}
    >
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
                  pathname === item.href ? "text-textColor" : ""
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
