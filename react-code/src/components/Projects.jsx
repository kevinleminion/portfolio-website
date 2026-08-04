import React, {useRef, useEffect, useState} from "react";
import './Projects.css';

const Projects = () => {

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

                        <div className = "project-descriptor">
                            <p className = "quick-rundown"></p>
                            <ul className = "main-skills">

                            </ul>
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

                        <div className = "project-descriptor">
                            <p className = "quick-rundown"></p>
                            <ul className = "main-skills">
                                
                            </ul>
                        </div>

                        <button className = "close-button" onClick = {() => setActivePopup(null)}>X</button>
                    </div>
                </dialog>
            )}

            {activePopup === "cloud-project" && (
                <dialog ref = {popupRefs["cloud-project"]} className = "cloud-project">
                    <div className = "pop-container">
                        <span className = "individual-header"></span>

                        <div className = "separator-line">
                            <CreateStar className = "fp-star"></CreateStar>
                            <hr className = "gradient-line"/>
                        </div>

                        <div className = "project-descriptor">
                            <p className = "quick-rundown"></p>
                            <ul className = "main-skills">
                                
                            </ul>
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

                        <div className="project-descriptor">
                            <p className="quick-rundown"></p>
                            <ul className="main-skills"></ul>
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