import MyListState from "@/recoil/MyList";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
const MyList = dynamic(() => import("../myList/MyList"), {
  ssr: false,
});

export default function MyListArea({
  setAnalytics,
}: {
  setAnalytics: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [myList, setMyList] = useRecoilState(MyListState);
  const [myQuestLength, setMyQuestLength] = useState(0);
  const [myLevel, setMyLevel] = useState<number>(0);

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
          {/* <-- 레벨 입력 폼 */}
          <span className="self-center">LV.</span>{" "}
          <select
            value={myLevel}
            onChange={(e) => setMyLevel(Number(e.target.value))}
            className="bg-[#555] w-[100px] border-white border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
          >
            <option value={0}>레벨 선택</option>
            <option value={200}>200~205</option>
            <option value={206}>206~210</option>
            <option value={211}>211~215</option>
            <option value={216}>216 이상</option>
          </select>
          {/* 레벨 입력 폼 --> */}
          {/* <-- APPLY 버튼 */}
          <button
            disabled={myQuestLength < 4 || myLevel === 0}
            onClick={handleApply}
            className="disabled:border-[#ddd] disabled:bg-[#393f3d50] disabled:text-[#ffffff62] hover:bg-[#81af9e50] duration-300 border-[#81AF9E] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
          >
            APPLY
          </button>
          {/* APPLY 버튼 --> */}
          {/* <-- RESET 버튼 */}
          <button
            disabled={myQuestLength === 0}
            onClick={() => setMyList([])}
            className="disabled:border-[#ddd] disabled:bg-[#393f3d50] disabled:text-[#ffffff62] hover:bg-[#FFB2B250] duration-300 border-[#FFB2B2] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]"
          >
            RESET
          </button>
          {/* RESET 버튼 --> */}
        </div>
        {/* <-- 퀘스트 개수 */}
        <div className="text-[16px] self-center px-[10px]">
          {myQuestLength}/4
        </div>
        {/* 퀘스트 개수 --> */}
      </div>
      <MyList />
    </div>
  );
}
