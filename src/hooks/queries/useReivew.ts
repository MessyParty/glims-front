import { ReveiwResponse } from "./../../apis/interfaces/review.interface";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getReview,
  getAllReview,
  deleteReview,
  updateReview,
  createReview,
} from "@/apis/review";

type UseAllReviewsProps = {
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};

export const useReview = (uuid: string) => {
  return useQuery(["review", uuid], () => getReview(uuid));
};

export const useAllReview = ({
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

export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation((id: string) => deleteReview(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["review"]);
    },
  });
};

export const useUpdateReview = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    (payload: ReveiwResponse) =>
      updateReview(id, {
        body: payload.body,
        title: payload.title,
        longevityRatings: payload.longevityRatings,
        overallRatings: payload.overallRatings,
        sillageRatings: payload.sillageRatings,
        scentRatings: payload.scentRatings,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["review"]);
      },
    },
  );
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (payload: ReveiwResponse) =>
      createReview({
        body: payload.body,
        title: payload.title,
        longevityRatings: payload.longevityRatings,
        overallRatings: payload.overallRatings,
        sillageRatings: payload.sillageRatings,
        scentRatings: payload.scentRatings,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["review"]);
      },
    },
  );
};
