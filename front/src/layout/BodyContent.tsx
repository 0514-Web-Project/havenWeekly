import Analytics from "@/components/analytics/Analytics";
import HavenMap from "@/components/havenMap/HavenMap";
import MyListArea from "@/components/myList/MyListArea";
import { SearchArea } from "@/components/search";
import React, { useState } from "react";

export default function BodyContent() {
  const [myQuestList, setMyQuestList] = useState([]);

  return (
    <div className="bg-dark w-[906px] h-[1058px] rounded-[18px] mt-[26px] p-[34px_49px]">
      <div className="flex justify-between">
        <SearchArea />
        <MyListArea />
      </div>
      <Analytics />
      {/* <HavenMap /> */}
    </div>
  );
}
