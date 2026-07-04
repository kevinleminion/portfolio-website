import React from "react";
import './Home.css';
import jackpotImg from '../assets/jackpot.jpg';

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-container">
                <div className = "home-content">
                    <h1 className="home-header">
                        Welcome to My Portfolio
                    </h1>
                </div>

                <div className="home-image">
                    <img src={jackpotImg} alt="Jackpot" />
                </div>
            </div>
        </section>
    );
};

export default Home;
