import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// importing main components
import NavBar from './components/navbar.jsx'

function App() {
  return (
    <div className="app-layout">
      {/* 2. Place your custom Navbar tag right at the top */}
      <Navbar />
      
      {/* 3. Temporary giant blocks so you have space to test scrolling */}
      <div id="hero" style={{ height: '100vh', paddingTop: '100px', paddingLeft: '2rem' }}>
        <h1>Welcome to My /dev Space</h1>
        <p>Scroll down to watch the navigation bar stay pinned...</p>
      </div>
      
      <div id="about" style={{ height: '100vh', padding: '2rem', background: '#0f172a' }}>
        <h2>About Me</h2>
      </div>
      
      <div id="projects" style={{ height: '100vh', padding: '2rem', background: '#1e293b' }}>
        <h2>My Projects</h2>
      </div>
      
      <div id="contact" style={{ height: '100vh', padding: '2rem', background: '#0f172a' }}>
        <h2>Contact Info</h2>
      </div>
    </div>
  )
}

export default App
