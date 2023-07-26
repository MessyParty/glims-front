import { useQuery } from "@tanstack/react-query";
import { getMyReview } from "@/apis/review";

type UseReviewsProps = {
  offset?: number;
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
  isLoggedIn: boolean;
};

const useMyReviews = ({
  offset = 0,
  limit = 1000,
  orderStandard = "HEARTS_COUNT",
  sortType = "DESC",
  isLoggedIn,
}: UseReviewsProps) => {
  return useQuery(
    ["review", "my", offset, limit, orderStandard, sortType],
    () =>
      isLoggedIn ? getMyReview({ offset, limit, orderStandard, sortType }) : [],
  );
};

export default useMyReviews;
