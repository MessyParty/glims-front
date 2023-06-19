import axios from "axios";
import { Search } from "./interfaces/search.interface";

export const getSearch = async (
  option: string,
  keyword: string,
): Promise<Search[]> => {
  const { data } = await axios.get<Search[]>(`/perfumes/search`, {
    params: {
      [option]: keyword,
    },
  });
  return data;
};
