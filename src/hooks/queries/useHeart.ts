import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createHeart, deleteHeart } from "@/apis/review";

export const useIncreaseLike = () => {
  const queryClient = useQueryClient();

  return useMutation((uuid: string) => createHeart(uuid), {
    onSuccess: () => {
      queryClient.invalidateQueries(["review"]);
    },
  });
};

export const useDecreaseLike = () => {
  const queryClient = useQueryClient();

  return useMutation((uuid: string) => deleteHeart(uuid), {
    onSuccess: () => {
      queryClient.invalidateQueries(["review"]);
    },
  });
};
