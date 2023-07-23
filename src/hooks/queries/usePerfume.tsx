import { useQuery } from "@tanstack/react-query";
import { getPerfume, getRandomPerfume } from "@/apis/perfume";

export const usePerfume = (uuid: string) => {
  return useQuery(["perfume", uuid], () => getPerfume(uuid));
};

export const useRandomPerfume = (num: number = 2) => {
  return useQuery(["perfume", "random", num], () => getRandomPerfume(num));
};
