import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  return (
    <Card
      className={`flex rounded-none bg-transparent shadow-none border-0 p-0 m-0 ${"flex-col"}  `}
    >
      <CardHeader className={` relative w-full p-0  m-0 ${"h-[300px]"} `}>
        <Image src={img} alt="image" fill className="object-cover rounded-xl" />
      </CardHeader>
      <CardContent
        className={`flex-1 p-0 m-0 flex flex-col gap-3 mt-5 overflow-hidden ${""}`}
      >
        <h6>{header}</h6>
        <CardTitle className="text-lg fotn-bold">{title}</CardTitle>
        <CardDescription className="text-sm">{desc}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
