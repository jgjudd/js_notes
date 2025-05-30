import { ChangeEvent, SetStateAction, useState } from "react";

export type TodoProps = {
  id: number;
  label: string;
  completed: boolean;
};
type ComponentProps = {
  todo: TodoProps;
  handleUpdateTodo: (todo: TodoProps) => SetStateAction<void>;
  handleDeleteTodo: (id: number) => SetStateAction<void>;
};

export default function Todo({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}: ComponentProps) {
  // const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  const handleEditClick = () => setEditing(!editing);
  const handleEditTodo = (e: ChangeEvent<HTMLInputElement>) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo.id);
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
      <label
        htmlFor={todo.id.toString()}
        style={{ display: "flex", marginRight: "1rem" }}
      >
        <div>
          <input
            type="checkbox"
            id={todo.id.toString()}
            checked={todo.completed}
            onChange={handleCheckboxClick}
            style={{ marginRight: "1rem" }}
          />
          <span />
        </div>

        {editing === true ? (
          <input type="text" value={todo.label} onChange={handleEditTodo} />
        ) : (
          <span>{todo.label}</span>
        )}
      </label>
      <div>
        <button onClick={handleEditClick}>{editing ? "Save" : "Edit"}</button>
        {!editing && (
          <button onClick={handleDeleteClick} style={{ marginLeft: ".25rem" }}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
