import { toast } from "sonner";
import http from "../../interceptor/index";

const post_todo = async (values) => {
  try {
    const result = await http.post("/todos", values);
    toast.success("todo added successfully");
    return result;
  } catch (error) {
    return error;
  }
};

export { post_todo };
