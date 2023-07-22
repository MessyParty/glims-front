import { atom, selector } from "recoil";
import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";

export const loginStateSelector = selector({
  key: "LOGIN_STATE_SELECTOR",
  get: () => {
    return getCookie(ACCESS_TOKEN_COOKIE) !== undefined;
  },
});

export const loginState = atom({
  key: "LOGIN_STATE",
  default: false,
});
