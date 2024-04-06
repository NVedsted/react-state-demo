import PropTypes from "prop-types";

export default function TodoItem({ todo, onDoneChanged, onDelete }) {
  return (
    <span>
      <label>
        <input
          type="checkbox"
          onChange={(event) => onDoneChanged(event.target.checked)}
          checked={todo.done}
        />{" "}
        {todo.done ? <strike>{todo.title}</strike> : todo.title}
      </label>{" "}
      <button onClick={() => onDelete()}>x</button>
    </span>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({ title: PropTypes.string, done: PropTypes.bool })
    .isRequired,
  onDoneChanged: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
