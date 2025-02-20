"use client";
import { CategoryMenu } from "@/components/careers/categoryMenu";
import { JobCard } from "@/components/careers/jobCard";
import { Input } from "@/components/ui/input";
import { FaAngleLeft } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { Search } from "lucide-react";
import { StaticImageData } from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

const Paginated = () => {
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

  function pageNumbers(): number[] {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const startPage = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
    return [startPage, startPage + 1, startPage + 2];
  }
  const pages = pageNumbers();
  return (
    <div>
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
              className="w-full pl-10 h-10 md:h-12 " // Add padding to the left for the icon
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
        <div className="flex justify-center mt-11 ">
          <button
            onClick={() => {
              handlePrevPage();
            }}
            disabled={currentPage === 1}
            className={`p-2   rounded-md mr-2 ${
              currentPage === 1 ? "text-gray-700" : "text-navbarBgColor"
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
              currentPage === totalPages
                ? "text-gray-700"
                : "text-navbarBgColor"
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
