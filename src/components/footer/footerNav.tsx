import Link from "next/link";

interface Prop {
  title: string;
  links: { label: string; href: string }[];
}
const FooterNav = ({ title, links }: Prop) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-thirdBgColor">{title}</h3>
      {links.map((item) => {
        return (
          <Link href={item.href} key={item.label}>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default FooterNav;
