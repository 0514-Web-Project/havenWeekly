import { QuestType } from "@/data/type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "MyListStatePersist",
  storage: sessionStorage,
});

const MyListState = atom<QuestType[]>({
  key: "MyListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default MyListState;
