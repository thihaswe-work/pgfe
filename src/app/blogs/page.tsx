import Banner from "@/components/banner";
import Blogs from "@/components/blogs/blogs";
import FirstCard from "@/components/blogs/firstcard";

export default function BlogsPage() {
  return (
    <div className="pb-[108px]">
      <Banner text={["EXPLORE", "YOUR", "TECHNOLOGIES", "KNOWLEDGE"]} />
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 mb-16">
          {Array.from({ length: 3 }).map((item, index) => {
            return (
              <FirstCard
                key={index}
                header={"Ui/Ux"}
                title={"What is User Center Design"}
                desc={
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit."
                }
                img={"/blog.svg"}
                reverse={index % 2 === 0 ? false : true}
              />
            );
          })}
        </div>

        <Blogs />
      </div>
    </div>
  );
}
