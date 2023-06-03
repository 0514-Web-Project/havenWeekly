import ModeState from "@/recoil/Mode";
import React from "react";
import { useRecoilValue } from "recoil";

const MenuButton = () => {
  const mode = useRecoilValue(ModeState);

  return (
    <div className="cursor-pointer w-[42px] sm:w-[32px] mo:w-[25px]">
      <img src={`/images/icon_menu${mode ? "_black" : ""}.svg`} alt="menu" />
    </div>
  );
};

export default MenuButton;
