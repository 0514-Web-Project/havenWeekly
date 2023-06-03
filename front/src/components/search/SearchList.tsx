import { QuestType } from "@/data/type";
import MyListState from "@/recoil/MyList";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const SearchList = ({
  searchResultList,
}: {
  searchResultList: QuestType[];
}) => {
  return (
    <div className="overflow-y-scroll scrollbar-hide h-[181px]">
      {searchResultList.map((item: QuestType, index: number) => {
        return <SearchItem key={`${item.name}-${index}`} item={item} />;
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
      className="dark:hover:bg-[#ffffff10] hover:bg-[#00000010] flex cursor-pointer justify-between px-[12px] py-[16px] text-[13px] border-b-[1px] border-solid border-[#fff"
    >
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">
        {name}{" "}
        {isAlreadyAdd && (
          <span className="ml-[10px] text-[#81AF9E] ">추가완료</span>
        )}
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
