import React from "react";
import './index.css'; {/* basic imports */}

import NavBar from "./components/Navbar"; 
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    // We are forcing a dark background and a minimum layout height right here
    <div style={{ backgroundColor: "#0a0f1f", minHeight: "100vh", color: "#ffffff" }}>
      
      <NavBar />

      
      
      {/* home page section */}
      <div id="main"> <Home /> </div>

      <div id="about"> <About /> </div>

    </div>
  );
}

export default App;