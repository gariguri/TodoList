import React, { useContext, useEffect, useState } from "react";
import { useTodoContext } from "./TodoProvider";
export default function TodoItem({ index, todo }) {
  const { todos, colors, setTodos, setColors } = useTodoContext();
  const [editText, setEditText] = useState(todo); // 수정 중인 텍스트 상태 추가
  const [editMode, setEditMode] = useState(false); // 수정 모드 상태 추가
  function handleClick(e) {
    const newTodos = todos.filter((_, i) => i !== parseInt(e.target.id));
    const newColors = colors.filter((_, i) => i !== parseInt(e.target.id));
    setTodos(newTodos);
    setColors(newColors);
  }
  function handleEditClick() {
    setEditMode(true);
  }
  function handleInputChange(e) {
    setEditText(e.target.value); // 수정 중인 텍스트 업데이트
  }
  function handleEditConfirm(e) {
    if (editText.trim() !== "") {
      const newTodos = todos.map((item, i) => (i === index ? editText : item));
      setTodos(newTodos);
      setEditMode(false); // 수정 모드 종료
    } else {
      alert("수정사항을 입력하세요.");
    }
  }

  function handleCancelEdit(e) {
    setEditText(todo); // 수정 취소 시 이전 텍스트로 복원
    setEditMode(false); // 수정 모드 종료
    //console.log(e.target)
  }
  return (
    <div className="item" id={index}>
      {editMode ? (
        <input
          className="fixinput"
          type="text"
          value={editText}
          onChange={handleInputChange}
          // 수정 모드 진입 시 자동으로 포커스 설정
        />
      ) : (
        <div key={index} className="todo" style={{ backgroundColor: colors[index] }} onClick={handleEditClick}>
          {todo}
        </div>
      )}

      {editMode && (
        <>
          <button className="confirm" onClick={handleEditConfirm}>
            확인
          </button>
          <button className="cancel" onClick={handleCancelEdit}>
            취소
          </button>
        </>
      )}

      <button id={index} className="delete" onClick={handleClick}>
        x
      </button>
    </div>
  );
}
