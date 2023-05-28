import MyLevelState from "@/recoil/MyLevel";
import React from "react";
import { useRecoilState } from "recoil";

const LevelSelectBox = () => {
  const [myLevel, setMyLevel] = useRecoilState(MyLevelState);

  return (
    <>
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
    </>
  );
};

export default LevelSelectBox;
