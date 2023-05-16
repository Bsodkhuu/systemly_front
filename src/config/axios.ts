import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://systemlyerp-production.up.railway.app",
  // baseURL: "http://localhost:3000",
  withCredentials: true,
});
