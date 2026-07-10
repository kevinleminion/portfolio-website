import React from "react";
import './Home.css';
import jackpotImg from '../assets/jackpot.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className = "home-content">
                <h1 className="home-header">
                    Welcome, my name is Jordan
                </h1>
                <hr className = "separator-line"/> 
                <p className = "self-intro">
                    Borderline psychopathic solitude freak, taking life one step at a time.
                </p>
                <hr/>
                <p className = "professional-goals">
                    Computer science student fascinated about modern cloud infrastructure and the incredible capacity it brings for GitOps automation.
                </p>
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
