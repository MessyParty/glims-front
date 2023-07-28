import { Search } from "./interfaces/search.interface";
import api from ".";

export const getSearch = async (
  option: string,
  keyword: string,
): Promise<Search["content"]> => {
  const { data } = await api.get<Search>("/api/v1/perfumes/search", {
    params: {
      [option]: keyword,
    },
  });
  return data.content;
};
