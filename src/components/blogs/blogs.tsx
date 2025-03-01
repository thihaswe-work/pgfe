"use client";
import { useEffect, useState } from "react";

import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

import { Search } from "lucide-react";
import { GiSettingsKnobs } from "react-icons/gi";
import { Button } from "../ui/button";
import BlogCard from "./card";
import Link from "next/link";

const Blogs = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState("All");
  const [input, setInput] = useState("");
  const [blogs, setBlogs] = useState<
    {
      id: number;
      title: string;
      header: string;
      desc: string;
      img: string;
      category: string;
    }[]
  >([]);
  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      setInput(term);
    } else {
      setInput("");
    }
  }, 300);

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI / UX",
    "Information Technology",
    "Ai",
  ];
  const blogsdata = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    header: "8-8-2021",
    title:
      ["User Center Design", "hello", "world", "abc"].find(
        (item, i) => index % 4 === i
      ) || "UI/Ux",
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
    category: categories.find((cat, i) => index % 6 === i) || "Ui/Ux",
  }));

  useEffect(() => {
    let b = blogsdata;
    const search = input;
    if (category !== "All") {
      b = b.filter((item) => item.category === category);
    }

    if (search) {
      b = b.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setBlogs(b);
  }, [category, input]);
  console.log(blogs, input);
  return (
    <div className="w-full max-w-[1126px]  mx-auto flex flex-col gap-16">
      <div className="flex flex-col gap-11">
        <div className="relative  w-full ">
          <Input
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={input}
            type="email"
            placeholder="Find your passionate careers"
            className="w-full pl-12 h-10 md:h-12 text-sm md:text-base ring-0 border-thirdBgColor "
          />
          {/* Magnifying glass icon */}
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
          <GiSettingsKnobs
            className="absolute md:hidden right-2 top-1/2 transform -translate-y-1/2 text-textColor text-md"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>

        <div className="text-center max-w-[636px] mx-auto  gap-2 flex flex-wrap justify-center">
          {categories.map((item) => {
            return (
              <Button
                key={item}
                className={` px-6 py-4  w-fit  ${
                  item === category
                    ? "bg-textColor hover:bg-textColor"
                    : "bg-transparent border border-thirdBgColor "
                }`}
                onClick={() => {
                  setCategory(item);
                }}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-y-16 gap-x-[41px]">
        {blogs.map((item) => {
          return (
            <Link
              href={`/blogs/${item.id}`}
              key={item.id}
              className="w-[348px] h-[436px] col-span-1"
            >
              <BlogCard
                category={item.category}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
