import React from "react";
import dynamic from "next/dynamic";
const DarkModeSwitch = dynamic(
  () => import("../components/_common/DarkModeSwitch"),
  {
    ssr: false,
  }
);

const Header = () => {
  return (
    <div className="relative mt-[20px] bg-dark h-[96px] rounded-[18px] text-center leading-[96px] cs:rounded-[0px]">
      {/* <-- 다크모드 스위치 */}
      <DarkModeSwitch />
      {/* 다크모드 스위치 --> */}
      {/* <-- 타이틀 */}
      <div className="text-[40px] sm:text-[30px] mo:text-[20px]">
        헤이븐 주간퀘 가이드
      </div>
      {/* 타이틀 --> */}
      {/* <-- 햄버거 버튼 */}
      <div className="cursor-pointer w-[42px] absolute right-[30px] top-[32px] sm:w-[32px] sm:top-[37px] mo:w-[25px] mo:top-[40px]">
        <img src="/images/icon_menu.svg" alt="menu" />
      </div>
      {/* 햄버거 버튼 --> */}
    </div>
  );
};

export default Header;
