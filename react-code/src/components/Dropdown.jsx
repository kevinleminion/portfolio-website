import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = () => {
    const [menuOpen, setOpen] = useState(false);

    return (
        <div className = "game-container">
            <h2>My Picks for Top 5 Games: ▼</h2>
            <ul className = "game-list">
                <li>Silent Hill 2</li>
                <li>Devil May Cry 5</li>
                <li>Metal Gear Solid 2</li>
                <li>Persona 4 Golden</li>
                <li>Resident Evil 4</li>
            </ul>
        </div>
    );
};

export default Dropdown;