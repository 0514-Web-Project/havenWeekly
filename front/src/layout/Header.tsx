import React from "react";

const Header = () => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div className="relative mt-[20px] bg-dark h-[96px] rounded-[18px] text-center leading-[96px] cs:rounded-[0px]">
      {/* <-- 다크모드 스위치 */}
      <div className="cursor-pointer w-[42px] absolute left-[30px] top-[32px] sm:w-[32px] sm:top-[37px] mo:w-[25px] mo:top-[40px]">
        <div
          className="w-[50px] h-[32px] bg-[url(/images/switch_bg.svg)] flex items-center border border-solid border-white rounded-full p-1 cursor-pointer"
          onClick={() => setToggled((prev) => !prev)}
        >
          <div
            className={
              "bg-white h-[23px] w-[23px] rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggled ? null : " transform translate-x-[17px]")
            }
          ></div>
        </div>
      </div>
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
