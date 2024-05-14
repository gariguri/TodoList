import React, { useEffect, useState } from "react";
import "./TodoApp.css";
export default function TodoApp() {
  const [inputColor, setInputColor] = useState("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [colors, setColors] = useState([]);
  const handleColorClick = (color) => {
    setInputColor(color);
  };

  const handleInputClick = (e) => {
    if (inputText.trim() !== "" && inputColor !== "") {
      setTodos([...todos, inputText]);
      setInputText("");
      setColors([...colors, inputColor]);
      setInputColor("");
    }
  };
  return (
    <div className="background">
      <h1 className="title"> Todo App</h1>
      <div>
        <input
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
      <div>
        <div className="colors">
          <div className="color1" onClick={() => handleColorClick("red")}></div>
          <div className="color2" onClick={() => handleColorClick("yellow")}></div>
          <div className="color3" onClick={() => handleColorClick("pink")}></div>
          <div className="color4" onClick={() => handleColorClick("beige")}></div>
        </div>
        <h2>Todo Items</h2>
        <div className="todos">
          {todos.map((todo, index) => (
            <div key={index} className="todo" style={{ backgroundColor: colors[index] }}>
              {todo}
            </div> // Todo Items를 화면에 표시
          ))}
        </div>
      </div>
    </div>
  );
}
