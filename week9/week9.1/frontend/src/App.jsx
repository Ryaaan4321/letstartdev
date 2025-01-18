import { useEffect, useState } from "react";

function useCount() {
  const [count, setCount] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);
  return count;
}

function App() {
  const counts = useCount();
  return counts ? <MyComponent /> : ""; 
}

function MyComponent() {
  useEffect(() => {
  }, []);
  return <div>from inside the component</div>;
}

export default App;
