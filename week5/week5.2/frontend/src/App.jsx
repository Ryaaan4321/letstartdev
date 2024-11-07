import { useState } from "react";
import { Createtodos } from "./components/createtodo";
import "./App.css";
import { Todos } from "./components/Todos";
import { GetAllTodo } from "./components/getAllTodo";

function App() {
  const [todos, settodos] = useState([]);
  const [atodo,setatodo]=useState([]);
  fetch("http://localhost:3000/todo").then(async function (val) {
    const res = await val.json();
    settodos(res.todos);
  });
  return (
    <div>
      <Createtodos />
      <Todos todos={todos}></Todos>
      <GetAllTodo atodo={atodo}></GetAllTodo>
    </div>
  );
}

export default App;
