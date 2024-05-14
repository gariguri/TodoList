import React, { useEffect, useState } from "react";

export default function TodoSearch({ searchInput, setSearchInput }) {
  return (
    <div className="search-container">
      <input
        className="searchinput"
        type="text"
        placeholder="검색어 입력"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
    </div>
  );
}
