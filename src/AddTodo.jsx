import useTodos from "./useTodos";
import { useState } from "react";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  function handleSubmit(event) {
    addTodo(title);
    setTitle("");
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input required type="text" value={title} onInput={event => setTitle(event.target.value)} />
        </label>{" "}
        <button type="submit">+</button>
      </form>
    </div>
  );
}
