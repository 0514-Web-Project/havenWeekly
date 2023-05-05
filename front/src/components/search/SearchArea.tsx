import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

const SearchArea = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  return (
    <div className="border border-solid border-[#fff] rounded-[12px] p-[14px_12px] h-[259px] w-[48%]">
      <SearchInput
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <SearchList />
    </div>
  );
};

export default SearchArea;
