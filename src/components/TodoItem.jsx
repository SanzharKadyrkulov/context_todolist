import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ item }) => {
  const { deleteTodo } = useTodoContext();
  const navigate = useNavigate();

  return (
    <ListGroup.Item>
      {item.name}
      <Button variant="danger" className="mx-2">
        delete
      </Button>
      <Button onClick={() => navigate(`/${item.id}`)} variant="dark">
        edit
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
