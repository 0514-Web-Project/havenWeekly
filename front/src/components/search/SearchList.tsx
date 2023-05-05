import { QuestDummy, QuestType } from "@/data/QuestDummy";
import React from "react";

const SearchList = () => {
  return (
    <div className="">
      {QuestDummy.map((item: QuestType, index: number) => {
        return <SearchItem key={index} item={item} />;
      })}
    </div>
  );
};

export default SearchList;

const SearchItem = ({ item }: { item: QuestType }) => {
  const { name, difficulty } = item;
  return (
    <div className="flex cursor-pointer justify-between mx-[12px] py-[16px] text-[13px] border-b-[1px] border-solid border-[#fff">
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
