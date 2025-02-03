import Banner from "@/components/banner";
import BlogCard from "@/components/blogs/card";
import Link from "next/link";
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

export default function BlogsPage() {
  const blogsdata = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    header: "Features",
    title: "What are the signs of hormonal imbalance in women?",
    desc: "Figma ipsum component variant  main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bullet team union link component boolean font. Plugin scrolling subtract device variant stroke image image star. Shadow fill list frame auto line.",
    img: `/blog${index + 1}.svg`,
    first: index === 0 ? true : false,
  }));
  return (
    <div>
      <Banner image={"/blogs.svg"} title={"Blogs"} />

      <div className="mt-36 mb-[120px] container mx-auto">
        <div>
          <Card
            className={`flex rounded-none bg-transparent shadow-none border-0 p-0 m-0 ${"flex-col"}  `}
          >
            <CardHeader className={` relative w-full p-0  m-0 ${"h-[300px]"} `}>
              <Image
                src={blogsdata[0].img}
                alt="image"
                fill
                className="object-cover rounded-xl"
              />
            </CardHeader>
            <CardContent
              className={`flex-1 p-0 m-0 flex flex-col gap-3 mt-5 overflow-hidden ${""}`}
            >
              <h6>{blogsdata[0].header}</h6>
              <CardTitle className="text-lg fotn-bold">
                {blogsdata[0].title}
              </CardTitle>
              <CardDescription className="text-sm">
                {blogsdata[0].desc}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 mb-24 mt-16 ">
          {blogsdata.slice(1).map((item, index) => {
            return (
              <Link
                href={`/blog/${item.id}`}
                className={`${"col-span-1 max-h-[510px]"} overflow-hidden`}
                key={item.id}
              >
                <BlogCard
                  header={item.header}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
