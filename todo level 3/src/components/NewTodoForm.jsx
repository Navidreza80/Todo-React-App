// imports
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { post_todo } from "../core/services/api/post_todo";
import { get_all_todos } from "../core/services/api/fetch-todos";

// component render
const NewTodoForm = ({ setTodos, todos }) => {
  // functions
  const handleSubmit = async (values) => {
    await post_todo(values);
    reFetch();
  };

  const reFetch = async () => {
    let res = await get_all_todos();
    setTodos(res);
  };

  // form validation
  const validation = yup.object().shape({
    title: yup.string().min(5).required("Please enter the title of the todo"),
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
