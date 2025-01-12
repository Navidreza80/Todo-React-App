import { axiosInstance } from "../../interceptor";

export const check_uncheck_todo = (payload) =>
  axiosInstance.put("/todos/" + payload.id, { isDone: payload.isDone });
