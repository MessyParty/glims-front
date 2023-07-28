import { useInfiniteQuery } from "@tanstack/react-query";

import { searchPerfumes } from "@/apis/perfume";

const useInfiniteScroll = (brandName: string) => {
  return useInfiniteQuery(
    ["searchPerfumesInfinite", brandName],
    ({ pageParam = 1 }) => searchPerfumes(brandName, pageParam),
    {
      getNextPageParam: (lastPage, pages) => lastPage,
    },
  );
};

export default useInfiniteScroll;
