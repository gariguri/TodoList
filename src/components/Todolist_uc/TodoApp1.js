import React, { useEffect, useState, createContext } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import { TodoProvider } from "./TodoProvider";
import { useTodoContext } from "./TodoProvider";
import "../TodoApp.css";
export default function TodoApp1() {
  const { todos, colors } = useTodoContext();
  return (
    <div className="background">
      {todos && colors && (
        <>
          <TodoSearch />
          <h1 className="title">Todo App</h1>
          <TodoInput />
          <Colorbar />
          <TodoList />
        </>
      )}
    </div>
  );
}
