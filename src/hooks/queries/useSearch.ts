import { useQuery } from "@tanstack/react-query";
import { getSearch } from "@/apis/search";

const useSearch = (option: string, keyword: string) => {
  return useQuery(["search", option, keyword], () =>
    getSearch(option, keyword),
  );
};

export default useSearch;
