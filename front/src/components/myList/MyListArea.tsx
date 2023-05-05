import React from "react";
import MyList from "./MyList";

export default function MyListArea() {
  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[14px_12px] h-[259px] w-[48%]">
      <div className="flex justify-between mb-[6px]">
        <div className="gap-x-[8px] flex">
          <button className="border-[#81AF9E] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]">
            APPLY
          </button>
          <button className="border-[#FFB2B2] border border-solid text-[14px] p-[7px_10px] h-fit rounded-[10px]">
            RESET
          </button>
        </div>
        <div className="text-[16px] p-[10px]">2/4</div>
      </div>
      <MyList />
    </div>
  );
}
