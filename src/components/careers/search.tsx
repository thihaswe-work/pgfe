import React from "react";
import { Input } from "@/components/ui/input";
import { GiSettingsKnobs } from "react-icons/gi";
import { Region } from "./country";
import { Search } from "lucide-react";
import BannerCareer from "./bannerCareer";

interface Prop {
  handleSearch: (para: string) => void;
  inputValue: string;
  setOpen: (para: boolean) => void;
  open: boolean;
  countries: { name: string; image: string }[];
  country: string;
  setCountry: (para: string) => void;
}
const CareerSearch = ({
  handleSearch,
  inputValue,
  open,
  setOpen,
  setCountry,
  countries,
  country,
}: Prop) => {
  return (
    <div className=" sticky top-0 z-10">
      <BannerCareer />
      <div className="flex bg-background ">
        <div className="relative  w-full ">
          <Input
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={inputValue}
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
        <div className="h-10 md:h-12">
          <Region
            countries={countries}
            country={country}
            setCountry={setCountry}
          />
        </div>
      </div>
    </div>
  );
};

export default CareerSearch;
