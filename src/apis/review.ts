import axios from "axios";
import {
  Review,
  ReviewListType,
  ReviewParameterType,
} from "./interfaces/review.interface";
import api from "@/apis/index";

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
  const { data } = await axios.get<Review>(
    `https://dev.glims.store/api/v1/reviews/${id}`
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
