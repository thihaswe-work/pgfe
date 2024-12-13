import { NAVBAR_LIST } from "@/util/navbarList";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Prop {
  open: boolean;
}

const MenuBar = ({ open }: Prop) => {
  const navbarList = NAVBAR_LIST;
  const pathname = usePathname();
  return (
    <div
      className={`${
        open ? "left-0 " : "left-[100%]"
      } absolute block lg:hidden top-[80px] w-full bg-[rgba(17,25,40,0.85)] z-20 rounded-[50px] px-16`}
    >
      {navbarList.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`hover:text-textColor font-bold ${
            pathname === item.href ? "text-textColor" : ""
          }`}
        >
          <div className="w-full h-full flex justify-center items-center border-b-[1px] border-gray-50 py-[20px] ">
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
