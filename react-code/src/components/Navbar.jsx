import React, {useState, useEffect} from "react";
import './Navbar.css';

const NavBar = () => {

    const [hidden, setHidden] = useState(false);
    const [previousY, setPreviousY] = useState(0); // previous y position of the screen
    const [menuOpen, setMenuOpen] = useState(false); // for the mobile menu

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

    // lock page scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen])

     const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
            <div className="navbar-container">
                <a href="#main">
                    <span className="name">Jordan Tran</span>
                    <span className="accent">.dev</span>
                </a>

                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contacts</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;