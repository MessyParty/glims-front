import {
  ReveiwResponse,
  Review,
  ReviewListType,
  ReviewParameterType,
} from "./interfaces/review.interface";
import api from ".";

export const getAllReview = async (
  params: ReviewParameterType,
): Promise<ReviewListType["content"]> => {
  const { data } = await api.get<ReviewListType>(`/api/v1/reviews`, {
    params,
  });
  return data.content;
};

export const getReview = async (id: string): Promise<Review> => {
  const { data } = await api.get<Review>(`/api/v1/reviews/${id}`);

  return data;
};

export const deleteReview = async (id: string) => {
  await api.delete(`/api/v1/reviews/${id}`);
};

export const createReview = async (payload: ReveiwResponse) => {
  const { data } = await api.post(`/api/v1/reviews`, {
    ...payload,
  });
  return data;
};

export const updateReview = async (id: string, payload: ReveiwResponse) => {
  const { data } = await api.patch(`/api/v1/reviews/${id}`, {
    ...payload,
  });
  return data;
};

export const createReviewPhoto = async (uuid: string, body: FormData) => {
  const { data } = await api.post(`/api/v1/reviews/photos/${uuid}`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getMyReview = async (
  params: ReviewParameterType,
): Promise<Review[]> => {
  const { data } = await api.get(`/api/v1/reviews/myReviews`, {
    params,
  });
  return data.content;
};

export const getBestReview = async (num: number): Promise<Review[]> => {
  const { data } = await api.get<Review[]>("/api/v1/reviews/bestReviews", {
    params: {
      amountOfBestReview: num,
    },
  });
  return data;
};

export const getBestReviewByPerfume = async (
  pid: string,
): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(
    `/api/v1/reviews/${pid}/bestReviews`,
  );
  return data;
};

export const getPerfumeReview = async (pid: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>("/api/v1/reviews/perfumeReviews", {
    params: {
      perfumeUuid: pid,
    },
  });
  return data;
};

export const createHeart = async (uuid: string) => {
  await api.post(`/api/v1/reviews/${uuid}/heart`);
};

export const deleteHeart = async (uuid: string) => {
  await api.delete(`/api/v1/reviews/${uuid}/heart`);
};
