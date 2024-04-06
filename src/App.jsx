import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import todosReducer from "./todosReducer";

const INITIAL_TODOS = [
  { id: 1, title: "Do laundy", done: false },
  { id: 2, title: "Clean the dishes", done: false },
  { id: 3, title: "Prepare dinner", done: false },
];

function App() {
  const [todos, dispatch] = useReducer(todosReducer, INITIAL_TODOS);

  function addTodo(title) {
    dispatch({ type: "add", title });
  }

  function setDone(id, done) {
    dispatch({ type: "setDone", id, done });
  }

  function deleteTodo(id) {
    dispatch({ type: "delete", id });
  }

  return (
    <>
      <h1>Todos</h1>
      <AddTodo onNewTodo={addTodo} />
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <TodoItem
              todo={t}
              onDelete={() => deleteTodo(t.id)}
              onDoneChanged={(done) => setDone(t.id, done)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
