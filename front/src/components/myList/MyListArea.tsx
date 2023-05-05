import MyListState from "@/recoil/MyListState";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import MyList from "./MyList";

export default function MyListArea() {
  const [myList, setMyList] = useRecoilState(MyListState);
  const [myQuestLength, setMyQuestLength] = useState(0);

  useEffect(() => {
    setMyQuestLength(myList.length);
  }, [myList]);

  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[14px_12px] h-[259px] w-[48%]">
      <div className="flex justify-between mb-[6px]">
        <div className="gap-x-[8px] flex">
          <button className="border-[#81AF9E] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]">
            APPLY
          </button>
          <button
            onClick={() => setMyList([])}
            className="border-[#FFB2B2] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
          >
            RESET
          </button>
        </div>
        <div className="text-[16px] p-[10px]">{myQuestLength}/4</div>
      </div>
      <MyList />
    </div>
  );
}
