import MyListState from "@/recoil/MyListState";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import MyList from "./MyList";

export default function MyListArea({
  setAnalytics,
}: {
  setAnalytics: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [myList, setMyList] = useRecoilState(MyListState);
  const [myQuestLength, setMyQuestLength] = useState(0);

  useEffect(() => {
    setMyQuestLength(myList.length);
    if (myList.length < 4) setAnalytics(null);
  }, [myList]);

  const handleApply = useCallback(() => {
    setAnalytics(
      `- 난이도 : 평균 ${
        myList
          .map((item) => item.difficulty)
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) / 4
      }`
    );
  }, [myList]);

  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[14px_12px] h-[259px] w-[48%] sm:w-full">
      <div className="flex justify-between mb-[10px]">
        <div className="gap-x-[8px] flex">
          <span className="self-center">LV.</span>{" "}
          <input
            placeholder="200"
            className="bg-[#555] text-right w-[70px] border-white border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
          />
          <button
            disabled={myQuestLength < 4}
            onClick={handleApply}
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
        <div className="text-[16px] self-center px-[10px]">
          {myQuestLength}/4
        </div>
      </div>
      <MyList />
    </div>
  );
}
