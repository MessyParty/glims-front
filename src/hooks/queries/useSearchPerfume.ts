import { useQuery } from "@tanstack/react-query";

import { searchPerfumes } from "@/apis/perfume";

const useSearchPerfumes = (brand: string) => {
  return useQuery(["searchPerfumes", brand], () => searchPerfumes(brand));
};

export default useSearchPerfumes;
