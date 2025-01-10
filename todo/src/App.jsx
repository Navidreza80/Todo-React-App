import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <NewTodoForm setTodos={setTodos} todos={todos}  />
      <h1 className="list">Todo List</h1>
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
