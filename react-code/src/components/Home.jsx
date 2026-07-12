import React from "react";
import './Home.css';
import jackpotImg from '../assets/jackpot.jpg';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home-container">
            <div className = "home-content">
                <h1 className="home-header">
                    Welcome to my portfolio site!
                </h1>
                <hr className = "separator-line"/> 
                <p className = "self-intro">
                    Exceptionally eccentric solitude freak traversing life one day at a time.
                </p>
                <hr/>
                <p className = "professional-goals">
                    I'm a computer science student fascinated about modern cloud infrastructure and the incredible capacity it brings for GitOps automation.
                </p>

                <div className = "social-links">
                    <a href = "https://github.com/kevinleminion" target="_blank" rel="noreferrer"> 
                        <FaGithub className="social-icon" />
                    </a>
                    <a href = "https://www.instagram.com/jordantran47/" target="_blank" rel="noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
            </div>

            <div className = "image-container"> 
                <figure className="home-image">
                    <img src={jackpotImg} alt="Jackpot" />
                </figure>
                <h1 className="home-image-header">
                    "I may be racist, but you were mean and that's worse."
                </h1>
            </div>
        </div>
    );
};

export default Home;
