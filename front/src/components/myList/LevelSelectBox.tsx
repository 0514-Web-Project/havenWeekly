import MyLevelState from "@/recoil/MyLevel";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import cn from "clsx";

const LEVEL_LIST = [
  { label: "200 ~ 205", value: 200 },
  { label: "206 ~ 210", value: 206 },
  { label: "211 ~ 215", value: 211 },
  { label: "216 이상", value: 216 },
];

const LevelSelectBox = () => {
  const myLevel = useRecoilValue(MyLevelState);
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef<any>();

  // 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
  useEffect(() => {
    const handleOutside = (e: any) => {
      if (outsideRef.current && !outsideRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [outsideRef]);

  const selectedLevel = useMemo(() => {
    if (!myLevel) return "레벨 선택";
    return (
      LEVEL_LIST.find((item) => {
        return item.value === myLevel;
      })?.label ?? "레벨 선택"
    );
  }, [myLevel]);

  return (
    <>
      <div
        ref={outsideRef}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="relative text-center bg-[#555] cursor-pointer w-[100px] border-white border border-solid text-[14px] p-[7px_10px] rounded-[10px]"
      >
        <div className="flex justify-between">
          <div className="text-[12px] leading-[20px]">{selectedLevel}</div>
          <div className="self-center">
            <img src="/images/dropdown_white.svg" alt="dropdown" />
          </div>
        </div>
        {isOpen && (
          <ul className="z-[1] w-[100px] bg-[#555] absolute left-0 top-[35px] border-white border border-solid rounded-[10px]">
            {LEVEL_LIST.map((item, index) => {
              return <LevelSelectItem item={item} index={index} key={index} />;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default LevelSelectBox;

const LevelSelectItem = ({ item, index }: any) => {
  const setMyLevel = useSetRecoilState(MyLevelState);
  return (
    <li
      className={cn("hover:bg-[#ffffff1f] duration-300 p-[5px_10px]", {
        ["p-[10px_10px_5px]"]: index === 0,
        ["p-[5px_10px_10px]"]: index === 3,
      })}
      onClick={(e: any) => {
        setMyLevel(item.value);
      }}
    >
      {item.label}
    </li>
  );
};
