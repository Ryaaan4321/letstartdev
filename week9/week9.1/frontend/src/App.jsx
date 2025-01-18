import axios from "axios";
import { useEffect, useState } from "react";

function useCount() {
  console.log("from inside the count");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data.slice(0, 10)); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching todos:", error);
        setLoading(false); 
      }
    };

    fetchTodos();
  }, []); 

  return { todos, loading };
}

function App() {
  const { todos, loading } = useCount();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MyComponent() {
  useEffect(() => {
    console.log("MyComponent mounted");
  }, []); 

  return <div>from inside the component</div>;
}

export default App;
