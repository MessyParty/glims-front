import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNickname } from "@/apis/user";

const useUpdateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation((nickname: string) => updateNickname(nickname), {
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });
};

export default useUpdateNickname;
