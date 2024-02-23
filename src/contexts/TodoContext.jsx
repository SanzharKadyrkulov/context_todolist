import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const todoContext = createContext();

export function useTodoContext() {
  return useContext(todoContext);
}

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [oneTodo, setOneTodo] = useState(null);

  async function getTodos() {
    try {
      const { data } = await axios.get(API);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo(newTodo) {
    try {
      await axios.post(API, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`${API}/`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneTodo(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      setOneTodo(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function editTodo(id, newData) {
    try {
      await axios.patch(`${API}/${id}`, newData);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    todos,
    oneTodo,
    getTodos,
    addTodo,
    deleteTodo,
    getOneTodo,
    editTodo,
  };
  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export default TodoContext;
