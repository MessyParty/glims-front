import { atomFamily } from "recoil";

export const modalStates = atomFamily({
  key: "MODAL_STATES",
  default: false,
});
