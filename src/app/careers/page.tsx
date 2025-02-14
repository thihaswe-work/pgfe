"use client";

import Banner from "@/components/banner";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function CareersPage() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
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
    </div>
  );
}
