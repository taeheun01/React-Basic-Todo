import { createContext, useState } from "react";
import { TODO_SAMPLE } from "../constants/Todo-sample";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(TODO_SAMPLE);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
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
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        onToggleCompleted,
        onDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
