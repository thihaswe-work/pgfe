"use client";

import Banner from "@/components/banner";
import { JobCard } from "@/components/careers/jobCard";
import { SelectMenu } from "@/components/careers/SelectMenu";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function CareersPage() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const id = 1;
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <Banner image={"/career.png"} title="Careers" />
      <div className="md:px-[75px]  px-[20px] flex flex-col gap-[100px]">
        {/* {search part } */}
        <div className="flex justify-center">
          <div className="flex max-w-[600px] items-center gap-8 md:gap-2 space-x-2 flex-col md:flex-row md:justify-center  rounded-lg">
            <div className="relative w-full">
              <Input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get("search")?.toString()}
                type="email"
                placeholder="Find your dream"
                className="w-full md:w-[380px] lg:w-[401px] pl-10" // Add padding to the left for the icon
              />
              {/* Magnifying glass icon */}
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
            </div>
            <div className="w-full flex justify-end md:justify-start p-0">
              <SelectMenu />
            </div>
          </div>
        </div>

        {/* card part */}
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2  lg:p-2.5 gap-10">
            <Link href={`/careers/${id}`}>
              <JobCard
                title={"Frontend Developer"}
                companyName={"FreshMoe Company"}
                jobType={"Remote"}
                salary={"10lakhs - 12lakhs"}
                requirement={
                  "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
                }
                deadline={"December 30"}
              />
            </Link>
            <JobCard
              title={"Frontend Developer"}
              companyName={"FreshMoe Company"}
              jobType={"Remote"}
              salary={"10lakhs - 12lakhs"}
              requirement={
                "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
              }
              deadline={"December 30"}
            />
            <JobCard
              title={"Frontend Developer"}
              companyName={"FreshMoe Company"}
              jobType={"Remote"}
              salary={"10lakhs - 12lakhs"}
              requirement={
                "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
              }
              deadline={"December 30"}
            />
            <JobCard
              title={"Frontend Developer"}
              companyName={"FreshMoe Company"}
              jobType={"Remote"}
              salary={"10lakhs - 12lakhs"}
              requirement={
                "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
              }
              deadline={"December 30"}
            />
            <JobCard
              title={"Frontend Developer"}
              companyName={"FreshMoe Company"}
              jobType={"Remote"}
              salary={"10lakhs - 12lakhs"}
              requirement={
                "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
              }
              deadline={"December 30"}
            />
            <JobCard
              title={"Frontend Developer"}
              companyName={"FreshMoe Company"}
              jobType={"Remote"}
              salary={"10lakhs - 12lakhs"}
              requirement={
                "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
              }
              deadline={"December 30"}
            />
            <JobCard
              title={"Frontend Developer"}
              companyName={"FreshMoe Company"}
              jobType={"Remote"}
              salary={"10lakhs - 12lakhs"}
              requirement={
                "Nisl maecenas lectus quisque morbi vitae morbi id purus ultricies. "
              }
              deadline={"December 30"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
