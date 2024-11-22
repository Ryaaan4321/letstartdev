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

export default App;
