import React, { useState } from "react";
import uuid from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  const handleTaskInputChange = (event) => {
    setTodo({ ...todo, task: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange} />
      <button />
    </form>
  )
}

export default TodoForm;