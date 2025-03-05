"use client";
// import Image from "next/image";
import { CategoryMenu } from "@/components/careers/categoryMenu";
import { JobCard } from "@/components/careers/jobCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { useDebouncedCallback } from "use-debounce";

import { Region } from "./country";
import Banner from "../banner";

const Paginated = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [job, setJob] = useState<
    { id: number; label: string; category: string }[]
  >([]);

  const [category, setCategory] = useState<{ id: number; label: string }[]>([]);
  const [country, setCountry] = useState("Global");

  const [currentPage, setCurrentPage] = useState(1);

  const [currentJob, setCurrentJob] =
    useState<{ id: number; label: string; category: string }[]>();

  const jobsPerPage = 10;
  const [open, setOpen] = useState<boolean>(false);

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const categories = [
    { id: 1, label: "Developer", img: "/developer.svg" },
    { id: 2, label: "Designer", img: "/designer.svg" },
    { id: 3, label: "Project Manager" },
    { id: 4, label: "QA Tester" },
    { id: 5, label: "Network Engineer", img: "/engineer.svg" },
    { id: 6, label: "Cyber Security" },
  ];

  const jobs = [
    {
      id: 1,
      label: "Frontend Developer",
      category: "Developer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 2,
      label: "Backend Developer",
      category: "Developer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 3,
      label: "Full Stack Developer",
      category: "Developer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 4,
      label: "Mobile App Developer",
      category: "Developer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 5,
      label: "Game Developer",
      category: "Developer",
      country: "mm",
      country_name: "Myanmar",
    },

    {
      id: 6,
      label: "Graphic Designer",
      category: "Designer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 7,
      label: "UI/UX Designer",
      category: "Designer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 8,
      label: "Product Designer",
      category: "Designer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 9,
      label: "Motion Graphics Designer",
      category: "Designer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 10,
      label: "Brand Identity Designer",
      category: "Designer",
      country: "th",
      country_name: "Thailand",
    },

    {
      id: 11,
      label: "Agile Project Manager",
      category: "Project Manager",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 12,
      label: "Scrum Master",
      category: "Project Manager",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 13,
      label: "IT Project Manager",
      category: "Project Manager",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 14,
      label: "Technical Project Manager",
      category: "Project Manager",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 15,
      label: "Software Project Manager",
      category: "Project Manager",
      country: "mm",
      country_name: "Myanmar",
    },

    {
      id: 16,
      label: "Manual QA Tester",
      category: "QA Tester",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 17,
      label: "Automation QA Engineer",
      category: "QA Tester",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 18,
      label: "Performance Tester",
      category: "QA Tester",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 19,
      label: "Security Tester",
      category: "QA Tester",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 20,
      label: "Software Test Engineer",
      category: "QA Tester",
      country: "th",
      country_name: "Thailand",
    },

    {
      id: 21,
      label: "Network Administrator",
      category: "Network Engineer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 22,
      label: "Cloud Network Engineer",
      category: "Network Engineer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 23,
      label: "VoIP Engineer",
      category: "Network Engineer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 24,
      label: "Network Architect",
      category: "Network Engineer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 25,
      label: "Cybersecurity Analyst",
      category: "Cyber Security",
      country: "mm",
      country_name: "Myanmar",
    },

    {
      id: 26,
      label: "Frontend Developer",
      category: "Developer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 27,
      label: "Backend Developer",
      category: "Developer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 28,
      label: "Full Stack Developer",
      category: "Developer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 29,
      label: "Mobile App Developer",
      category: "Developer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 30,
      label: "Game Developer",
      category: "Developer",
      country: "th",
      country_name: "Thailand",
    },

    {
      id: 31,
      label: "Graphic Designer",
      category: "Designer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 32,
      label: "UI/UX Designer",
      category: "Designer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 33,
      label: "Product Designer",
      category: "Designer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 34,
      label: "Motion Graphics Designer",
      category: "Designer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 35,
      label: "Brand Identity Designer",
      category: "Designer",
      country: "mm",
      country_name: "Myanmar",
    },

    {
      id: 36,
      label: "Agile Project Manager",
      category: "Project Manager",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 37,
      label: "Scrum Master",
      category: "Project Manager",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 38,
      label: "IT Project Manager",
      category: "Project Manager",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 39,
      label: "Technical Project Manager",
      category: "Project Manager",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 40,
      label: "Software Project Manager",
      category: "Project Manager",
      country: "th",
      country_name: "Thailand",
    },

    {
      id: 41,
      label: "Manual QA Tester",
      category: "QA Tester",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 42,
      label: "Automation QA Engineer",
      category: "QA Tester",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 43,
      label: "Performance Tester",
      category: "QA Tester",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 44,
      label: "Security Tester",
      category: "QA Tester",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 45,
      label: "Software Test Engineer",
      category: "QA Tester",
      country: "mm",
      country_name: "Myanmar",
    },

    {
      id: 46,
      label: "Network Administrator",
      category: "Network Engineer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 47,
      label: "Cloud Network Engineer",
      category: "Network Engineer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 48,
      label: "VoIP Engineer",
      category: "Network Engineer",
      country: "th",
      country_name: "Thailand",
    },
    {
      id: 49,
      label: "Network Architect",
      category: "Network Engineer",
      country: "mm",
      country_name: "Myanmar",
    },
    {
      id: 50,
      label: "Cybersecurity Analyst",
      category: "Cyber Security",
      country: "th",
      country_name: "Thailand",
    },
  ];

  const countries = [
    { name: "Myanmar", image: "" },
    { name: "Thailand", image: "" },
  ];

  // Effect to filter jobs based on selected categories and search query
  React.useEffect(() => {
    let filteredJobs = jobs;
    const searchTerm = searchParams.get("search");

    if (country !== "Global" && country) {
      filteredJobs = filteredJobs.filter(
        (item) => item.country_name === country
      );
    }

    if (category.length > 0) {
      const selectedCategories = category.map((c) => c.label);
      filteredJobs = filteredJobs.filter((job) =>
        selectedCategories.includes(job.category)
      );
    }

    if (searchTerm) {
      filteredJobs = filteredJobs.filter((j) =>
        j.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setCurrentPage(1);
    setJob(filteredJobs);
    console.log(filteredJobs);
    // Paginate the filtered jobs
  }, [category, searchParams, country]);

  React.useEffect(() => {
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentjobs = job.slice(indexOfFirstJob, indexOfLastJob);
    setCurrentJob(currentjobs);

    // Recalculate total pages when  jobs change
    const totalPages = Math.ceil(job.length / jobsPerPage);
    setTotalPages(totalPages);
  }, [job, currentPage]);

  // Total pages for pagination
  const [totalPages, setTotalPages] = useState(1);

  // Pagination handlers
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); // Prevent going below page 1
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  function pageNumbers(): number[] {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    return [startPage, startPage + 1, startPage + 2];
  }
  const pages = pageNumbers();

  return (
    <div className={``}>
      <div className="container mx-auto w-full px-2 md:px-3 lg:px-0 ">
        {/* input box */}
        <div className=" sticky top-0 z-10">
          <Banner text={["BECOME", "PASSIONGEEK", "MEMBER"]} />
          <div className="flex bg-background ">
            <div className="h-10 md:h-12">
              <Region
                countries={countries}
                country={country}
                setCountry={setCountry}
              />
            </div>
            <div className="relative  w-full ">
              <Input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get("search")?.toString()}
                type="email"
                placeholder="Find your passionate careers"
                className="w-full pl-12 h-10 md:h-12 text-sm md:text-base ring-0 border-thirdBgColor " // Add padding to the left for the icon
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
          </div>
        </div>

        {/* paginated */}
        <div className={`flex h-auto min-h-screen mt-12 `}>
          <div className="hidden md:block w-[223px] lg:w-[310px] flex-shrink-0 h-full sticky top-[306px] ">
            <div className="w-[193px] lg:w-[270px]  rounded-md border border-thirdBgColor ">
              <CategoryMenu categories={categories} setCategory={setCategory} />
            </div>
          </div>
          <div className="flex flex-col w-full  gap-11 ">
            {currentJob?.length ? (
              currentJob.map((jobItem, index) => (
                <div
                  key={jobItem.id}
                  className="flex flex-col gap-14 lg:gap-5 w-full"
                >
                  <Link href={`careers/${jobItem.id}`}>
                    <JobCard
                      image={
                        categories.find((c) => c.label === jobItem.category)
                          ?.img as string | StaticImageData
                      }
                      title={jobItem.label}
                      desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed eu
                        ismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing e
                        lit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra 
                        duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae at sed euismod nunc. Scele
                        risque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames sapien ac quis suscipit. Vitae 
                        at sed euismSee moreLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Fames
                        sapien ac quis suscipit. Vitae at sed euismod nunc. Scelerisque etiam viverra consequat viverra duis.Lorem ipsum dolor sit amet, consec
                        tetur`}
                    />
                  </Link>

                  {index !== currentJob.length - 1 && (
                    <span className="w-full h-[1px] bg-thirdBgColor"></span>
                  )}
                </div>
              ))
            ) : (
              <p>Not found</p>
            )}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-14 ">
          <button
            onClick={() => {
              handlePrevPage();
            }}
            disabled={currentPage === 1}
            className={`p-2   rounded-md mr-2 ${
              currentPage === 1 ? "hidden" : "text-textColor"
            }`}
          >
            {"<"}
          </button>

          {/* Page numbers */}
          <div className="flex space-x-2">
            {pages.map((number) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={`py-2 px-3 rounded-md ${
                  currentPage === number
                    ? "bg-textColor text-navbarBgColor"
                    : ""
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              handleNextPage();
            }}
            disabled={currentPage === totalPages}
            className={`p-2  rounded-md ml-2 ${
              currentPage === totalPages ? "hidden" : "text-textColor"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* filter for mobile */}
      <div
        className={`fixed md:hidden inset-0 w-full h-full bg-background z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-11 p-4 py-[10px] flex justify-between border-b border-thirdBgColor">
          <div
            className="flex items-center"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FaAngleLeft className="text-navbarBgColor" />
            {"Filters"}
          </div>
          <div
            className="text-textColor"
            onClick={() => {
              setCategory([]);
              setOpen(!open);
            }}
          >
            Clear
          </div>
        </div>
        <CategoryMenu
          categories={categories}
          setCategory={setCategory}
          category={category}
        />
      </div>
    </div>
  );
};

export default Paginated;
