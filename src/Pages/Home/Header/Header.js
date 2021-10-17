import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className="flex p-3 justify-around items-center header">
            <div className="text-2xl">
                <h1>Medi<span className="text-blue-400">Wise</span></h1>
            </div>
            <div className="font-semibold">
            <ul className="flex">
                <li className="mr-6">
                    <Link to="/home">Home</Link>
                </li>
                <li className="mr-6">
                    <Link to="/services">Services</Link>
                </li>
                <li className="mr-6">
                    <Link to="about-us">About Us</Link>
                </li>
                <li className="mr-6">
                    <Link to="/appointment">Appointment</Link>
                </li>
                </ul>
            </div>
            <div className="buttons">
                <button type="button" className="btn__regular">Login</button>
                <button type="button" className="btn__regular">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;