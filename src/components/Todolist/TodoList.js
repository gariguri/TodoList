import React, { useEffect, useState } from "react";

import TodoItems from "./TodoItem";
export default function TodoList({ todos, colors, searchInput, setTodos, setColors }) {
  const todosWithIndex = todos.map((todo, index) => ({ todo, index }));
  //console.log(todosWithIndex);
  // 검색어에 따라 필터링된 todo들의 인덱스를 저장하는 배열 생성
  const filteredIndexes = todosWithIndex
    .filter(({ todo }) => todo.toLowerCase().includes(searchInput.toLowerCase()))
    .map(({ index }) => index);
  console.log(filteredIndexes);
  return (
    <div>
      <h2>Todo Items</h2>
      <div className="todos">
        {filteredIndexes.map((index) => (
          <TodoItems
            todos={todos}
            todo={todos[index]}
            index={index}
            colors={colors}
            setTodos={setTodos}
            setColors={setColors}
          />
        ))}
      </div>
    </div>
  );
}
