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
          <button
            disabled={myQuestLength < 4}
            className="disabled:border-[#ddd] disabled:bg-[#393f3d50] disabled:text-[#ffffff62] hover:bg-[#81af9e50] duration-300 border-[#81AF9E] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
          >
            APPLY
          </button>
          <button
            disabled={myQuestLength === 0}
            onClick={() => setMyList([])}
            className="disabled:border-[#ddd] disabled:bg-[#393f3d50] disabled:text-[#ffffff62] hover:bg-[#FFB2B250] duration-300 border-[#FFB2B2] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
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
