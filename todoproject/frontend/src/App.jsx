import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
  </>;
}

export default App;
