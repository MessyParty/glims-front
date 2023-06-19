import { useQuery } from "@tanstack/react-query";
import { getAllReview } from "@/apis/review";

type UseAllReviewsProps = {
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};
const useAllReview = ({
  limit = 10,
  orderStandard = "DATE",
  sortType = "DESC",
}: UseAllReviewsProps) => {
  return useQuery(["review", "all", limit, orderStandard, sortType], () =>
    getAllReview({
      limit,
      orderStandard,
      sortType,
    }),
  );
};
export default useAllReview;
