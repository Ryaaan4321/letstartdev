import axios from "axios";
import { useState } from "react";

export function GetAllTodo() {
  const [todos, settodos] = useState([]);
  const [error, seterror] = useState(null);
  const getalltodo = () => {
    axios
      .get("http://localhost:3000/todo/alltodos")
      .then((res) => {
        settodos(res.data);
        seterror(null);
      })
      .catch(() => {
        seterror("Failed to fetch the data");
      });
  };
  return (
    <div>
      <button onClick={getalltodo}>Get All To Do</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li
            style={{
              listStyle: "none",
              margin: "10px",
            }}
            key={todo._id}
          >
            <h1 style={{
              backgroundColor: "royalblue"
            }}
            >{todo._id}</h1>
            <h2>{todo.title}</h2>
            <p>{todo.descreption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
