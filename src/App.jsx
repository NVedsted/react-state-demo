import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { TodosProvider } from "./TodosContext";

const INITIAL_TODOS = [
  { id: 1, title: "Do laundy", done: false },
  { id: 2, title: "Clean the dishes", done: false },
  { id: 3, title: "Prepare dinner", done: false },
];

function App() {
  return (
    <TodosProvider initialTodos={INITIAL_TODOS}>
      <h1>Todos</h1>
      <AddTodo />
      <Todos />
    </TodosProvider>
  );
}

export default App;
