import useTodos from "./useTodos";
import TodoItem from "./TodoItem";

export default function Todos() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <TodoItem id={t.id} />
        </li>
      ))}
    </ul>
  );
}
