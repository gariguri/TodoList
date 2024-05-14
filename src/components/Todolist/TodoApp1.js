import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import "../TodoApp.css";
export default function TodoApp1() {
  const [inputColor, setInputColor] = useState("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(null);
  const [colors, setColors] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  //컴포넌트가 마운트될 때 로컬 스토리지에서 데이터를 불러옵니다.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const storedColors = JSON.parse(localStorage.getItem("colors"));
    if (storedTodos && storedColors) {
      setTodos(storedTodos);
      setColors(storedColors);
    } else {
      setTodos([]);
      setColors([]);
    }
  }, []);

  // Todo 항목이 변경될 때마다 로컬 스토리지에 데이터를 업데이트합니다.
  useEffect(() => {
    if (!todos) return;
    if (!colors) return;
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [todos, colors]);
  return (
    <div className="background">
      {todos && colors && (
        <>
          <TodoSearch searchInput={searchInput} setSearchInput={setSearchInput}></TodoSearch>
          <h1 className="title">Todo App</h1>
          <TodoInput
            inputColor={inputColor}
            setInputColor={setInputColor}
            inputText={inputText}
            setInputText={setInputText}
            setTodos={setTodos}
            setColors={setColors}
            todos={todos}
            colors={colors}
          ></TodoInput>
          <Colorbar setInputColor={setInputColor}></Colorbar>
          <TodoList
            todos={todos}
            colors={colors}
            searchInput={searchInput}
            setTodos={setTodos}
            setColors={setColors}
          ></TodoList>
        </>
      )}
    </div>
  );
}
