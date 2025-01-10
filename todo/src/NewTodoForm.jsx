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
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
