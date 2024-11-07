import axios from "axios";

export const callAPI = axios.create({
  baseURL: "https://posts-fake-api-pi.vercel.app",
});
