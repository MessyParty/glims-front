import { useQuery } from "@tanstack/react-query";
import { getReview } from "@/apis/review";

const useReview = (uuid: string) => {
  return useQuery(["review", uuid], () => getReview(uuid));
};

export default useReview;
