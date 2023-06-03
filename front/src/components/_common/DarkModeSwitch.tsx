import React, { useEffect } from "react";
import ModeState from "@/recoil/Mode";
import { useRecoilState } from "recoil";

/**
 * 다크모드 스위치
 * - header 에서 사용중
 * @returns
 */
const DarkModeSwitch = () => {
  const [modeState, setModeState] = useRecoilState(ModeState);

  useEffect(() => {
    if (!modeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modeState]);

  return (
    <div>
      <div className="cursor-pointer w-[42px] absolute left-[30px] top-[32px] sm:w-[32px] sm:top-[37px] mo:w-[25px] mo:top-[40px]">
        <div
          className="w-[50px] h-[32px] bg-[url(/images/switch_bg.svg)] flex items-center border border-solid dark:border-white border-[#fff] rounded-full p-1 cursor-pointer"
          onClick={() => setModeState((prev) => !prev)}
        >
          <div
            className={
              "bg-white h-[23px] w-[23px] rounded-full shadow-md transform ease-in-out" +
              (modeState ? null : " transform translate-x-[17px]")
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
