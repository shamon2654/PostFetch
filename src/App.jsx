import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Components/home/Home"
import Contact from "./Components/Contact/Contact"
import Abouts from "./Components/Abouts/Abouts"
import NavBar from "../Router/navbar/NavBar"
import Login from "./Components/login/Login"
import Signup from "./sign_up/signup"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<Abouts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup/> } />
      </Route>
    </Routes>
  )
}

export default App
