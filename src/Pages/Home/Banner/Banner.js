import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__title">
                <p>Critical Care Center</p>
                <h1>MediWise Specialist <br /> Services That You <br /> Can Trust</h1>
                <button className="btn__regular mx-auto">More About Us</button>
            </div>
        </div>
    );
};

export default Banner;