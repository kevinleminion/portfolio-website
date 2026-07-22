import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import silentHill from '../assets/covers/silent-hill-2.png';
import devilMayCry from '../assets/covers/devil-may-cry-5.png';
import metalGear from '../assets/covers/metal-gear-solid-2.jpg';
import personaFour from '../assets/covers/persona-4.png';
import residentEvil from '../assets/covers/resident-evil-4.png';

const Dropdown = () => {
    const [activeTab, setActiveTab] = useState("");
    // determines which game is being hovered over, uses that to determine what to show

    return (
        <div className = "section-wrapper">
            <div className = "game-container">
            <h2>My Picks for Top 5 Games: ▼</h2>
            <ul className = "game-list">
                <li className = "sh" onMouseEnter={() => setActiveTab("sh")}  onMouseLeave={() => setActiveTab("")}>Silent Hill 2</li>
                <li className = "dmc" onMouseEnter={() => setActiveTab("dmc")}  onMouseLeave={() => setActiveTab("")}>Devil May Cry 5</li>
                <li className = "mgs" onMouseEnter={() => setActiveTab("mgs")}  onMouseLeave={() => setActiveTab("")}>Metal Gear Solid 2</li>
                <li className = "p4" onMouseEnter={() => setActiveTab("p4")}  onMouseLeave={() => setActiveTab("")}>Persona 4 Golden</li>
                <li className = "re" onMouseEnter={() => setActiveTab("re")}  onMouseLeave={() => setActiveTab("")}>Resident Evil 4</li>
            </ul>
            </div>

            <div className={`game-details ${activeTab !== "" ? "visible" : ""}`}>
                {activeTab === "sh" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {silentHill} className = "game-image"/> </div>
                        <div className = "text-wrapper">
                        <div className = "game-text">
                            <h3>
                                Masterfully done atmosphere, effectively capturing an oppressive and bleak environment.
                                Horror at its absolute pinnacle, relying on the psychological rather than simple cheap jumpscares.
                                Of course, where the game shines most is in its thematic writing, coalescing many, many
                                vague symbols into a few core themes. Abysmally optimized, but still a remake worthy of
                                the Playstation 2 original.
                            </h3>
                        </div>
                        <div className = "game-rating">
                            <h3>Rating: 10 frames out of 50 seconds</h3>
                        </div>
                        </div>
                    </div>
                )}
                {activeTab === "dmc" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {devilMayCry} className = "game-image"/> </div>
                        <div className = "text-wrapper">
                        <div className = "game-text">
                            <h3>
                                While everything else is a little lacking, DMC5 has some of the most stellar gameplay
                                out of any game I have ever played. Every character (except for one) have incredibly
                                fun kits nuanced enough to be enjoyable even without complete mastery. The characters
                                and their personalities are also greatly memorable, being a key part of why I come back to the game.
                            </h3>
                        </div>
                        <div className = "game-rating">
                            <h3>Rating: 12 pizzas out of 25 berry delights</h3>
                        </div>
                        </div>
                    </div>
                )}
                {activeTab === "mgs" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {metalGear} className = "game-image"/> </div>
                        <div className = "text-wrapper">
                        <div className = "game-text">
                            <h3>
                                Many disliked Raiden as a replacement for Snake, but I personally found his development
                                over the course of the game to be one of the shining points of the game, and a primary factor for why
                                I love the game so much. Profound story that left me thinking well after finishing the game, coupled with
                                the unique stealth of the MGS franchise make this truly a Kojima classic.
                            </h3>
                        </div>
                        <div className = "game-rating">
                            <h3>Rating: 1 MG-RAY out of 300 more</h3>
                        </div>
                        </div>
                    </div>
                )}
                {activeTab === "p4" && (
                    <div className = "game-page">   

                        <div className = "image-wrapper"> <img src = {personaFour} className = "game-image"/> </div>
                        <div className = "text-wrapper">
                        <div className = "game-text">
                            <h3>
                                My first introduction into the series, and while from an objective standpoint it may not be
                                as good as its newer counterparts, it still holds a special place in my heart. Great story
                                and amazing antagonist, though as most would agree, the main cast and their interactions are 
                                what define the game (as well as the music!). The gameplay is also good, even if it pales in comparison to the newer 
                                titles in terms of mechanical complexity.
                            </h3>
                        </div>
                        <div className = "game-rating">
                            <h3>Rating: 3 fried tofus out of 14 hassou tobis</h3>
                        </div>
                        </div>
                    </div>
                )}
                {activeTab === "re" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {residentEvil} className = "game-image"/> </div>
                        <div className = "text-wrapper">
                        <div className = "game-text">
                            <h3>
                                Basically the opposite of DMC5 to me; while the gameplay isn't as amazing, it makes up for it in every other way.
                                The levels and enemies are thoughtfully designed, while also greatly improving the atmosphere that the original held.
                                While not really a scary game, I appreciate that they didn't completely abandon the survival horror aspect like later 
                                titles would go on to do. Lastly, Leon is a complete badass, while also being a huge dork.
                            </h3>
                        </div>
                        <div className = "game-rating">
                            <h3>Rating: 6 absurd parries out of 7 quirky one liners</h3>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;