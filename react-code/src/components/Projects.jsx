import React, {useRef, useEffect, useState} from "react";
import './Projects.css';

const Projects = () => {
    // simply returns a github url
    function GithubLink({ url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="github-link">
        <svg viewBox="0 0 24 24" fill="currentColor" className="github-icon">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        View on GitHub
        </a>
    );
    }

    // makes a four pointed star
    function CreateStar({className}) {
    return (
        <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="currentColor"
        >
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
        </svg>
    );
    }

    /* makes a button with a specific name and click functionality */
    function Button({label, onClick}) {
        return (
            <button className="generic-button" onClick={onClick}> 
            {label}
            </button>
        );
    }
    // creates a button with generic classname and specified text/onclick behaviour. fairly simple

    const [activePopup, setActivePopup] = useState(null); // no current popup

    /* all the refs for the popups */
    const popupRefs = {
        "seng-300": useRef(null),
        "portfolio-site": useRef(null),
        "cloud-project": useRef(null),
        "undecided-project": useRef(null)
    }

    /* function to determine which popup should be shown */
    useEffect(() => {
        Object.values(popupRefs).forEach(ref => ref.current?.close()); // whenever active popup changes, close what was open before

        if (activePopup && popupRefs[activePopup]?.current) {
            popupRefs[activePopup].current.showModal();

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth; // grab scrollbar width, ai helped me here            
            document.body.style.overflow = 'hidden'; // lock scroll
            document.body.style.paddingRight = `${scrollbarWidth}px`; // compensate for the removed scrollbar
        } else {
            document.body.style.overflow = ''; // restore scroll
            document.body.style.paddingRight = '';
        }

    }, [activePopup]); /* runs whenever activePopup is changed */
    
    return(
        <div className = "main-container">
            <div className = "intro-container">
                <h1 className = "project-header">Projects</h1>
                <hr className = "gradient-line"></hr>
                <p className = "intro-text">
                    Admittedly not much here on behalf of my lack of experience, though I will make an attempt to update this section as time goes on.
                    My primary objective with these projects is to gain a wider variety of skills; there will of course come a demand
                    for specialization, however far down the line that is.
                </p>
            </div>
            {/*Intro section*/}


            <div className = "button-container">
                <Button label = "SENG 300" onClick={() => setActivePopup("seng-300")}/>
                <Button label = "Portfolio Site" onClick={() => setActivePopup("portfolio-site")}/>
                <Button label = "Cloud To-Do App" onClick={() => setActivePopup("cloud-project")}/>
                <Button label = "Undecided Project" onClick={() => setActivePopup("undecided-project")}/>
            </div>
            {/*Creating all the buttons, using the template function up above*/}



            {/*----------------------------- INDIVIDUAL POPUPS ---------------------------------------*/}
            {activePopup === "seng-300" && (
                <dialog ref = {popupRefs["seng-300"]} className = "seng-300">  
                    <div className = "pop-container">
                        <span className = "individual-header">SENG300 Course Project</span>

                        <div className = "separator-line">
                            <CreateStar className = "fp-star"></CreateStar>
                            <hr className = "gradient-line"/>
                        </div>

                        <div className = "project-screenshot">
                            <img></img>
                        </div>

                        <div className = "project-descriptor">
                            <p className = "quick-rundown">
                                This is a project I contributed to for my second year course 'Introduction to Software Engineering'.
                                Multiplayer game platform supporting live matchmaking and gameplay, while also storing user data on a SQL database.
                            </p>
                            <ul className = "main-skills">
                                <h1>Main Skills:</h1>
                                <li>Java & JUnit Testing</li>
                                <li>Symmetric Payload Encryption</li>
                                <li>SQL Database Persistence</li>
                                <li>Multithreaded Server Architecture</li>
                                <li>Large-Scale Agile Collaboration</li>
                            </ul>
                            <GithubLink url = "https://github.com/kevinleminion/SENG-300-Project"/>
                        </div>

                        <button className = "close-button" onClick = {() => {console.log("clicked"); setActivePopup(null);}}>X</button>
                    </div>
                </dialog>
            )}
            
            {activePopup === "portfolio-site" && (
                <dialog ref = {popupRefs["portfolio-site"]} className = "portfolio-site">
                    <div className = "pop-container">
                        <span className = "individual-header">This Website!</span>

                        <div className = "separator-line">
                            <CreateStar className = "fp-star"></CreateStar>
                            <hr className = "gradient-line"/>
                        </div>

                        <div className = "project-screenshot">
                            <img></img>
                        </div>

                        <div className = "project-descriptor">
                            <p className = "quick-rundown">
                                Website made as a placeholder while I figured out what I truly wanted to make, while also expanding
                                on CSS and HTML knowledge from much earlier in my life.
                            </p>
                            <ul className = "main-skills">
                                
                            </ul>
                            <a className = "github-link">GitHub Link</a>
                        </div>

                        <button className = "close-button" onClick = {() => setActivePopup(null)}>X</button>
                    </div>
                </dialog>
            )}

            {activePopup === "cloud-project" && (
                <dialog ref = {popupRefs["cloud-project"]} className = "cloud-project">
                    <div className = "pop-container">
                        <span className = "individual-header">Cloud D2L App</span>

                        <div className = "separator-line">
                            <CreateStar className = "fp-star"></CreateStar>
                            <hr className = "gradient-line"/>
                        </div>

                        <div className = "project-screenshot">
                            <img></img>
                        </div>

                        <div className = "project-descriptor">
                            <p className = "quick-rundown">

                            </p>
                            <ul className = "main-skills">
                                
                            </ul>
                            <a className = "github-link">GitHub Link</a>
                        </div>

                        <button className = "close-button" onClick = {() => setActivePopup(null)}>X</button>
                    </div>
                </dialog>
            )}

            {activePopup === "undecided-project" && (
                <dialog ref={popupRefs["undecided-project"]} className="undecided-project">
                    <div className = "pop-container">
                        <span className="individual-header">Undecided Project</span>

                        <div className="separator-line">
                            <CreateStar className="fp-star"/>
                            <hr className="gradient-line"/>
                        </div>

                        <div className = "project-screenshot">
                            <img></img>
                        </div>

                        <div className="project-descriptor">
                            <p className="quick-rundown">

                            </p>
                            <ul className="main-skills">

                            </ul>
                            <a className = "github-link">GitHub Link</a>
                        </div>

                        <button className="close-button" onClick={() => setActivePopup(null)}>X</button>
                        {/* button should be separate but it doesn't really matter here */}
                    </div>
                </dialog>
            )}
        </div>
    )
}

export default Projects;