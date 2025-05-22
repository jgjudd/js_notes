import { useState } from "react";

export default function Todo({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  const handleEditClick = () => setEditing(!editing);
  const handleEditTodo = (e) =>
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
      <label htmlFor={todo.id} style={{ display: "flex", marginRight: "1rem" }}>
        <div>
          <input
            type="checkbox"
            id={todo.id}
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
