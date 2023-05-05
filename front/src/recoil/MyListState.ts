import { QuestType } from "@/data/QuestDummy";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "MyListStatePersist",
  storage: localStorage,
});

const MyListState = atom<QuestType[]>({
  key: "MyListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default MyListState;
