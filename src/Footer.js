import React from 'react';
import './Footer.css';
import insta from './images/ig.png';
import tiktok from './images/tiktok.png';

function Footer() {
    return (
        <nav className='footernav'>
            <ul className='footer-links'>
                <li>Follow Us</li>
            </ul>
            <a href='https://www.instagram.com/hataonyc/'><img src={insta} alt=''></img></a>
            <a href='/'><img src={tiktok} alt=''></img></a>
        </nav>
    );
}

export default Footer;