import React, {useState, useEffect} from "react";
import './Navbar.css';

const NavBar = () => {

    const [hidden, setHidden] = useState(false);
    const [previousY, setPreviousY] = useState(0); // previous y position of the screen

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY; // 
            const deltaScroll = currentY - previousY;
        // so the navbar can't disappear at the very top
        if (currentY < 50) {
            setHidden(false);
            setPreviousY(currentY);
            return;
        }
        
        // user is scrolling down
        if(deltaScroll > 50){
            setHidden(true);
            setPreviousY(currentY);
            return;
        }

        // user is scrolling up
        else if(deltaScroll < -50){
            setHidden(false);
            setPreviousY(currentY);
            return;
        }
    };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [previousY]);

    return(
    <nav className = {`navbar ${hidden ? 'hidden' : ''}`}>
        <div className = "navbar-container">
            <a href="#main" ><span className = "name">Jordan Tran</span><span className = "accent">.dev</span></a>
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