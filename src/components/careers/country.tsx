import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlineGlobal } from "react-icons/ai";
interface Prop {
  countries: { name: string; image: string }[];
  country: string;
  setCountry: (para: string) => void;
}

export function Region({ countries, country, setCountry }: Prop) {
  return (
    <Select
      defaultValue={country}
      onValueChange={(e) => {
        console.log(e);
        setCountry(e);
      }}
    >
      <SelectTrigger className="w-[270px] h-full bg-background lg:mr-10 text-sm lg:text-base border-thirdBgColor">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Country</SelectLabel>

          <SelectItem value="Global" checkIcon={false}>
            <div className="flex  gap-3 w-full">
              <AiOutlineGlobal className="text-md" />
              <span className=""> Global</span>
            </div>
          </SelectItem>
          {countries.map((c) => {
            return (
              <SelectItem value={c.name} checkIcon={false} key={c.name}>
                <div className="flex  gap-3 w-full">{c.name}</div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
