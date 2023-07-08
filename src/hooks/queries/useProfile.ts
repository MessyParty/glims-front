import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import { useQuery } from "@tanstack/react-query";
import { ProfileResponse } from "@/apis/interfaces/auth.interface";
import { profile } from "@/apis/auth";

const useProfile = () => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

  return useQuery<ProfileResponse>(["profile"], () => profile(), {
    enabled: !!accessToken,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export default useProfile;
