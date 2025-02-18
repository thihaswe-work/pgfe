/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import BannerCareer from "@/components/careers/bannerCareer";
import { CategoryMenu } from "@/components/careers/categoryMenu";
import { JobCard } from "@/components/careers/jobCard";
import { Input } from "@/components/ui/input";
import { Item } from "@radix-ui/react-dropdown-menu";
import { GiSettingsKnobs } from "react-icons/gi";
import { Search } from "lucide-react";
import { StaticImageData } from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function CareersPage() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [job, setJob] = useState<
    { id: number; label: string; category: string }[]
  >([]);
  const [category, setCategory] = useState<{ id: number; label: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentJob, setCurrentJob] =
    useState<{ id: number; label: string; category: string }[]>();
  const jobsPerPage = 10; // Number of jobs per page

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
    { id: 1, label: "Frontend Developer", category: "Developer" },
    { id: 2, label: "Backend Developer", category: "Developer" },
    { id: 3, label: "Full Stack Developer", category: "Developer" },
    { id: 4, label: "Mobile App Developer", category: "Developer" },
    { id: 5, label: "Game Developer", category: "Developer" },

    { id: 6, label: "Graphic Designer", category: "Designer" },
    { id: 7, label: "UI/UX Designer", category: "Designer" },
    { id: 8, label: "Product Designer", category: "Designer" },
    { id: 9, label: "Motion Graphics Designer", category: "Designer" },
    { id: 10, label: "Brand Identity Designer", category: "Designer" },

    { id: 11, label: "Agile Project Manager", category: "Project Manager" },
    { id: 12, label: "Scrum Master", category: "Project Manager" },
    { id: 13, label: "IT Project Manager", category: "Project Manager" },
    { id: 14, label: "Technical Project Manager", category: "Project Manager" },
    { id: 15, label: "Software Project Manager", category: "Project Manager" },

    { id: 16, label: "Manual QA Tester", category: "QA Tester" },
    { id: 17, label: "Automation QA Engineer", category: "QA Tester" },
    { id: 18, label: "Performance Tester", category: "QA Tester" },
    { id: 19, label: "Security Tester", category: "QA Tester" },
    { id: 20, label: "Software Test Engineer", category: "QA Tester" },

    { id: 21, label: "Network Administrator", category: "Network Engineer" },
    { id: 22, label: "Cloud Network Engineer", category: "Network Engineer" },
    { id: 23, label: "VoIP Engineer", category: "Network Engineer" },
    { id: 24, label: "Network Architect", category: "Network Engineer" },
    { id: 25, label: "Cybersecurity Analyst", category: "Cyber Security" },

    // Add the next set of jobs, incrementing the ID and alternating categories
    { id: 26, label: "Frontend Developer", category: "Developer" },
    { id: 27, label: "Backend Developer", category: "Developer" },
    { id: 28, label: "Full Stack Developer", category: "Developer" },
    { id: 29, label: "Mobile App Developer", category: "Developer" },
    { id: 30, label: "Game Developer", category: "Developer" },

    { id: 31, label: "Graphic Designer", category: "Designer" },
    { id: 32, label: "UI/UX Designer", category: "Designer" },
    { id: 33, label: "Product Designer", category: "Designer" },
    { id: 34, label: "Motion Graphics Designer", category: "Designer" },
    { id: 35, label: "Brand Identity Designer", category: "Designer" },

    { id: 36, label: "Agile Project Manager", category: "Project Manager" },
    { id: 37, label: "Scrum Master", category: "Project Manager" },
    { id: 38, label: "IT Project Manager", category: "Project Manager" },
    { id: 39, label: "Technical Project Manager", category: "Project Manager" },
    { id: 40, label: "Software Project Manager", category: "Project Manager" },

    { id: 41, label: "Manual QA Tester", category: "QA Tester" },
    { id: 42, label: "Automation QA Engineer", category: "QA Tester" },
    { id: 43, label: "Performance Tester", category: "QA Tester" },
    { id: 44, label: "Security Tester", category: "QA Tester" },
    { id: 45, label: "Software Test Engineer", category: "QA Tester" },

    { id: 46, label: "Network Administrator", category: "Network Engineer" },
    { id: 47, label: "Cloud Network Engineer", category: "Network Engineer" },
    { id: 48, label: "VoIP Engineer", category: "Network Engineer" },
    { id: 49, label: "Network Architect", category: "Network Engineer" },
    { id: 50, label: "Cybersecurity Analyst", category: "Cyber Security" },

    { id: 56, label: "Graphic Designer", category: "Designer" },
    { id: 57, label: "UI/UX Designer", category: "Designer" },
    { id: 58, label: "Product Designer", category: "Designer" },
    { id: 59, label: "Motion Graphics Designer", category: "Designer" },
    { id: 60, label: "Brand Identity Designer", category: "Designer" },

    { id: 61, label: "Agile Project Manager", category: "Project Manager" },
    { id: 62, label: "Scrum Master", category: "Project Manager" },
    { id: 63, label: "IT Project Manager", category: "Project Manager" },
    { id: 64, label: "Technical Project Manager", category: "Project Manager" },
    { id: 65, label: "Software Project Manager", category: "Project Manager" },

    { id: 66, label: "Manual QA Tester", category: "QA Tester" },
    { id: 67, label: "Automation QA Engineer", category: "QA Tester" },
    { id: 68, label: "Performance Tester", category: "QA Tester" },
    { id: 69, label: "Security Tester", category: "QA Tester" },
    { id: 70, label: "Software Test Engineer", category: "QA Tester" },

    { id: 71, label: "Network Administrator", category: "Network Engineer" },
    { id: 72, label: "Cloud Network Engineer", category: "Network Engineer" },
    { id: 73, label: "VoIP Engineer", category: "Network Engineer" },
    { id: 74, label: "Network Architect", category: "Network Engineer" },
    { id: 75, label: "Cybersecurity Analyst", category: "Cyber Security" },

    { id: 76, label: "Frontend Developer", category: "Developer" },
    { id: 77, label: "Backend Developer", category: "Developer" },
    { id: 78, label: "Full Stack Developer", category: "Developer" },
    { id: 79, label: "Mobile App Developer", category: "Developer" },
    { id: 80, label: "Game Developer", category: "Developer" },

    { id: 81, label: "Graphic Designer", category: "Designer" },
    { id: 82, label: "UI/UX Designer", category: "Designer" },
    { id: 83, label: "Product Designer", category: "Designer" },
    { id: 84, label: "Motion Graphics Designer", category: "Designer" },
    { id: 85, label: "Brand Identity Designer", category: "Designer" },

    { id: 86, label: "Agile Project Manager", category: "Project Manager" },
    { id: 87, label: "Scrum Master", category: "Project Manager" },
    { id: 88, label: "IT Project Manager", category: "Project Manager" },
    { id: 89, label: "Technical Project Manager", category: "Project Manager" },
    { id: 90, label: "Software Project Manager", category: "Project Manager" },

    // { id: 91, label: "Manual QA Tester", category: "QA Tester" },
    // { id: 92, label: "Automation QA Engineer", category: "QA Tester" },
    // { id: 93, label: "Performance Tester", category: "QA Tester" },
    // { id: 94, label: "Security Tester", category: "QA Tester" },
    // { id: 95, label: "Software Test Engineer", category: "QA Tester" },

    // { id: 96, label: "Network Administrator", category: "Network Engineer" },
    // { id: 97, label: "Cloud Network Engineer", category: "Network Engineer" },
    // { id: 98, label: "VoIP Engineer", category: "Network Engineer" },
    // { id: 99, label: "Network Architect", category: "Network Engineer" },
    // { id: 100, label: "Cybersecurity Analyst", category: "Cyber Security" },

    // { id: 101, label: "Frontend Developer", category: "Developer" },
    // { id: 102, label: "Backend Developer", category: "Developer" },
    // { id: 103, label: "Full Stack Developer", category: "Developer" },
    // { id: 104, label: "Mobile App Developer", category: "Developer" },
    // { id: 105, label: "Game Developer", category: "Developer" },

    // { id: 106, label: "Graphic Designer", category: "Designer" },
    // { id: 107, label: "UI/UX Designer", category: "Designer" },
    // { id: 108, label: "Product Designer", category: "Designer" },
    // { id: 109, label: "Motion Graphics Designer", category: "Designer" },
    // { id: 110, label: "Brand Identity Designer", category: "Designer" },

    // { id: 111, label: "Agile Project Manager", category: "Project Manager" },
    // { id: 112, label: "Scrum Master", category: "Project Manager" },
    // { id: 113, label: "IT Project Manager", category: "Project Manager" },
    // {
    //   id: 114,
    //   label: "Technical Project Manager",
    //   category: "Project Manager",
    // },
    // { id: 115, label: "Software Project Manager", category: "Project Manager" },

    // { id: 116, label: "Manual QA Tester", category: "QA Tester" },
    // { id: 117, label: "Automation QA Engineer", category: "QA Tester" },
    // { id: 118, label: "Performance Tester", category: "QA Tester" },
    // { id: 119, label: "Security Tester", category: "QA Tester" },
    // { id: 120, label: "Software Test Engineer", category: "QA Tester" },

    // { id: 121, label: "Network Administrator", category: "Network Engineer" },
    // { id: 122, label: "Cloud Network Engineer", category: "Network Engineer" },
    // { id: 123, label: "VoIP Engineer", category: "Network Engineer" },
    // { id: 124, label: "Network Architect", category: "Network Engineer" },
    // { id: 125, label: "Cybersecurity Analyst", category: "Cyber Security" },

    // { id: 126, label: "Frontend Developer", category: "Developer" },
    // { id: 127, label: "Backend Developer", category: "Developer" },
    // { id: 128, label: "Full Stack Developer", category: "Developer" },
    // { id: 129, label: "Mobile App Developer", category: "Developer" },
    // { id: 130, label: "Game Developer", category: "Developer" },

    // { id: 131, label: "Graphic Designer", category: "Designer" },
    // { id: 132, label: "UI/UX Designer", category: "Designer" },
    // { id: 133, label: "Product Designer", category: "Designer" },
    // { id: 134, label: "Motion Graphics Designer", category: "Designer" },
    // { id: 135, label: "Brand Identity Designer", category: "Designer" },

    // { id: 136, label: "Agile Project Manager", category: "Project Manager" },
    // { id: 137, label: "Scrum Master", category: "Project Manager" },
    // { id: 138, label: "IT Project Manager", category: "Project Manager" },
    // {
    //   id: 139,
    //   label: "Technical Project Manager",
    //   category: "Project Manager",
    // },
    // { id: 140, label: "Software Project Manager", category: "Project Manager" },

    // { id: 141, label: "Manual QA Tester", category: "QA Tester" },
    // { id: 142, label: "Automation QA Engineer", category: "QA Tester" },
    // { id: 143, label: "Performance Tester", category: "QA Tester" },
    // { id: 144, label: "Security Tester", category: "QA Tester" },
    // { id: 145, label: "Software Test Engineer", category: "QA Tester" },

    // { id: 146, label: "Network Administrator", category: "Network Engineer" },
    // { id: 147, label: "Cloud Network Engineer", category: "Network Engineer" },
    // { id: 148, label: "VoIP Engineer", category: "Network Engineer" },
    // { id: 149, label: "Network Architect", category: "Network Engineer" },
    // { id: 150, label: "Cybersecurity Analyst", category: "Cyber Security" },

    // { id: 151, label: "Frontend Developer", category: "Developer" },
    // { id: 152, label: "Backend Developer", category: "Developer" },
    // { id: 153, label: "Full Stack Developer", category: "Developer" },
    // { id: 154, label: "Mobile App Developer", category: "Developer" },
    // { id: 155, label: "Game Developer", category: "Developer" },

    // { id: 156, label: "Graphic Designer", category: "Designer" },
    // { id: 157, label: "UI/UX Designer", category: "Designer" },
    // { id: 158, label: "Product Designer", category: "Designer" },
    // { id: 159, label: "Motion Graphics Designer", category: "Designer" },
    // { id: 160, label: "Brand Identity Designer", category: "Designer" },

    // { id: 161, label: "Agile Project Manager", category: "Project Manager" },
    // { id: 162, label: "Scrum Master", category: "Project Manager" },
    // { id: 163, label: "IT Project Manager", category: "Project Manager" },
    // {
    //   id: 164,
    //   label: "Technical Project Manager",
    //   category: "Project Manager",
    // },
    // { id: 165, label: "Software Project Manager", category: "Project Manager" },

    // { id: 166, label: "Manual QA Tester", category: "QA Tester" },
    // { id: 167, label: "Automation QA Engineer", category: "QA Tester" },
    // { id: 168, label: "Performance Tester", category: "QA Tester" },
    // { id: 169, label: "Security Tester", category: "QA Tester" },
    // { id: 170, label: "Software Test Engineer", category: "QA Tester" },

    // { id: 171, label: "Network Administrator", category: "Network Engineer" },
    // { id: 172, label: "Cloud Network Engineer", category: "Network Engineer" },
    // { id: 173, label: "VoIP Engineer", category: "Network Engineer" },
    // { id: 174, label: "Network Architect", category: "Network Engineer" },
    // { id: 175, label: "Cybersecurity Analyst", category: "Cyber Security" },

    // { id: 176, label: "Frontend Developer", category: "Developer" },
    // { id: 177, label: "Backend Developer", category: "Developer" },
    // { id: 178, label: "Full Stack Developer", category: "Developer" },
    // { id: 179, label: "Mobile App Developer", category: "Developer" },
    // { id: 180, label: "Game Developer", category: "Developer" },

    // { id: 181, label: "Graphic Designer", category: "Designer" },
    // { id: 182, label: "UI/UX Designer", category: "Designer" },
    // { id: 183, label: "Product Designer", category: "Designer" },
    // { id: 184, label: "Motion Graphics Designer", category: "Designer" },
    // { id: 185, label: "Brand Identity Designer", category: "Designer" },

    // { id: 186, label: "Agile Project Manager", category: "Project Manager" },
    // { id: 187, label: "Scrum Master", category: "Project Manager" },
    // { id: 188, label: "IT Project Manager", category: "Project Manager" },
    // {
    //   id: 189,
    //   label: "Technical Project Manager",
    //   category: "Project Manager",
    // },
    // { id: 190, label: "Software Project Manager", category: "Project Manager" },

    // { id: 191, label: "Manual QA Tester", category: "QA Tester" },
    // { id: 192, label: "Automation QA Engineer", category: "QA Tester" },
    // { id: 193, label: "Performance Tester", category: "QA Tester" },
    // { id: 194, label: "Security Tester", category: "QA Tester" },
    // { id: 195, label: "Software Test Engineer", category: "QA Tester" },

    // { id: 196, label: "Network Administrator", category: "Network Engineer" },
    // { id: 197, label: "Cloud Network Engineer", category: "Network Engineer" },
    // { id: 198, label: "VoIP Engineer", category: "Network Engineer" },
    // { id: 199, label: "Network Architect", category: "Network Engineer" },
    // { id: 200, label: "Cybersecurity Analyst", category: "Cyber Security" },
  ];

  // Effect to filter jobs based on selected categories and search query
  React.useEffect(() => {
    let filteredJobs = jobs;
    const searchTerm = searchParams.get("search");

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
    // Paginate the filtered jobs
  }, [category, searchParams]);

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

  const pageNumbers = (): number[] => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    return [startPage, startPage + 1, startPage + 2];
  };

  return (
    <div className="mb-20 w-full relative">
      <BannerCareer />
      <div className="container mx-auto w-full px-2 md:px-3 lg:px-0">
        <div className=" sticky top-20 z-10">
          <div className={`bg-background h-4 w-full`}></div>
          <div className="absolute  w-full bg-background ">
            <Input
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get("search")?.toString()}
              type="email"
              placeholder="Find your passionate careers"
              className="w-full pl-10 h-12 " // Add padding to the left for the icon
            />
            {/* Magnifying glass icon */}
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
            <GiSettingsKnobs
              className="absolute md:hidden right-2 top-1/2 transform -translate-y-1/2 text-textColor text-md"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </div>

        <div className="flex h-auto min-h-screen mt-24 ">
          <div className="hidden md:block w-[223px] lg:w-[310px] flex-shrink-0 h-full sticky top-44 ">
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
        <div className="flex justify-center mt-11 ">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2  text-white rounded-md mr-2 ${
              currentPage === 1 && "text-gray-700"
            }`}
          >
            {"<"}
          </button>

          {/* Page numbers */}
          <div className="flex space-x-2">
            {pageNumbers().map((number) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={`py-2 px-3 rounded-md ${
                  currentPage === number ? "bg-textColor text-white" : ""
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2  text-white rounded-md ml-2 ${
              currentPage === totalPages && "text-gray-700"
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        className={`fixed md:hidden inset-0 w-full h-full bg-background z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-11 p-4 py-[10px] flex justify-between border-b border-thirdBgColor">
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            {"< Filters"}
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
}
