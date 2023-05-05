import { QuestDummy, QuestType } from "@/data/QuestDummy";
import React from "react";

export default function MyList() {
  return (
    <div>
      {QuestDummy.map((item: QuestType, index: number) => {
        return <MyListItem item={item} key={index} index={index} />;
      })}
    </div>
  );
}

const MyListItem = ({ item, index }: { item: QuestType; index: number }) => {
  const { name, difficulty } = item;
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
        <button>
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
