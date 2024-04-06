import { TodosContext } from "./TodosContext";
import { useCallback, useContext } from "react";

export default function useTodos() {
  const { todos, dispatch } = useContext(TodosContext);

  const addTodo = useCallback(
    (title) => {
      dispatch({ type: "add", title });
    },
    [dispatch]
  );

  const setDone = useCallback(
    (id, done) => {
      dispatch({ type: "setDone", id, done });
    },
    [dispatch]
  );

  const deleteTodo = useCallback(
    (id) => {
      dispatch({ type: "delete", id });
    },
    [dispatch]
  );

  const findTodo = useCallback(
    (id) => {
      return todos.find((t) => t.id === id);
    },
    [todos]
  );

  return { todos, addTodo, setDone, deleteTodo, findTodo };
}
