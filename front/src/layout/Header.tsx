import React from "react";

const Header = () => {
  return (
    <div className="relative mt-[20px] bg-dark h-[96px] rounded-[18px] text-center leading-[96px] cs:rounded-[0px]">
      <div className="text-[40px] sm:text-[30px] mo:text-[20px]">
        헤이븐 주간퀘 가이드
      </div>
      <div className="cursor-pointer w-[42px] absolute right-[30px] top-[32px] sm:w-[32px] sm:top-[37px] mo:w-[25px] mo:top-[40px]">
        <img src="/images/icon_menu.svg" alt="menu" />
      </div>
    </div>
  );
};

export default Header;
