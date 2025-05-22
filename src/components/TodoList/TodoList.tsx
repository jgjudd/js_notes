import { useState } from "react";
import Todo, { type TodoProps } from "./Todo";
import TodoComposer from "./TodoComposer";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, label: "Task 1", completed: false },
    { id: 2, label: "Task 2", completed: false },
    { id: 3, label: "Task 3", completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo: TodoProps) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo: TodoProps) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}
