import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import useTodos from "./useTodos";

const INITIAL_TODOS = [
  { id: 1, title: "Do laundy", done: false },
  { id: 2, title: "Clean the dishes", done: false },
  { id: 3, title: "Prepare dinner", done: false },
];

function App() {
  const { todos, addTodo, setDone, deleteTodo } = useTodos(INITIAL_TODOS);

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
