import { toast } from "sonner";
import http from "../../interceptor/index";

const delete_todo = async (id) => {
  try {
    const result = await http.delete("/todos/" + id);
    toast.success("todo deleted successfully");
    return result;
  } catch (error) {
    return error;
  }
};

export { delete_todo };
