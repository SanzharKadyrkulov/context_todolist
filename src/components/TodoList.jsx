import React, { useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const { todos, getTodos } = useTodoContext();

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div>
			<h1>TodoList</h1>
			<ListGroup>
				{todos.map((item) => (
					<TodoItem key={item.id} item={item} />
				))}
			</ListGroup>
		</div>
	);
};

export default TodoList;
