import http from "../../interceptor/index";

const get_all_todos = async () => {
  try {
    const result = await http.get("/todos");
    return result;
  } catch (error) {
    return error;
  }
};

export { get_all_todos };
