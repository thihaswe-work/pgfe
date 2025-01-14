"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

export function SelectMenu() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = React.useState<string>("all"); // Set "est" as default value

  // Handle value change
  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("filter", value);
    } else {
      params.delete("filter");
    }
    replace(`${pathname}?${params.toString()}`);
    setSelectedValue(value);
  };

  // Set default query param if none exists
  React.useEffect(() => {
    if (!searchParams.has("filter")) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("filter", "all"); // Set "all" as default value if no filter exists
      replace(`${pathname}?${params.toString()}`);
    } else {
      setSelectedValue(searchParams.get("filter")?.toString() ?? "all");
    }
  }, [pathname, replace, searchParams]);

  return (
    <div className="">
      {/* Display the selected value */}
      <Select
        onValueChange={handleValueChange}
        defaultValue={searchParams.get("filter")?.toString() ?? selectedValue}
      >
        <SelectTrigger className="overflow-hidden w-[100px] lg:w-[177px] bg-[#424242] border-0 rounded-xl">
          <SelectValue />
          {/* Displays selected value */}
        </SelectTrigger>
        <SelectContent className=" w-[290px] md:w-[500px] top-10 relative  right-20 md:right-40 lg:right-80 bg-thirdBgColor text-white border-none">
          <SelectGroup className=" flex flex-col gap-3">
            <SelectLabel>Job Lists</SelectLabel>
            <SelectItem value="all" checkIcon={false}>
              All
            </SelectItem>
            <SelectSeparator className="mx-5" />
            <SelectItem value="frontend" checkIcon={false}>
              Frontend Developer
            </SelectItem>
            <SelectSeparator className="mx-5" />

            <SelectItem value="backend" checkIcon={false}>
              Backend Developer
            </SelectItem>
            <SelectSeparator className="mx-5" />

            <SelectItem value="ux" checkIcon={false}>
              UX Designer
            </SelectItem>
            <SelectSeparator className="mx-5" />

            <SelectItem value="ui" checkIcon={false}>
              UI Designer
            </SelectItem>
            <SelectSeparator className="mx-5" />
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
