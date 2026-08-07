import React, { useState, useEffect } from "react";
import './About.css';
import Dropdown from './Dropdown';

const About = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    // simple check to see if the user is on mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="about-container">
            <div className="about-quote">
                <h1>"To live is to change, to choose something new. To lose whatever has not been chosen is to gain by loss."</h1>
            </div>
            <h2 className = "quick-summary">
                👋 Hey, I'm Jordan! I'm currently a third year Computer Science student at the <span style={{ color: "#d6001c" }}>University</span> 
                <span style = {{color:"#ffcd00"}}> of</span> <span style={{ color: "#d6001c" }}>Calgary</span>, and I'm making
                this website to develop my skills in CSS and HTML, while also learning something new in front-end development through React.
            </h2>
            
            <div className = "about-content">
                <h2>
                    In my spare time you can usually find me playing video games, hitting the gym, or going on walks to random places
                    for absolutely no reason. Variety is the spice of life, otherwise it may become monotonous.
                </h2>
                <div className = "divider"></div>
                <h2>
                    {isMobile
                        ? "I'm drawn to cloud computing and cybersecurity over general software engineering, though I find software engineering to be compelling in its own right."
                        : "Cloud computing and cybersecurity to me are the more interesting fields of computer science, and while I do still appreciate the intricacies of general software engineering, I don't find it to be as compelling."
                    }
                    
                </h2>
            </div>
            <Dropdown/>
            <hr/>
        </div>
    );
};

export default About;