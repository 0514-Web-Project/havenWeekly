import Analytics from "@/components/analytics/Analytics";
import HavenMap from "@/components/havenMap/HavenMap";
import MyListArea from "@/components/myList/MyListArea";
import { SearchArea } from "@/components/search";
import React, { useState } from "react";

export default function BodyContent() {
  const [analytics, setAnalytics] = useState<string | null>(null);

  return (
    <div className="bg-dark rounded-[18px] mt-[26px] p-[28px_49px] cs:rounded-[0px] md:p-[28px_20px] ">
      <div className="flex justify-between sm:flex-col sm:gap-y-[14px]">
        <SearchArea />
        <MyListArea setAnalytics={setAnalytics} />
      </div>
      <Analytics analytics={analytics} />
      <HavenMap />
    </div>
  );
}
