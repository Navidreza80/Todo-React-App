import { useEffect, useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos")
    if(localValue == null) return []
    return JSON.parse(localValue)
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <NewTodoForm setTodos={setTodos} todos={todos} />
      <h1 style={{color: 'white'}}>TODO LIST</h1>
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
