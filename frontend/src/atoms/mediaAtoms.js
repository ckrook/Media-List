import { atom } from "recoil";

export const mediaIdState = atom({
  key: "mediaIdState",
  default: [],
});

export const selectedIdState = atom({
  key: "selectedIdState",
  default: null,
});
