import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { Button } from "@mui/material";

const BasicForm = () => {
  const [todoItems, setTodoItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItems = (e) => {
    e.preventDefault();

    if (!inputValue) {
      alert("Enter an input");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue,
    };

    setTodoItem((prev) => [...prev, item]);
    setInputValue("");
  };

  const deleteItems = (id) => {
    const newArray = todoItems.filter((item) => item.id !== id);
    setTodoItem(newArray);
  };

  return (
    <div>
      <h1>TODO</h1>
      {/* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {}}
      > */}
      <form onSubmit={addItems}>
        <label htmlFor="todo">Add ToDo </label>
        {/* <Field id="todo" name="Add ToDo" placeholder="TextHere"   /> */}
        <input
          id="todo"
          name="Add ToDo"
          placeholder="TextHere"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* </Formik> */}

      <ul>
        {todoItems.map((item) => (
          <li key={item.id}>
            {item.value} <button onClick={() => deleteItems(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicForm;
