import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Adminsignin } from "./pages/admin/Adminsignin";
import { Usersignin } from "./pages/user/Usersignin";

function Navigation() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleUserClick = () => {
    navigate('/user');
  };

  return (
    <ul className="flex gap-4 list-none">
      <li className="hover:text-blue-800 hover:cursor-pointer hover:underline" onClick={handleUserClick}>
        User
      </li>
      <li className="hover:text-blue-800 hover:cursor-pointer hover:underline" onClick={handleAdminClick}>
        Admin
      </li>
    </ul>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>hello motherfucker</h1>
      <p>Sign in as ? </p>
    
      <Navigation />
      <Routes>
        <Route path="/user" element={<Usersignin />} />
        <Route path="/admin" element={<Adminsignin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
