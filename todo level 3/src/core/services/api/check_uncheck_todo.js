import { toast } from "sonner";
import http from "../../interceptor/index";

const check_uncheck_todo = async (value, id) => {
  try {
    const result = await http.put("/todos/" + id, value);
    toast.success("todo checked successfully");
    return result;
  } catch (error) {
    return error;
  }
};

export { check_uncheck_todo };
