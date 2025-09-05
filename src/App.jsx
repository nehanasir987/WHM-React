//// ⚛️ React = JS Library Developed BY Facebook that is used to make a fast, interactive aur reusable UI components and specially best for building  a single page applications(SPA):


{/* 🎨 Bootstrap */} 
//1- css Framework that is used to make a fast and responsive stylish web pages 
//2- pre-built & ready to use components or classes (navbar, grid system(rows & col), cards, forms, buttons etc)

// Install  == 1- npm install bootstrap version == 2- import  ( in main.jsx)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //npm install react-router-dom  === used for routing or switching pages === react SPA , used this route we show multiple pages

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from './pages/products'
import Login from "./pages/login";
import Registers from './Registers'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Salesmen from "./pages/Salesmen";


  function App() {
    return (
    <Router>
      <Navbar />  {/* top */}
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />  {/*route me render kya hn data */}
       <Route path="/Salesmen" element={<Salesmen/>} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}



export default App
