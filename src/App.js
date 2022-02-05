import React, { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/characters";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Documentation from "./pages/documentation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </>
  );
}

export default App;
