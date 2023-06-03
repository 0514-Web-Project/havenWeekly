import { QuestType } from "@/data/type";
import ModeState from "@/recoil/Mode";
import MyListState from "@/recoil/MyList";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function MyList() {
  const [myList] = useRecoilState(MyListState);

  return (
    <div className="overflow-y-scroll scrollbar-hide h-[181px]">
      {myList.map((item: QuestType, index: number) => {
        return <MyListItem item={item} key={index} index={index} />;
      })}
    </div>
  );
}

const MyListItem = ({ item, index }: { item: QuestType; index: number }) => {
  const { name, difficulty } = item;
  const [myList, setMyList] = useRecoilState(MyListState);
  const mode = useRecoilValue(ModeState);

  return (
    <div className="flex justify-between px-[12px] py-[16px] text-[13px] border border-solid border-light dark:border-dark rounded-[12px] mb-[8px] shadow-light_s">
      <div className="whitespace-nowrap text-ellipsis overflow-hidden">{`${
        index + 1
      }. ${name}`}</div>
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
            src={`/images/icon_cancel${mode ? "_black" : ""}.svg`}
            alt="cancel"
          />
        </button>
      </div>
    </div>
  );
};
