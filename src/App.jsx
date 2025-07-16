import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  console.log("App");
  return (
    <div>
      <Header /> 
      
      <main>
       
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <p>© 2025 Jinadu Jadesola. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
