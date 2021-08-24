import React, { useState } from "react";
import './App.css';
import TodoForm from "./components/Todoform";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
