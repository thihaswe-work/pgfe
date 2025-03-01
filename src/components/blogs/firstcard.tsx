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
  reverse: boolean;
}

const FirstCard = ({ header, title, desc, img, reverse }: Prop) => {
  const [maxLength, setMaxLength] = useState(230);

  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descRef.current) {
        const cardHeight = window.innerWidth >= 768 ? 400 : 200; // md: 400px, default: 200px
        if (window.innerWidth < 768) {
          // If window width is less than 768px, adjust maxLength based on content overflow
          setMaxLength(descRef.current.scrollHeight > cardHeight ? 700 : 230);
        } else {
          // If window width is 768px or greater, adjust maxLength for larger screens
          setMaxLength(descRef.current.scrollHeight > cardHeight ? 700 : 1300);
        }
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", checkOverflow);
  }, [desc]); // Depend on desc to recalculate when the description changes

  return (
    <Card
      className={`flex flex-col rounded-none bg-transparent shadow-none border-0 p-0 m-0 gap-8 h-[706px] ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <CardHeader className="relative flex-1 h-full p-0 m-0 ">
        <Image src={img} alt="image" fill className="object-cover rounded-md" />
      </CardHeader>
      <CardContent className="flex-1 p-0 m-0 flex flex-col gap-2 mt-5 overflow-hidden text-white justify-center">
        <h6>{header}</h6>
        <CardTitle className="text-md lg:text-xl font-bold">{title}</CardTitle>
        <CardDescription
          ref={descRef}
          className="text-md text-secondary transition-all duration-300 overflow-hidden"
        >
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

export default FirstCard;
