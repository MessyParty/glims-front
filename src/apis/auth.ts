import { LoginResponse } from "@/apis/interfaces/auth.interface";
import api from "@/apis/index";

export const getLoginTokens = async (code: string): Promise<LoginResponse> => {
  const { data: stateData } = await api.get("/api/v1/session/state", {
    params: { provider: "kakao" },
    withCredentials: true,
  });
  const { data: loginData } = await api.get("/login/oauth2/code/kakao", {
    params: { code: code, state: stateData.state },
    withCredentials: true,
  });
  return loginData;
};

export const logout = async () => {
  return await api.post("/api/v1/logout");
};
