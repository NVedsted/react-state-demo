import PropTypes from "prop-types";
import useTodos from "./useTodos";

export default function TodoItem({ id }) {
  const { findTodo, setDone, deleteTodo } = useTodos();
  const todo = findTodo(id);

  return (
    <span>
      <label>
        <input
          type="checkbox"
          onChange={(event) => setDone(id, event.target.checked)}
          checked={todo.done}
        />{" "}
        {todo.done ? <strike>{todo.title}</strike> : todo.title}
      </label>{" "}
      <button onClick={() => deleteTodo(id)}>x</button>
    </span>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number,
};
