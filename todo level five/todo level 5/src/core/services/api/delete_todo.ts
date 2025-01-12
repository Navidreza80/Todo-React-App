import { axiosInstance } from "../../interceptor";

export const delete_todo = (id) => axiosInstance.delete("/todos/" + id);

