import type { Brand } from "./interfaces/brand.interfece";
import api from ".";

export const getBrand = async (): Promise<Brand[]> => {
  const { data } = await api.get<Brand[]>("/api/v1/brands", {});
  return data;
};
