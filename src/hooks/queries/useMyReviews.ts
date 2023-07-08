import { useQuery } from "@tanstack/react-query";
import { getMyReview } from "@/apis/review";

type UseReviewsProps = {
  offset?: number;
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};

const useMyReviews = ({
  offset = 0,
  limit = 3,
  orderStandard = "HEARTS_COUNT",
  sortType = "DESC",
}: UseReviewsProps) => {
  return useQuery(["myReviews", offset, limit, orderStandard, sortType], () =>
    getMyReview({ offset, limit, orderStandard, sortType })
  );
};

export default useMyReviews;
