import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { delete_todo } from "../core/services/api/delete_todo";
import { check_uncheck_todo } from "../core/services/api/check_uncheck_todo";

// render components
const TodoList = ({ todos }) => {
  const queryClient = useQueryClient();
  // functions

  // deleting a todo
  const mutation = useMutation({
    mutationFn: (id) => delete_todo(id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("todo deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete todo. Please try again later.");
    },
  });

  // checking , unchecking todo
  const edit_todo = useMutation({
    mutationFn: (payload) => check_uncheck_todo(payload),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("todo edited successfully");
    },
    onError: () => {
      toast.error("Failed to edit todo. Please try again later.");
    },
  });

  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((item) => {
        return (
          <li className="bg-slate-700" key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={(e) =>
                  edit_todo.mutate({ id: item.id, isDone: e.target.checked })
                }
              ></input>
              <div
                style={
                  item.isDone
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
                className="font-semibold text-2xl ml-1 overflow-hidden text-ellipsis w-72 whitespace-nowrap"
              >
                {item.title}
              </div>
            </label>
            <button
              onClick={() => mutation.mutate(item.id)}
              className="btn-danger"
            ></button>
            {item.description != "" && (
              <div className="description text-gray-300">
                {item.description}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
