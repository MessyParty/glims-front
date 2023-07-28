import axios from "axios";
import { Search } from "./interfaces/search.interface";

export const getSearch = async (
  option: string,
  keyword: string,
): Promise<Search["content"]> => {
  const { data } = await axios.get<Search>("/api/v1/perfumes/search", {
    params: {
      [option]: keyword,
    },
  });
  return data.content;
};
