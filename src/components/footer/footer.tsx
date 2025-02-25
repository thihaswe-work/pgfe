import Image from "next/image";
import FooterNav from "./footerNav";

const Footer = () => {
  const QUICK_LINKS = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about-us",
      label: "About Us",
    },
    {
      href: "/product",
      label: "Product",
    },
    {
      href: "/careers",
      label: "Careers",
    },

    {
      href: "/contact",
      label: "Contacts ",
    },
  ];
  const BLOGS = [
    {
      href: "/",
      label: "All",
    },
    {
      href: "/about-us",
      label: "Information Technology",
    },
    {
      href: "/product",
      label: "Ui/Ux Design",
    },
    {
      href: "/careers",
      label: "Web Development",
    },

    {
      href: "/contact",
      label: "Mobile DevelopMent",
    },
    {
      href: "/contact",
      label: "Others :",
    },
  ];
  const LEGAL = [
    {
      href: "/",
      label: "Privacy Policy",
    },
    {
      href: "/about-us",
      label: "Terms of Service",
    },
    {
      href: "/product",
      label: "Terms & Conditions",
    },
    {
      href: "/careers",
      label: "Cookie Preferences",
    },
  ];
  return (
    <div className="">
      <div className="flex gap-5 my-5  flex-col lg:flex-row container mx-auto px-3 md:px-2 lg:px-0 justify-between py-11">
        <div>
          <div className="relative w-[311px] h-[85px]">
            <Image fill src={"/logo.svg"} alt="logo" />
          </div>
          <div className="flex gap-3">
            <div className="relative w-[25px] h-[25px]">
              <Image fill src={"/facebook.png"} alt="logo" />
            </div>
            <div className="relative w-[25px] h-[25px]">
              <Image fill src={"/linkedin.png"} alt="logo" />
            </div>
          </div>
        </div>

        {/* quick links */}
        <div>
          <FooterNav title="QUICK LINKS" links={QUICK_LINKS} />
        </div>

        {/* blogs */}
        <div>
          <FooterNav title="BLOGS" links={BLOGS} />
        </div>

        {/* api */}
        <div>
          <FooterNav title="LEGAL" links={LEGAL} />
        </div>
      </div>
      <span className=" h-14 w-full gap-3 flex items-center justify-center text-xs sm:text-sm md:text-base border-t border-thirdBgColor">
        © 2012-2025
        <span className="text-textColor text-md font-semibold">
          PassionGeek
        </span>
      </span>
    </div>
  );
};

export default Footer;
