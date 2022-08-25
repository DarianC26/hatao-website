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
            <a href='https://www.tiktok.com/@hataonyc?_t=8V8kzpiNTO2&_r=1'><img src={tiktok} alt=''></img></a>
        </nav>
    );
}

export default Footer;