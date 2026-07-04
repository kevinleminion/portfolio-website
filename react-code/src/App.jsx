import React from "react";
import NavBar from "./components/Navbar"; // Double check the B is capital!
import './index.css';
import Home from "./components/Home";

function App() {
  return (
    // We are forcing a dark background and a minimum layout height right here
    <div style={{ backgroundColor: "#0a0f1f", minHeight: "100vh", color: "#ffffff" }}>
      
      <NavBar />
      <Home />
      {/* This placeholder pushes content down so it doesn't hide under the fixed navbar */}
      <div id="main" style={{ padding: "20rem 10rem 10rem 2rem" }}>
        <h1 style={{ color: "#61dafb", fontSize: "2.5rem", marginBottom: "1rem" }}>
          Jordan Tran/dev Space Is Live!
        </h1>
        <p style={{ color: "#ffffff", fontSize: "1.2rem" }}>
          If you can see this text, your React pipeline is 100% working.
        </p>
      </div>

      <div id="about" style={{ padding: "4rem 2rem", height: "400px", borderTop: "1px solid #1e293b" }}>
        <h2>About Section Placeholder</h2>
      </div>

    </div>
  );
}

export default App;