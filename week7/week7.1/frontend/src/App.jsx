// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/DashBoard";
// import Landing from "./components/Landing";
// import { useNavigate } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <BrowserRouter>
//       <AppBar/>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />}></Route>
//           <Route path="/" element={<Landing />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div>
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Landing Page
//         </button>
//         <button
//           onClick={() => {
//             navigate("/dashboard");
//           }}
//         >Dashboard Page</button>
//       </div>
//     </>
//   );
// }

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

export default App;
