import { useQuery } from "@tanstack/react-query";

import { getBrand } from "@/apis/brand";

const useBrand = () => {
  return useQuery(["brand"], () => getBrand());
};

export default useBrand;
