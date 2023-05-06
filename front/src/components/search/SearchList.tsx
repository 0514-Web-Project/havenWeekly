import { QuestDummy, QuestType } from "@/data/QuestDummy";
import MyListState from "@/recoil/MyListState";
import React from "react";
import { useRecoilState } from "recoil";

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
  const [myList, setMyList] = useRecoilState(MyListState);

  return (
    <div
      onClick={() => {
        if (
          myList.findIndex((item: QuestType) => {
            return item.name === name;
          }) >= 0
        )
          return;
        setMyList(myList.concat({ name, difficulty }));
      }}
      className="hover:bg-[#ffffff10] duration-300 flex cursor-pointer justify-between px-[12px] py-[16px] text-[13px] border-b-[1px] border-solid border-[#fff"
    >
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
