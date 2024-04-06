function nextId(todos) {
  return Math.max(...[0, ...todos.map((t) => t.id)]) + 1;
}

export default function todosReducer(todos, action) {
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
