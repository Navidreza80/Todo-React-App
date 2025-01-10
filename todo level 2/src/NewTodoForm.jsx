import React, { useState } from "react";

const NewTodoForm = ({ setTodos, todos }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    newItem == "" && alert("Please enter the title of the todo")
    newItem != "" &&
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            title: newItem,
            completed: false,
          },
        ];
      });
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="add-todo">GET THINGS DONE</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="What do you want to do?"
        />
      </div>
      <button className="btn">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
