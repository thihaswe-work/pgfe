import React from "react";

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
