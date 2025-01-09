import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { SignIn } from './pages/SignIn'
import { AppBar } from './components/AppBar'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/dashboard' element={<AppBar/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
