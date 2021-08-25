import React, { useState } from "react";
import './App.css';
import TodoForm from "./components/Todoform";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
