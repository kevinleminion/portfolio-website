import React from "react";
import './index.css'; 
import './App.css';

import NavBar from "./components/Navbar"; 
import Home from "./components/Home";
import About from "./components/About";
import Dropdown from "./components/Dropdown";
import Projects from "./components/Projects";

function App() {
  return (
    // We are forcing a dark background and a minimum layout height right here
    <div className = "return-website">
      <div className="bubbles-container">
        <span className="bubble bubble-1"></span>
        <span className="bubble bubble-2"></span> 
        <span className="bubble bubble-3"></span>
        <span className="bubble bubble-4"></span>
        <span className="bubble bubble-5"></span>
      </div>

      <div className = "content-wrapper">
        <NavBar />

        {/* home page section */}
        <div id="main"> <Home /> </div>

        <div id="about"> <About /> </div>

        <div id ="projects"> <Projects/> </div>
      </div>
    </div>
  );
}

export default App;