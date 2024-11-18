// import { useMemo, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import axios from "axios";
// import { useEffect } from "react";



// function NApp() {
//   const [id, setid] = useState(1);
//   return (
//     <div>
//       <button
//         onClick={function () {
//           setid(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={function () {
//           setid(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           setid(3);
//         }}
//       >
//         3
//       </button>
//       <Todo id={id} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todos, settodos] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => {
//         settodos([response.data]);
//       });
//   }, [id]);
//   return (
//     <div>
//       <h1>Todo List</h1>
//       {todos.map((todo) => {
//         return (
//           <div>
//             <h1>{todo.title}</h1>
//             <h4>{todo.body}</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// function pApp() {
//   const [counter, setcounter] = useState(0);
//   const [inputvalue, setinputvalue] = useState(1);

//   let count = 0;
//   for (let i = 1; i <= inputvalue; i++) {
//     count += i;
//   }
//   return (
//     <div>
//       <input
//         onChange={function (e) {
//           setinputvalue(e.target.value);
//         }}
//         placeholder="sum from 1 to n"
//       ></input>
//       <br />
//       Sum from 1 to {inputvalue} is {count};
//       <br />
//       <button
//         onClick={() => {
//           setcounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {
//     console.log("useMemo is called");
//     let finalCount = 0;
//     for (let i = 0; i <= Number(inputValue); i++) {
//       finalCount += i;
//     }
//     return finalCount;
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         type="number"
//         onChange={(e) => setInputValue(Number(e.target.value))}
//         placeholder="Sum from 1 to n"
//       />
//       <br />
//       Sum from 1 to n is {count};
//       <br />
//       <button onClick={() => setCounter(counter + 1)}>Count is {counter}</button>
//     </div>
//   );
// }



// // // https://jsonplaceholder.typicode.com/posts


import { useState,memo,useCallback } from "react";

function App(){
  const [count,setcount]=useState(0);
  const inputFunction=useCallback(()=>{
    console.log("hi there");
  },[]);
  return <div>
    <ButtonComponent inputFunction={inputFunction}/>
    <button onClick={()=>{
      setcount(count+1);
    }}>Click me {count}</button>
  </div>
}
const ButtonComponent=memo(({inputFunction})=>{
   console.log("child renders");
   return <div>
    <button>Button Clicked</button>
   </div>
})
export default App;