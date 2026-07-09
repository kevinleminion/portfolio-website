import React from "react";
import './Home.css';
import jackpotImg from '../assets/jackpot.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className = "home-content">
                <h1 className="home-header">
                    Welcome to My Portfolio
                </h1>
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
