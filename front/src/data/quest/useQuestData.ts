import { useState } from "react";
import axios from "axios";
import { CallbackType, QuestType } from "@/data/type";

const useQuestData = () => {
  const parseQuestData = (data: any): QuestType[] => {
    const result: QuestType[] = [];

    data.map((d: any) => {
      result.push({
        id: d.id,
        name: d.name ?? "",
        difficulty: d.difficulty ?? 1,
      });
    });

    return result;
  };

  const getQuestList = (callback: CallbackType) => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "haven/quest/")
      .then((res) => {
        const { data } = res;
        const result = parseQuestData(data);

        callback.onSuccess(result);
      })
      .catch((err) => {
        callback.onFail(err);
      });
  };

  return { getQuestList };
};

export default useQuestData;
