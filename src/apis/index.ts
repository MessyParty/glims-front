import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  validateStatus: (status) => status >= 200 && status < 400,
});

export default api;
