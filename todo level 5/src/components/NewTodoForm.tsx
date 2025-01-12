// imports

// apis / functions
import { new_todo } from "../core/services/api/post_todo";

// packages
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

// component render
const NewTodoForm = () => {
  const queryClient = useQueryClient()
  // functions

  // adding a brand new todo
  const handleSubmit = async (values) => {
    mutation.mutate(values);
  };
  const mutation = useMutation({
    mutationFn: new_todo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      toast.success("todo added successfully");
    },
    onError: () => {
      toast.error("Failed to add todo. Please try again later.");
    },
  });


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
