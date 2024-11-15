import React from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import{Home} from '../Home.jsx'
import {Adminsignin} from '../admin/Adminsignin.jsx'
import {Adminsignup} from '../admin/Adminsignup.jsx'

export function AdminLayout() {
  return (
    <>
    <nav>
        <Link to='signin'>signin</Link>
        <Link to='signup'>signup</Link>
    </nav>
    <BrowserRouter>
    <Route path="signin" element={<Adminsignin/>}/>
    <Route path="signup" element={<Adminsignup/>}/>
    </BrowserRouter>
    </>
 )
}
