import ModeState from "@/recoil/Mode";
import React from "react";
import { useRecoilValue } from "recoil";

const MenuButton = () => {
  const mode = useRecoilValue(ModeState);

  return (
    <div className="cursor-pointer w-[42px] absolute right-[30px] top-[32px] sm:w-[32px] sm:top-[37px] mo:w-[25px] mo:top-[40px]">
      <img src={`/images/icon_menu${mode ? "_black" : ""}.svg`} alt="menu" />
    </div>
  );
};

export default MenuButton;
