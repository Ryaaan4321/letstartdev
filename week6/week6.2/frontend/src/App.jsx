import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  return (
    <div>
      {/* <Todo id={4}/> */}
      <button ></button>
    </div>
  );
}

function Todo({id}) {
  const [todos, settodos] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => {
      settodos([response.data]);
    });
  }, [id]);
  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h4>{todo.body}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// // https://jsonplaceholder.typicode.com/posts
