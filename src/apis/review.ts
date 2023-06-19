import axios from "axios";
import {
  Review,
  ReviewListType,
  ReviewParameterType,
} from "./interfaces/review.interface";

export const getAllReview = async (
  params: ReviewParameterType,
): Promise<ReviewListType[]> => {
  const { data } = await axios.get<ReviewListType[]>(
    `https://dev.glims.store/api/v1/reviews`,
    {
      params,
    },
  );
  return data;
};

export const getReview = async (id: string): Promise<Review> => {
  const { data } = await axios.get<Review>(
    `https://dev.glims.store/api/v1/reviews/${id}`,
  );

  return data;
};
