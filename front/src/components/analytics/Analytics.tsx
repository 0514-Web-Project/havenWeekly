import MyListState from "@/recoil/MyListState";
import React from "react";
import { useRecoilValue } from "recoil";

export default function Analytics({ analytics }: { analytics: string | null }) {
  const myListState = useRecoilValue(MyListState);
  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[18px_22px] mt-[14px]">
      <div>분석</div>
      <div className="text-[13px] my-[5px]">
        {!analytics ? (
          <>APPLY 버튼을 누르면 분석 결과가 출력됩니다.</>
        ) : (
          <ul>
            <li>{analytics}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
