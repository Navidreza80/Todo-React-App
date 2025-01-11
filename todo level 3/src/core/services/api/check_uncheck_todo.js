import { toast } from "sonner";
import http from "../../interceptor/index";

const check_uncheck_todo = async (value, id, isDone) => {
  try {
    const result = await http.put("/todos/" + id, value);
    toast.success(`todo ${isDone ? 'checked' : 'unchecked'} successfully`);
    return result;
  } catch (error) {
    return error;
  }
};

export { check_uncheck_todo };
