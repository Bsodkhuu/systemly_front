import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://systemlyerp-production.up.railway.app",
  withCredentials: true,
});
