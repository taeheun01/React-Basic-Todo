import React, { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "출석하기", completed: false },
  { id: 2, text: "알고리즘 풀기", completed: false },
  { id: 3, text: "팀원과 알고리즘 공유하기", completed: false },
  { id: 4, text: "리액트 수준별 강의 듣기", completed: false },
  { id: 5, text: "밥먹고 산책하기", completed: false },
  { id: 6, text: "강의 듣기 or 과제하기", completed: false },
  { id: 7, text: "저녁 먹기", completed: false },
  { id: 8, text: "오늘 한것 티스토리에 정리하기", completed: false },
  { id: 9, text: "조금 쉬기", completed: false },
  { id: 10, text: "꿀잠", completed: false },
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

    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: newTodo, completed: false },
    ]);
    // 새로운 Todo추가 및 상태 업데이트
    setNewTodo("");
    //입력 초기화
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        };

        return newTodo;
      }

      return todo;
    });

    setTodos(updatedTodos);
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
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>
              {todo.text} - {String(todo.completed)}
            </p>
            <button onClick={toggleCompleted(todo.id)}>완료</button>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default TodoList;
