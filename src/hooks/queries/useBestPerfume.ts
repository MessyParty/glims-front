import { useQuery } from "@tanstack/react-query";
import { getBestPerfume } from "@/apis/perfume";

const useBestPerfume = (num: number) => {
  return useQuery(["perfume", "best"], () => getBestPerfume(num));
};

export default useBestPerfume;
