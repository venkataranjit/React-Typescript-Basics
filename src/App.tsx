import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Props from "./components/Props";
import State from "./components/State";
import Form from "./components/Form";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
