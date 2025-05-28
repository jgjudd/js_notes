import { ChangeEvent, useState, SetStateAction } from "react";
import { type TodoProps } from "./Todo";

function createTodo(label: string) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  };
}

type TodoComposerProps = {
  handleAddTodo: (newTodo: TodoProps) => SetStateAction<void>;
};

export default function TodoComposer({ handleAddTodo }: TodoComposerProps) {
  const [label, setLabel] = useState("");

  const handleUpdateLabel = (e: ChangeEvent<HTMLInputElement>) =>
    setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <input
        placeholder="Add a new todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
      />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </li>
  );
}
