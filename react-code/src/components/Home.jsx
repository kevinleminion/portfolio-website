import React from "react";
import './Home.css';

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
                    <img src="/src/assets/jackpot.jpg" alt="Jackpot" />
                </div>
            </div>
        </section>
    );
};

export default Home;
