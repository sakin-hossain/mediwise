import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="flex p-3 justify-around items-center flex-wrap header md:sticky top-0 bg-white">
            <div className="text-2xl">
                <Link to="/home">
                    <h1>Medi<span className="text-blue-400">Wise</span></h1>
                </Link>
            </div>
            <div className="font-semibold">
            <ul className="flex">
                <li className="mr-6">
                    <Link to="/home">Home</Link>
                </li>
                <li className="mr-6">
                    <HashLink to="/home#services">Services</HashLink>
                </li>
                <li className="mr-6">
                    <Link to="/contract">Contract Us</Link>
                </li>
                <li className="mr-6">
                    <HashLink to="/home#about-us">About Us</HashLink>
                </li>
                <li className="mr-6">
                    <Link to="/appointment">Appointment</Link>
                </li>
                </ul>
            </div>
            <div className="buttons">
                {
                    !user.email ? <Link to="/login"><button type="button" className="btn__regular">Login</button></Link> :
                    <div className="login__section">
                        <h2 className="mr-4">Welcome <span className=" text-blue-400 font-bold">{user.displayName}</span></h2>
                    <button type="button" onClick={logOut} className="btn__regular">LogOut</button>
                    </div>
                    }
            </div>
        </div>
    );
};

export default Header;