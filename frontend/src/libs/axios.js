import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PLANT_API,
    headers: {
    "Api-Key": import.meta.env.VITE_PLANT_API_KEY, // safer to keep in .env
    "Content-Type": "application/json",
  },
})