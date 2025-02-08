// "use client";
import Banner from "@/components/banner";
import BlogCard from "@/components/blogs/card";
import FirstCard from "@/components/blogs/firstcard";
import Link from "next/link";

export default function BlogsPage() {
  const blogsdata = Array.from({ length: 7 }, (_, index) => ({
    id: index + 1,
    header: "8-8-2021",
    title: "The Future of Web Development: Trends Shaping 2025 and Beyond",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed eu
    ismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing e
    lit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra 
    duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scele
    risque etiam viverra consequat 
    viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae 
    at sed euismSee moreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames
     sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consec
     tetur
      adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverr
      a duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nun
      c. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss
      e varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismSee more`,
    img: `/blog${index + 1}.svg`,

    first: index === 0 ? true : false,
  }));
  return (
    <div>
      <Banner image={"/blogs.svg"} title={"Blogs"} />

      <div className="mt-36 mb-[120px] container mx-auto px-2 md:px-3 lg:px-0">
        <div>
          <FirstCard
            header={blogsdata[0].header}
            title={blogsdata[0].title}
            desc={`${blogsdata[0].desc} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. 
            
            Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Suspendisse varius enim in eros. 
            Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat 
            viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. 
            Scelerisque etiam viverra consequat 
            
            viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit.
             Vitae at sed euismSee moreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
             varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien a
             c quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet
            , consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam
             viverra consequat viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
            uspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismSee more`}
            img={blogsdata[0].img}
          />
        </div>
        <div className="grid  lg:grid-cols-3 justify-center gap-10 mb-24 mt-16 ">
          <div className="font-semibold text-lg  lg:col-span-3">
            Popular Topics
          </div>

          {blogsdata.slice(1).map((item, index) => {
            return (
              <Link
                href={`/blogs/${item.id}`}
                className={`${"col-span-1 max-h-[510px]"} overflow-hidden`}
                key={item.id}
              >
                <BlogCard
                  header={item.header}
                  title={index === 5 ? "hello" : item.title}
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
