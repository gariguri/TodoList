import React, { useState } from "react";

export default function TodoInput({
  inputColor,
  setInputColor,
  inputText,
  setInputText,
  setTodos,
  setColors,
  todos,
  colors,
}) {
  const handleInputClick = (e) => {
    if (inputText.trim() !== "" && inputColor !== "") {
      setTodos([...todos, inputText]);
      // setFilterTodos([...filtertodos, inputText]);
      setInputText("");
      setColors([...colors, inputColor]);
      setInputColor("");
    }
  };
  console.log(colors);
  return (
    <div>
      <input
        className="inputtext"
        type="text"
        placeholder="입력"
        value={inputText}
        style={{ backgroundColor: inputColor }}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button className="inputbutton" onClick={(e) => handleInputClick(e)}>
        입력
      </button>
    </div>
  );
}
