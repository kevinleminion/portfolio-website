import React from "react";
import './Navbar.css';

const NavBar = () => {
    return(
    <nav className = "navbar">
        <div className = "navbar-container">
            <a href="#main" >Jordan Tran<code className = "accent">/dev</code></a>
            <ul className = "navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
        </div>

    </nav>
    )
}

export default NavBar;