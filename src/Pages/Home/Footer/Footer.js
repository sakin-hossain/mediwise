import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer gap-4 text-white grid items-center md:grid-cols-4 sm:grid-cols-2">
                <div>
                    <h2>Contact</h2>
                    <p>Phone <br /> <span>11-55-777-88</span></p>
                    <p>Email <br /> <span>medi@wise.com</span></p>
                    <p>Address <br /> <span>123, Uttara, Dhaka</span></p>
                </div>
                <div>
                    <h2>About</h2>
                    <ul>
                        <li><Link to='/doctor'>Doctors</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/Services'>Services</Link></li>
                        <li><Link to='/contract'>Contract</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Support</h2>
                    <ul>
                        <li>Online Support</li>
                        <li>Free Consultancy</li>
                        <li>24/7 Service</li>
                        <li>Make Call</li>
                        <li>Contract Support</li>
                    </ul>
                </div>
                <div>
                    <h2>Opening Hour</h2>
                    <ul>
                        <li>Sun:09:00 AM - 09:00 PM</li>
                        <li>Mon:09:00 AM - 09:00 PM</li>
                        <li>Tue:09:00 AM - 09:00 PM</li>
                        <li>Wed:09:00 AM - 09:00 PM</li>
                        <li>Thu:09:00 AM - 09:00 PM</li>
                    </ul>
                </div>
            </div>
            {/* copyright section */}
            <div className="copyright text-white flex justify-around p-5">
                <p>Copyright &copy; 2021 MediWise. Designed By Md. Sakin Hossain</p>
                <p> <Link to="/home">Terms &amp; Conditions </Link> | <Link to="/home"> Privacy Policy</Link></p>
            </div>
        </>
    );
};

export default Footer;