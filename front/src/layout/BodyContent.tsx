import Analytics from "@/components/analytics/Analytics";
import HavenMap from "@/components/havenMap/HavenMap";
import MyList from "@/components/myList/MyList";
import { SearchArea } from "@/components/search";
import React from "react";

export default function BodyContent() {
  return (
    <div className="bg-dark w-[906px] h-[1058px] rounded-[18px] mt-[26px] p-[34px_49px]">
      <SearchArea />
      <MyList />
      <Analytics />
      {/* <HavenMap /> */}
    </div>
  );
}
