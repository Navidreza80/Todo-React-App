// imports

// components

import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";

// apis / functions
import { get_all_todos } from "../core/services/api/fetch-todos";

// packages
import { Toaster } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

// component render
function App() {
  // query
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: get_all_todos,
  });

  // jsx render
  return (
    <>
      {/* toaster component wrapper */}
      <Toaster position="top-left" richColors closeButton />
      {/* add todo form */}
      <NewTodoForm />
      {/* title */}
      <h1 className="text-white mt-6 text-3xl font-bold text-center">TODO LIST</h1>
      {/* todos list wrapper */}
      {data && <TodoList todos={data?.data} />}
      {isLoading && <ClipLoader color="white" />}
    </>
  );
}

// exporting
export default App;
