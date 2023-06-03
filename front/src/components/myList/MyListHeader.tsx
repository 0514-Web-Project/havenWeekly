import { useRecoilState } from "recoil";
import LevelSelectBox from "./LevelSelectBox";
import React, { useCallback, useEffect, useState } from "react";
import MyLevelState from "@/recoil/MyLevel";
import MyListState from "@/recoil/MyList";

const MyListHeader = ({
  setAnalytics,
}: {
  setAnalytics: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [myLevel, setMyLevel] = useRecoilState(MyLevelState);
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
    <div className="flex justify-between mb-[10px]">
      <div className="gap-x-[8px] flex">
        {/* <-- 레벨 입력 폼 */}
        <span className="self-center">LV.</span>
        <LevelSelectBox />
        {/* 레벨 입력 폼 --> */}
        {/* <-- APPLY 버튼 */}
        <button
          disabled={myQuestLength < 4 || myLevel === 0}
          onClick={handleApply}
          className="disabled:border-[#ddd] disabled:bg-[#393f3d50] disabled:text-[#ffffff62] hover:bg-[#81af9e50] duration-300 border-[#81AF9E] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px] bg-[#81AF9E] dark:bg-transparent text-white"
        >
          APPLY
        </button>
        {/* APPLY 버튼 --> */}
        {/* <-- RESET 버튼 */}
        <button
          disabled={myQuestLength === 0 && myLevel === 0}
          onClick={() => {
            setMyList([]);
            setMyLevel(0);
          }}
          className="disabled:border-[#ddd] disabled:bg-[#393f3d50] disabled:text-[#ffffff62] hover:bg-[#FFB2B250] duration-300 border-[#FFB2B2] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px] bg-[#FFB2B2] dark:bg-transparent text-white"
        >
          RESET
        </button>
        {/* RESET 버튼 --> */}
      </div>
      {/* <-- 퀘스트 개수 */}
      <div className="text-[16px] self-center px-[10px]">{myQuestLength}/4</div>
      {/* 퀘스트 개수 --> */}
    </div>
  );
};

export default MyListHeader;
