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
                        <div className = "game-text">

                        </div>
                    </div>
                )}
                {activeTab === "dmc" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {devilMayCry} className = "game-image"/> </div>
                        <div className = "game-text">

                        </div>
                    </div>
                )}
                {activeTab === "mgs" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {metalGear} className = "game-image"/> </div>
                        <div className = "game-text">

                        </div>
                    </div>
                )}
                {activeTab === "p4" && (
                    <div className = "game-page">   

                        <div className = "image-wrapper"> <img src = {personaFour} className = "game-image"/> </div>
                        <div className = "game-text">

                        </div>
                    </div>
                )}
                {activeTab === "re" && (
                    <div className = "game-page">   
                        <div className = "image-wrapper"> <img src = {residentEvil} className = "game-image"/> </div>
                        <div className = "game-text">

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;