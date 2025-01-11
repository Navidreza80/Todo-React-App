// imports
import { useEffect, useState } from "react";
import "../style/styles.css";
import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";
import { get_all_todos } from "../core/services/api/fetch-todos";
import { Toaster } from "sonner";

// component render
function App() {
  // hooks
  const [todos, setTodos] = useState([]);

  // functions
  const fetch_todos = async () => {
    const res = await get_all_todos();
    setTodos(res);
  };

  // useEffects
  useEffect(() => {
    fetch_todos();
  }, []);

  // jsx render
  return (
    <>
      <Toaster richColors />
      <NewTodoForm setTodos={setTodos} todos={todos} />
      <h1 style={{ color: "white" }}>TODO LIST</h1>
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
