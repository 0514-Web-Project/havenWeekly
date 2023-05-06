import { QuestDummy, QuestType } from "@/data/QuestDummy";
import MyListState from "@/recoil/MyListState";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SearchList = () => {
  return (
    <div className="overflow-y-scroll h-[181px]">
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
  const [isAlreadyAdd, setIsAlreadyAdd] = useState(false);

  useEffect(() => {
    setIsAlreadyAdd(
      myList.findIndex((item: QuestType) => {
        return item.name === name;
      }) >= 0
    );
  }, [myList]);

  const clickSearchItem = () => {
    if (isAlreadyAdd || myList.length === 4) return;
    setMyList(myList.concat({ name, difficulty }));
  };

  return (
    <div
      onClick={clickSearchItem}
      className="hover:bg-[#ffffff10] duration-300 flex cursor-pointer justify-between px-[12px] py-[16px] text-[13px] border-b-[1px] border-solid border-[#fff"
    >
      <div className="flex gap-x-[10px]">
        <div>{name}</div>
        {isAlreadyAdd && <div className="text-[#81AF9E]">추가완료</div>}
      </div>
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
