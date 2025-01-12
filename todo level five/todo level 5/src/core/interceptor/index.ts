import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://67820f99c51d092c3dce1dac.mockapi.io/todo/v1",
});
