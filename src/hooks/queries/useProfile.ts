import { getCookie } from "@/utils/cookie";
import { ACCESS_TOKEN_COOKIE } from "@/constants/auth";
import { useQuery } from "@tanstack/react-query";
import { ProfileResponse } from "@/apis/interfaces/user.interface";
import { getProfile } from "@/apis/user";

const useProfile = () => {
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE);

  return useQuery<ProfileResponse>(["profile"], () => getProfile(), {
    enabled: !!accessToken,
    cacheTime: Infinity,
    staleTime: Infinity,
  });
};

export default useProfile;
