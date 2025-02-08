"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
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

const FirstCard = ({ header, title, desc, img }: Prop) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descRef.current) {
        // Get the fixed height of the card description based on screen size
        const cardHeight = window.innerWidth >= 768 ? 400 : 200; // md:400px, default:200px
        setIsOverflowing(descRef.current.scrollHeight > cardHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <Card className="flex flex-col md:flex-row rounded-none bg-transparent shadow-none border-0 p-0 m-0 gap-8 h-[400px] md:h-[400px]">
      <CardHeader className="relative flex-1 h-full md:w-[55%] p-0 m-0 ">
        <Image src={img} alt="image" fill className="object-cover rounded-md" />
      </CardHeader>
      <CardContent className="flex-1 p-0 m-0 flex flex-col gap-3 mt-5 overflow-hidden text-white">
        <h6>{header}</h6>
        <CardTitle className="text-md lg:text-lg font-bold">{title}</CardTitle>
        <CardDescription
          ref={descRef}
          className={`text-sm text-white transition-all duration-300 overflow-hidden ${"max-h-[200px] md:max-h-[400px]"}`}
        >
          {desc}
        </CardDescription>
        {isOverflowing && (
          <span className="text-red-500 cursor-pointer ml-1">Read more...</span>
        )}
      </CardContent>
    </Card>
  );
};

export default FirstCard;
