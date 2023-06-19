import { useQuery } from "@tanstack/react-query";
import { getPerfume } from "@/apis/perfume";

const usePerfume = (uuid: string) => {
  return useQuery(["perfume", uuid], () => getPerfume(uuid));
};

export default usePerfume;
