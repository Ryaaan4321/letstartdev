import { useState } from "react";
import "./App.css";

function Todo({ title, description, completed }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

function App() {
  const [todos, settodos] = useState([
    {
      title: "go to the gym",
      description: "go to the gym in 5 am to 6 am",
      completed: false,
    },
    {
      title: "study the codeforces",
      description: "complete it",
      completed: false,
    },
    {
      title: "study the github",
      description: "complete it",
      completed: false,
    },
  ]);

  function addtodo() {
    settodos([
      ...todos,
      {
        title: "new todo",
        description: "hello hello",
      },
    ]);
  }

  return (
    <>
      <div>
        <button onClick={addtodo}>to do</button>
        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description}/>
        })}

        {/* <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed} /> */}
        {/* <Todo title={todos[1].title} description={todos[1].description} completed={todos[1].completed} /> */}
        {/* <Todo title={todos[2].title} description={todos[2].description} completed={todos[2].completed} /> */}

      </div>
    </>
  );
}

export default App;
