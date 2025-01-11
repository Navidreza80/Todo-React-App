import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const NewTodoForm = ({ setTodos, todos }) => {
  const handleSubmit = (value) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: value.title,
          description: value.desc != "" ? value.desc : null,
          completed: false,
        },
      ];
    });
  };
  const validation = yup.object().shape({
    title: yup.string().min(5).required("Please enter the title of the todo"),
    desc: yup.string().min(10).optional("Please enter the description of the todo"),
  });
  return (
    <Formik
      initialValues={{ title: "", desc: '' }}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validation}
    >
      {(form) => (
        <Form className="new-item-form">
          <div className="form-row">
            <h1 className="add-todo">
              GET THINGS DONE
            </h1>
            <h4 style={{margin: '0', padding: '10px 0', color: 'white'}}>Title:</h4>
            <Field name="title" placeholder="What do you want to do?" />
            <ErrorMessage className="error" name="title" component={"p"} />
            <h4 style={{margin: '0', padding: '10px 0', color: 'white'}}>Description (optional):</h4>
            <Field
              name="desc"
              placeholder="Tell us more about it..."
            />
            <ErrorMessage className="error" name="desc" component={"p"} />
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
