import axios from "axios";

export const callAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
