import React from 'react';
import './Footer.css'
import Ferrari from '../Images/ferrari.png' 
const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Bd Carz</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="#projects">Services</a></li>
                        <li><a href="#services">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>quick link</h4>
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/blog">blog</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Find Us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
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