import Analytics from "@/components/analytics/Analytics";
import HavenMap from "@/components/havenMap/HavenMap";
import MyList from "@/components/myList/MyList";
import SearchList from "@/components/search/SearchList";
import React from "react";

export default function BodyContent() {
  return (
    <div>
      <SearchList />
      <MyList />
      <Analytics />
      <HavenMap />
    </div>
  );
}
