import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "ModeStatePersist",
  storage: localStorage,
});

/**
 * true > light mode
 * false > dark mode
 */
const ModeState = atom<boolean>({
  key: "ModeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default ModeState;
