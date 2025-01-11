// imports

// apis / functions

import { get_all_todos } from "../core/services/api/fetch-todos";

// packages
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { post_todo } from "../core/services/api/post_todo";

// component render
const NewTodoForm = ({ setTodos }) => {

  // functions

  // adding a brand new todo
  const handleSubmit = async (values) => {

    // calling the post api
    await post_todo(values);

    // refetching data from the api after adding a new todo
    // callback function
    reFetch();
  };


  const reFetch = async () => {

    // fetching todos from the server
    let res = await get_all_todos();

    // saving todos in an array
    setTodos(res);
  };

  // form validation
  const validation = yup.object().shape({

    // form title validation
    title: yup.string().min(5).required("Please enter the title of the todo"),

    // form description validation
    description: yup
      .string()
      .min(10)
      .optional("Please enter the description of the todo"),
  });

  // jsx render
  return (
    <Formik
      initialValues={{ title: "", description: "", isDone: false }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validation}
    >
      {(form) => (
        <Form className="new-item-form">
          <div className="form-row">
            <h1 className="add-todo">GET THINGS DONE</h1>
            <h4 style={{ margin: "0", padding: "10px 0", color: "white" }}>
              Title:
            </h4>
            <Field name="title" placeholder="What do you want to do?" />
            <ErrorMessage className="error" name="title" component={"p"} />
            <h4 style={{ margin: "0", padding: "10px 0", color: "white" }}>
              Description (optional):
            </h4>
            <Field name="description" placeholder="Tell us more about it..." />
            <ErrorMessage
              className="error"
              name="description"
              component={"p"}
            />
          </div>
          <button className="btn" type="submit">
            Add Todo
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewTodoForm;
