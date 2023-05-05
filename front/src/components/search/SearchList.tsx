import { QuestDummy } from "@/data/QuestDummy";
import React from "react";

const SearchList = () => {
  console.log(QuestDummy);
  return (
    <div className="">
      {QuestDummy.map((item: any, index: number) => {
        return <SearchItem key={index} item={item} />;
      })}
    </div>
  );
};

export default SearchList;

const SearchItem = (item: any) => {
  const { name, difficulty } = item.item;
  return (
    <div className="flex justify-between mx-[12px] py-[16px] text-[13px] border-b-[1px] border-solid border-[#fff">
      <div>{name}</div>
      <div className="flex">
        {difficulty}
        <img
          className="px-[3px]"
          src="/images/icon_difficulty.svg"
          alt="difficulty"
        />
      </div>
    </div>
  );
};
