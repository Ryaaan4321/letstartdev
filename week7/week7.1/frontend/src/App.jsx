
/*
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/DashBoard";
import Landing from "./components/Landing";
import { useNavigate } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >Dashboard Page</button>
      </div>
    </>
  );
}

routing applications starts herer

import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/DashBoard")); // another way of importing the file
const Landing = React.lazy(() => import("./components/Landing")); //another way of importing the file to get the better page performance
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard Page
        </button>
      </div>
    </>
  );
}

so what is prop drilling so when we have a parent and that parent has a children and that children has a another childrent
and that children has another children(c1) in that case if the c1 need the props that only the first parent have of this chainn 
than doesnt matter teh rest of the parent want them bt they have to pass it to them to pass it to the c1 its like we are drilling down and pushing 
the props when we are drilling that will make our wesbite go ugly or slow  
*/

import { useContext, useState } from "react"
import { CountContext } from "./Context"


function App() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setcount} />
      </CountContext.Provider>
    </div>
  );
}
function Count({setCount }) {
  return (
    <>
      <CountRender/>
      <Buttons setCount={setCount} />
    </>
  );
}
function CountRender() {
 const count=useContext(CountContext);
 return <div>
  {count}
 </div>
}
function Buttons({ setCount }) {
  const count=useContext(CountContext )
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
