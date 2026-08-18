import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MobileNavBar from "./Components/MobileNavBar";

function App() {
  return (
    <div className="App">
      <MobileNavBar />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
