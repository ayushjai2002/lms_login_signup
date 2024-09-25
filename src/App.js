
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import SignUp from './Pages/Signup/SignUp';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
// import Login from "./Components/Login";
// import Register from "./Components/Register";


function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
  )
    {/* <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter> */}
}

export default App;
