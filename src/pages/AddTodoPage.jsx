import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

const newTodos = {};

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoContext();
  const navigate = useNavigate();

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      return;
    }

    const newTodo = {
      title,
      completed: false,
    };

    addTodo(newTodos);
    setTitle("");
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-4">Add Todo</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control
          autoFocus
          onChange={handleChange}
          value={title}
          type="text"
        />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="dark"
          type="submit"
        >
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddTodoPage;
