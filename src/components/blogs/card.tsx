import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Prop {
  title: string;
  desc: string;
  img: string | StaticImageData;
  category: string;
}

const BlogCard = ({ title, desc, img, category }: Prop) => {
  const maxLength = 220;
  return (
    <Card
      className={`flex rounded-none bg-transparent shadow-none border-0 p-0 m-0 flex-col  gap-3`}
    >
      <div className="text-secondColor text-md">{category}</div>
      <CardHeader className={` relative  p-0  m-0 h-[277px] w-full  `}>
        <Image src={img} alt="image" fill className="object-cover rounded-md" />
      </CardHeader>
      <CardContent className={`flex-1 p-0  flex flex-col overflow-hidden `}>
        <CardTitle className="text-lg  text-color">{title}</CardTitle>
        <CardDescription className="text-sm text-secondColor">
          {`${desc.slice(0, maxLength)}${desc.length > maxLength ? "..." : ""}`}
          {
            desc.length > maxLength && ""
            // <span className="text-red-500 cursor-pointer ml-1">
            //   {` ${desc.length > maxLength && "Read more..."}`}
            // </span>
          }
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
