import React from "react";

type Props = {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ searchKeyword, setSearchKeyword }: Props) => {
  return (
    <div className="gap-x-[10px] mb-[6px] flex rounded-[15px] h-[40px] border border-solid border-[#fff] p-[11px_12px]">
      <img
        src="/images/icon_magnifier.svg"
        alt="magnifier"
        className="w-[18px] h-[19px]"
      />
      <input
        placeholder="퀘스트 검색"
        className="bg-transparent focus:outline-0"
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
