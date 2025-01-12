import { axiosInstance } from "../../interceptor";

export const new_todo = (payload) => axiosInstance.post("/todos", payload);
