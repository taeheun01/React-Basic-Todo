import { useState } from "react";
import { TODO_SAMPLE } from "../constants/Todo-sample";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState(TODO_SAMPLE);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    // 새로운 todo 객체를 odos 배열에 추가

    setText("");
    // input 창을 초기화 해줌
  };

  const onToggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(filteredTodos);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">추가</button>
      </form>
      <TodoList
        todos={todos}
        onToggleCompleted={onToggleCompleted}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TodoContainer;
