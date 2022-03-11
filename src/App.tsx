import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, TODO } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">TODO App</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<TODO />} />
      </Routes>
    </div>
  );
}

export default App;
