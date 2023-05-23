import { QuestType } from "@/data/type";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  questList: QuestType[];
  setSearchResultList: React.Dispatch<React.SetStateAction<QuestType[]>>;
};

const SearchInput = (props: Props) => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const { setSearchResultList, questList } = props;

  useEffect(() => {
    setSearchResultList(questList);
  }, [questList]);

  useEffect(() => {
    handleSearch();
  }, [searchKeyword]);

  // 문자열을 초성으로 변환하는 함수
  const cho = (str: string) => {
    let res = ""; // 초성으로 변환
    const choArr = [
      "ㄱ",
      "ㄲ",
      "ㄴ",
      "ㄷ",
      "ㄸ",
      "ㄹ",
      "ㅁ",
      "ㅂ",
      "ㅃ",
      "ㅅ",
      "ㅆ",
      "ㅇ",
      "ㅈ",
      "ㅉ",
      "ㅊ",
      "ㅋ",
      "ㅌ",
      "ㅍ",
      "ㅎ",
    ];

    let index = 0;
    for (const c of str) {
      let code = Math.floor((str.charCodeAt(index) - 44032) / 588);
      res += code >= 0 ? choArr[code] : c;
      index++;
    }

    return res;
  };

  // 검색 (공백제거, 초성검색)
  const handleSearch = useCallback(() => {
    const result: QuestType[] = []; // 검색 결과
    const keyword = searchKeyword.replace(/ /g, ""); // 검색한 키워드
    const searchCho = cho(keyword); // 검색한 키워드 초성으로 변환

    questList.forEach((quest, i) => {
      const compare = quest.name.replace(/ /g, ""); // 비교할 퀘스트 이름
      const compCho = cho(compare); // 비교문자의 초성
      const strIdx = []; // 비교문자열에서 검색어와 일치하는 부분의 시작 위치

      // 일치하는 부분 찾기
      for (let i = 0; i < compCho.length; i++) {
        const idx = compCho.indexOf(searchCho, i); // 일치하는 부분의 인덱스

        if (idx !== -1 && strIdx.indexOf(idx) == -1) strIdx.push(idx);
      }
      let chk = 0;

      strIdx.forEach((idx, i) => {
        let str = searchCho.split("");

        for (let j = 0; j < keyword.length; j++) {
          if (keyword.charCodeAt(j) - 44032 >= 0)
            // 검색어중에 초성이 아닌부분
            str[j] = compare[idx + j * 1]; // 초성변환 전의 문자로 치환
        }

        if (str.join("") == keyword) chk = 1;
      });

      if (chk) result.push(quest);
    });

    setSearchResultList(result);
  }, [searchKeyword]);

  return (
    <div className="gap-x-[10px] mb-[6px] flex rounded-[15px] h-[40px] border border-solid border-[#fff] p-[11px_12px]">
      <img
        src="/images/icon_magnifier.svg"
        alt="magnifier"
        className="w-[18px] h-[19px]"
      />
      <input
        id="search_input"
        placeholder="퀘스트 검색 (ex. 적로봇처치, ㅈㄹㅂㅊㅊ)"
        className="bg-transparent focus:outline-0 w-full"
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
      />
      {searchKeyword.length > 0 && (
        <div
          className="cursor-pointer"
          onClick={() => {
            setSearchKeyword("");
            const inputElement = document.getElementById("search_input");
            inputElement?.focus();
          }}
        >
          <img
            className="h-[16px]"
            src="/images/icon_cancel.svg"
            alt="search_cancel"
          />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
