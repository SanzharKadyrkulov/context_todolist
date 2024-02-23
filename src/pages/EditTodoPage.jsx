import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoContext } from "../contexts/TodoContext";

const EditTodoPage = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { oneTodo, getOneTodo, editTodo } = useTodoContext();

  useEffect(() => {
    getOneTodo(id);
  }, []);

  useEffect(() => {
    setTitle(oneTodo.title);
  }, [oneTodo]);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      return;
    }

    const newData = {
      title,
    };

    editTodo(newData);
    setTitle("");
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-4">Add Todo</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control
          autoFocus
          onChange={() => handleChange}
          value={title}
          type="text"
        />
        <Button
          className="mx-auto d-block mt-2 px-5"
          variant="dark"
          type="submit"
        >
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditTodoPage;
