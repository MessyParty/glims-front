import axios from "axios";
import { Perfume } from "./interfaces/perfume.interfece";

export const getPerfume = async (rid: string): Promise<Perfume> => {
  const { data } = await axios.get<Perfume>(
    `https://dev.glims.store/api/v1/perfumes/${rid}`
  );

  return data;
};

export const getBestPerfume = async (num: number): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>(
    "https://dev.glims.store/api/v1/perfumes/best",
    {
      params: {
        amount: num,
      },
    }
  );
  return data;
};

export const getRandomPerfume = async (num: number): Promise<Perfume[]> => {
  const { data } = await axios.get<Perfume[]>(
    "https://dev.glims.store/api/v1/perfumes/random",
    {
      params: {
        amount: num,
      },
    }
  );
  return data;
};

export const searchPerfumes = async (
  brand: string,
  pageParam?: number
): Promise<Perfume> => {
  const { data } = await axios.get<Perfume>(
    "https://dev.glims.store/api/v1/perfumes",
    {
      params: {
        brand: brand,
      },
    }
  );
  return data;
};
