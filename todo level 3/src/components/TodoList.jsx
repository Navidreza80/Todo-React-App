import { check_uncheck_todo } from "../core/services/api/check_uncheck_todo";
import { delete_todo } from "../core/services/api/delete_todo";
import { get_all_todos } from "../core/services/api/fetch-todos";

// render components
const TodoList = ({ setTodos, todos }) => {
  // functions
  const toggleTodo = async (id, isDone) => {
    await check_uncheck_todo({ isDone: isDone }, id);
    reFetch();
  };

  const reFetch = async () => {
    let res = await get_all_todos();
    setTodos(res);
  };

  const deleteTodo = async (id) => {
    await delete_todo(id);
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((item) => {
        return (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
              ></input>
              <div
                style={
                  item.isDone
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {item.title}
              </div>
            </label>
            <button onClick={() => deleteTodo(item.id)} className="btn-danger">
              Delete
            </button>
            {item.description != null && (
              <div className="description">{item.description}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
