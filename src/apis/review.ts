import axios from "axios";
import {
  ReveiwResponse,
  Review,
  ReviewListType,
  ReviewParameterType,
} from "./interfaces/review.interface";
import api from ".";


export const getAllReview = async (
  params: ReviewParameterType
): Promise<ReviewListType[]> => {
  const { data } = await axios.get<ReviewListType[]>(
    `https://dev.glims.store/api/v1/reviews`,
    {
      params,
    }
  );
  return data;
};

export const getReview = async (id: string): Promise<Review> => {
  const { data } = await api.get<Review>(
    `https://dev.glims.store/api/v1/reviews/${id}`,

  );

  return data;
};


export const deleteReview = async (id: string) => {
  await api.delete(`https://dev.glims.store/api/v1/reviews/${id}`);
};

export const createReview = async (payload: ReveiwResponse) => {
  const { data } = await api.post(`https://dev.glims.store/api/v1/reviews`, {
    ...payload,
  });
  return data;
};

export const updateReview = async (id: string, payload: ReveiwResponse) => {
  const { data } = await api.patch(
    `https://dev.glims.store/api/v1/reviews/${id}`,
    {
      ...payload,
    },
  );
  return data;
};

export const createReviewPhoto = async (uuid: string, body: FormData) => {
  const { data } = await api.post(
    `https://dev.glims.store/api/v1/reviews/photos/${uuid}`,
    body,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return data;
};

export const getMyReview = async (
  params: ReviewParameterType
): Promise<ReviewListType[]> => {
  const { data } = await api.get(`/api/v1/reviews/myReviews`, {
    params,
  });
  return data;
};

