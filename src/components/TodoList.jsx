import React, { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "출석하기" },
    { id: 2, text: "알고리즘 풀기" },
    { id: 3, text: "팀원과 알고리즘 공유하기" },
    { id: 4, text: "리액트 수준별 강의 듣기" },
    { id: 5, text: "밥먹고 산책하기" },
    { id: 6, text: "강의 듣기 or 과제하기" },
    { id: 7, text: "저녁 먹기" },
    { id: 8, text: "오늘한거 티스토리에 정리하기" },
    { id: 9, text: "조금 쉬기" },
    { id: 10, text: "꿀잠" },
  ];


const TodoList = () => {

  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const [newTodo, setNewTodo] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
// 함수와 기본동작 방지

if (!newTodo.trim()) {
    return;
} // 유효성 검사

setTodos([...todos, { id: crypto.randomUUID(), text: newTodo }]); 
// 새로운 Todo추가 및 상태 업데이트
setNewTodo("");  
//입력 초기화
};

  const handleInputChange = (event) => {
     setNewTodo(event.target.value);
  };


  return (
<div>
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={newTodo} 
        onChange={handleInputChange}
        placeholder="오늘 할일을 추가해주세요!" 
        />
        <button type="submit">추가</button>
    </form>
   <ul>
    {todos.map((todo) =>(
        <li key={todo.id}>{todo.text}</li>
    ))};
   </ul>
</div>
  );
};

export default TodoList