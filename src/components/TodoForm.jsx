import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Todoform = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };

    addTodo(newTodo);
    // 새로운 todo 객체를 odos 배열에 추가

    setText("");
    // input 창을 초기화 해줌
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default Todoform;
