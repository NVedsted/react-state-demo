import todosReducer from "./todosReducer";
import { useReducer } from "react";

export default function useTodos(initialTodos) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  function addTodo(title) {
    dispatch({ type: "add", title });
  }

  function setDone(id, done) {
    dispatch({ type: "setDone", id, done });
  }

  function deleteTodo(id) {
    dispatch({ type: "delete", id });
  }

  return { todos, addTodo, setDone, deleteTodo };
}
