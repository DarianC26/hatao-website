import React from 'react';
import './Nav.css';
import logo from './images/black-logo.png';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <a href='/'><img src={logo} onClick='' alt=''></img></a>
            <ul className='nav-links'>
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/contact">
                    <li>CONTACT</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;