import React, { useContext, useEffect, useState } from "react";
import { useTodoContext } from "./TodoProvider";
export default function TodoSearch() {
  const { searchInput, setSearchInput } = useTodoContext();
  return (
    <div className="search-container">
      <input
        className="searchinput"
        type="text"
        placeholder="검색어 입력"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      {/* <button className="searchbutton" onClick={(e) => handleInputClick(e)}>입력</button> */}
    </div>
  );
}
