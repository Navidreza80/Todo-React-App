import { axiosInstance } from "../../interceptor";

export const get_all_todos = () => axiosInstance.get("/todos");