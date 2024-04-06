import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const INITIAL_TODOS = [
  { id: 1, title: "Do laundy", done: false },
  { id: 2, title: "Clean the dishes", done: false },
  { id: 3, title: "Prepare dinner", done: false },
];

function nextId(todos) {
  return Math.max(...[0, ...todos.map((t) => t.id)]) + 1;
}

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  function addTodo(title) {
    setTodos([...todos, { id: nextId(todos), title, done: false }]);
  }

  function setDone(id, done) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done } : t)));
  }

  function deleteTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
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
