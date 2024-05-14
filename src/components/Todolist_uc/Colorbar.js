import React, { useContext, useEffect, useState } from "react";
import { useTodoContext } from "./TodoProvider";
export default function Colorbar() {
  const { setInputColor } = useTodoContext();
  const handleColorClick = (color) => {
    setInputColor(color);
  };
  return (
    <div className="colors">
      <div className="color1" onClick={() => handleColorClick("#eeb3e9")}></div>
      <div className="color2" onClick={() => handleColorClick("#f384e7")}></div>
      <div className="color3" onClick={() => handleColorClick("#f650f0")}></div>
      <div className="color4" onClick={() => handleColorClick("#f900cf")}></div>
    </div>
  );
}
