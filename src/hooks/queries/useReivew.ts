import { ReveiwResponse } from "./../../apis/interfaces/review.interface";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getReview,
  getAllReview,
  deleteReview,
  updateReview,
  createReview,
  createReviewPhoto,
  getBestReview,
  getBestReviewByPerfume,
  getPerfumeReview,
} from "@/apis/review";

type UseAllReviewsProps = {
  limit?: number;
  orderStandard?: "DATE" | "HEARTS_COUNT";
  sortType?: "DESC" | "ASC";
};

type PhotoPayloadType = {
  id: string;
  photo: FormData;
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
      offset: 0,
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

export const useBestReviews = (num: number) => {
  return useQuery(["review", "best", num], () => getBestReview(num));
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
        perfumeUuid: payload.perfumeUuid,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["review"]);
      },
    },
  );
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
        perfumeUuid: payload.perfumeUuid,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["review"]);
      },
    },
  );
};

export const useCreateReviewPhoto = () => {
  return useMutation(({ id, photo }: PhotoPayloadType) =>
    createReviewPhoto(id, photo),
  );
};

export const useBestPerfumeReview = (id: string) => {
  return useQuery(["bestPerfumeReview", id], () => getBestReviewByPerfume(id));
};

export const usePerfumeReviews = (id: string) => {
  return useQuery(["perfumeReview", id], () => getPerfumeReview(id));
};
