import React from "react";

interface MiniCardType {
  title: string;
  realTitle: string;
}

export const MiniCard = ({ title, realTitle }: MiniCardType) => {
  return (
    <div className="w-full flex">
      <div className="w-1/3">{title}</div>
      <div className="">:</div>
      <div className="w-2/3 pl-2">{realTitle}</div>
    </div>
  );
};

interface MinilistType {
  title: string;
  list: string[];
}

const MiniList = ({ title, list }: MinilistType) => {
  return (
    <div>
      <div className="font-bold text-lg">{title ?? "Requirement"}</div>
      <ul className="flex flex-col gap-3 mt-5 text-secondary careers">
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default MiniList;
