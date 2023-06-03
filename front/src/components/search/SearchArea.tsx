import useQuestData from "@/data/quest/useQuestData";
import { QuestType } from "@/data/type";
import React, { useEffect, useState } from "react";
import SearchList from "./SearchList";
import dynamic from "next/dynamic";

const SearchInput = dynamic(() => import("../search/SearchInput"), {
  ssr: false,
});

const SearchArea = () => {
  const [questOriginList, setQuestOriginList] = useState<QuestType[]>([]);
  const [searchResultList, setSearchResultList] = useState<QuestType[]>([]);
  const { getQuestList } = useQuestData();

  useEffect(() => {
    getQuestList({
      onSuccess: (data) => {
        setSearchResultList(data);
        setQuestOriginList(data);
      },
      onFail: (err) => {
        console.error(err);
      },
    });
  }, []);

  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[14px_12px] h-[259px] w-[48%] sm:w-full bg-white dark:bg-transparent shadow-light">
      <SearchInput
        questList={questOriginList}
        setSearchResultList={setSearchResultList}
      />
      <SearchList searchResultList={searchResultList} />
    </div>
  );
};

export default SearchArea;
