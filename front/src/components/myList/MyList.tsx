import { QuestDummy, QuestType } from "@/data/QuestDummy";
import MyListState from "@/recoil/MyListState";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function MyList() {
  const [myList] = useRecoilState(MyListState);
  const [list, setList] = useState<QuestType[]>([]);

  useEffect(() => {
    setList(myList);
  }, [myList]);

  return (
    <div className="overflow-y-scroll h-[181px]">
      {list.map((item: QuestType, index: number) => {
        return <MyListItem item={item} key={index} index={index} />;
      })}
    </div>
  );
}

const MyListItem = ({ item, index }: { item: QuestType; index: number }) => {
  const { name, difficulty } = item;
  const [myList, setMyList] = useRecoilState(MyListState);

  return (
    <div className="flex justify-between px-[12px] py-[16px] text-[13px] border border-solid border-[#fff rounded-[12px] mb-[8px]">
      <div>{`${index + 1}. ${name}`}</div>
      <div className="flex">
        {difficulty}
        <img
          className="px-[3px]"
          src="/images/icon_difficulty.svg"
          alt="difficulty"
        />
        <button
          onClick={() => {
            setMyList(
              myList.filter((item) => {
                return name !== item.name;
              })
            );
          }}
        >
          <img
            className="mx-[10px]"
            src="/images/icon_cancel.svg"
            alt="cancel"
          />
        </button>
      </div>
    </div>
  );
};
