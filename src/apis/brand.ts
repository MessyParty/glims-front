import axios from "axios";
import type { Brand } from "./interfaces/brand.interfece";

export const getBrand = async (): Promise<Brand[]> => {
  const { data } = await axios.get<Brand[]>(
    "https://dev.glims.store/api/v1/brands",
    {},
  );
  return data;
};
