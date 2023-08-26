import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "MyLevelStatePersist",
  storage: sessionStorage,
});

const MyLevelState = atom<number>({
  key: "MyLevelState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export default MyLevelState;
