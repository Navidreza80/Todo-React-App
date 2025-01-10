import React from "react";

const TodoList = ({ setTodos, todos }) => {
  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((item) => {
        return (
          <li key={todos.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleTodo(item.id, e.target.checked)}
              ></input>
              {item.title}
            </label>
            <button
              onClick={() => deleteTodo(item.id)}
              className="btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
