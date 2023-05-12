import React from "react";

const Header = () => {
  return (
    <div className="relative bg-dark text-[40px] w-full h-[96px] rounded-[18px] text-center leading-[96px] cs:rounded-[0px]">
      <div className="w-full">헤이븐 주간퀘 가이드</div>
      <div className="cursor-pointer w-[42px] absolute right-[30px] top-[32px]">
        <img src="/images/icon_menu.svg" alt="menu" />
      </div>
    </div>
  );
};

export default Header;
