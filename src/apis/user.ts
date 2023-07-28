import { ProfileResponse } from "@/apis/interfaces/user.interface";
import api from "@/apis/index";

export const getProfile = async (): Promise<ProfileResponse> => {
  const { data } = await api.get("api/v1/users");
  return data;
};

export const updateNickname = async (nickname: string) => {
  await api.patch("api/v1/users", { nickname });
};
