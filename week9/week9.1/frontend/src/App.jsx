import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCount(false);
    }, 10000);
  },[]);
  return (
    <>
      {count===true?<MyComponenet/>:""}
    </>
  );
}
function MyComponenet() {
  useEffect(() => {
    return () => {};
  }, []);
  return <div>from inside the component</div>;
}
export default App;
