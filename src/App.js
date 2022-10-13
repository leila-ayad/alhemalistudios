import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <h2>Leila Al-Hemali</h2>
      <h3>Studio Potter</h3>
      <h3>Full-Stack Engineer</h3>
    </div>
  );
}

export default App;
