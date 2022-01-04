import React from 'react';
import './Footer.css'
import Ferrari from '../Images/ferrari.png' 
const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Bd Carz</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="#projects">Services</a></li>
                        <li><a href="#services">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>quick link</h4>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/blog">blog</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Find Us</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className='footer-col'>
                    <img src={Ferrari} alt="" />
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;