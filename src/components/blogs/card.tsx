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
  header: string;
  title: string;
  desc: string;
  img: string | StaticImageData;
}

const BlogCard = ({ header, title, desc, img }: Prop) => {
  const maxLength = 220;
  return (
    <Card
      className={`flex rounded-none bg-transparent shadow-none border-0 p-0 m-0 ${"flex-col"}  `}
    >
      <CardHeader
        className={` relative w-full p-0  m-0 h-[200px] md:h-[300px]  `}
      >
        <Image src={img} alt="image" fill className="object-cover rounded-md" />
      </CardHeader>
      <CardContent
        className={`flex-1 p-0 m-0 flex flex-col gap-3 mt-5 overflow-hidden text-white ${""}`}
      >
        <h6>{header}</h6>
        <CardTitle className="text-lg  text-white">{title}</CardTitle>
        <CardDescription className="text-sm text-white">
          {`${desc.slice(0, maxLength)}${desc.length > maxLength ? "..." : ""}`}
          {desc.length > maxLength && (
            <span className="text-red-500 cursor-pointer ml-1">
              {` ${desc.length > maxLength && "Read more..."}`}
            </span>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
