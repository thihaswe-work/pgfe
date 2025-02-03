import BlogCard from "@/components/blog/card";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blogsdata = Array.from({ length: 3 }, (_, index) => ({
    id: index + 3,
    header: "Features",
    title: "What are the signs of hormonal imbalance in women?",
    desc: "Figma ipsum component variant  main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bu main layer. Comment device invite follower figjam fill. Scrolling move library fill link italic export image. Flows font layer inspect scale. Comment bullet team union link component boolean font. Plugin scrolling subtract device variant stroke image image star. Shadow fill list frame auto line.",
    img: `/blog${index + 1}.svg`,
    first: index === 0 ? true : false,
  }));

  return (
    <div className="container mx-auto py-10 mt-10">
      <div className="flex flex-col gap-10 mb-10 px-2 md:px-3 lg:px-0">
        <div className="flex flex-col gap-3">
          <h3>Features</h3>
          <h3>What are the signs of hormonal imbalance in women?</h3>
          <p>Last Updated: 1 / 23 / 2025</p>
        </div>

        <div className="relative w-full h-[400px] ">
          <Image
            src={"/blog1.svg"}
            alt="image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          Figma ipsum component variant main layer. Comment device invite
          follower figjam fill. Scrolling move library fill link italic export
          image. Flows font layer inspect scale. Comment bullet team union link
          component boolean font. Plugin scrolling subtract device variant
          stroke image image star. Shadow fill list frame auto line.Figma ipsum
          component variant main layer. Comment device invite follower figjam
          fill. Scrolling move library fill link italic export image. Flows font
          layer inspect scale. Comment bullet team union link component boolean
          font. Plugin scrolling subtract device variant stroke image image
          star. Shadow fill list frame auto line.
        </div>
        <div>
          Figma ipsum component variant main layer. Comment device invite
          follower figjam fill. Scrolling move library fill link italic export
          image. Flows font layer inspect scale. Comment bullet team union link
          component boolean font. Plugin scrolling subtract device variant
          stroke image image star. Shadow fill list frame auto line.Figma ipsum
          component variant main layer. Comment device invite follower figjam
          fill. Scrolling move library fill link italic export image. Flows font
          layer inspect scale. Comment bullet team union link component boolean
          font. Plugin scrolling subtract device variant stroke image image
          star. Shadow fill list frame auto line.
        </div>
        <div>
          Figma ipsum component variant main layer. Comment device invite
          follower figjam fill. Scrolling move library fill link italic export
          image. Flows font layer inspect scale. Comment bullet team union link
          component boolean font. Plugin scrolling subtract device variant
          stroke image image star. Shadow fill list frame auto line.Figma ipsum
          component variant main layer. Comment device invite follower figjam
          fill. Scrolling move library fill link italic export image. Flows font
          layer inspect scale. Comment bullet team union link component boolean
          font. Plugin scrolling subtract device variant stroke image image
          star. Shadow fill list frame auto line.
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 md:px-3 lg:px-0">
        {blogsdata.map((item, index) => {
          return (
            <>
              {item.first && (
                <div className="text-center md:col-span-2 lg:col-span-3 text-primary-bg-color font-semibold text-md">
                  Latest Blogs
                </div>
              )}
              <Link
                href={`/blog/${item.id}`}
                className={`${"col-span-1 max-h-[510px] "} overflow-hidden`}
                key={index}
              >
                <BlogCard
                  header={item.header}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
