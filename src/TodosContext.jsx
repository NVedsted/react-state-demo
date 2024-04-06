import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const TodosContext = createContext(null);

export function TodosProvider({ initialTodos, children }) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

TodosProvider.propTypes = {
  initialTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
  children: PropTypes.node,
};

function nextId(todos) {
  return Math.max(...[0, ...todos.map((t) => t.id)]) + 1;
}

function todosReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: nextId(todos), title: action.title, done: false },
      ];
    case "delete":
      return todos.filter((t) => t.id !== action.id);
    case "setDone":
      return todos.map((t) =>
        t.id === action.id ? { ...t, done: action.done } : t
      );
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}
