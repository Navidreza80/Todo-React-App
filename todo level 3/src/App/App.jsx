// imports

// built-ins
import { useEffect, useState } from "react";

// components

import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";

// styles
import "../style/styles.css";

// apis / functions
import { get_all_todos } from "../core/services/api/fetch-todos";

// packages
import { Toaster } from "sonner";

// component render
function App() {

  // hooks
  const [todos, setTodos] = useState([]);

  // functions
  const fetch_todos = async () => {

    // fetching todos from the server
    const res = await get_all_todos();

    // saving todos in state as an array
    setTodos(res);
  };

  // useEffects
  useEffect(() => {
    
    // callback function
    fetch_todos();
  }, []);

  // jsx render
  return (
    // wrapper
    <>
      {/* toaster component wrapper */}
      <Toaster richColors />
      {/* add todo form */}
      <NewTodoForm setTodos={setTodos} todos={todos} />
      {/* title */}
      <h1 style={{ color: "white" }}>TODO LIST</h1>
      {/* todos list wrapper */}
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

// exporting
export default App;