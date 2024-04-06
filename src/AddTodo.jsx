import PropTypes from "prop-types";
import { useState } from "react";
export default function AddTodo({ onNewTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    onNewTodo(title);
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

AddTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
