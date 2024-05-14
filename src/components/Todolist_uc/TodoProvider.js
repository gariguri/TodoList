import React, { useState, useContext, createContext, useEffect } from "react";

const TodoContext = createContext();
//
export const TodoProvider = ({ children }) => {
  const [inputColor, setInputColor] = useState("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(null);
  const [colors, setColors] = useState(null);
  const [searchInput, setSearchInput] = useState("");

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

  useEffect(() => {
    if (!todos) return;
    if (!colors) return;
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [todos, colors]);
  return (
    <TodoContext.Provider
      value={{
        inputColor,
        setInputColor,
        inputText,
        setInputText,
        todos,
        setTodos,
        colors,
        setColors,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const useTodoContext = () => useContext(TodoContext);
