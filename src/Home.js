import React from 'react';
import './Home.css';
import image from './images/cones.png'

function Home() {

    function scrollToMenu() {
        var elmntToView = document.getElementById("menu");
        elmntToView.scrollIntoView(); 
    }

    return (
        <div className='container'>
            <div className='intro-banner'>
                <div className='intro-text'>
                    <h1>Welcome to</h1>
                    <span>HATAO</span>
                    <div className='underline'></div>
                    <div className='find-us'>
                        <p>Shrimpin' ain't easy. So come find us at your nearest location!</p>
                        <button className='btn'>Find Us</button>
                    </div>
                </div>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn' onClick={scrollToMenu}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
                </div>
            </div>
            
            <div className='menu' id='menu'>
                hi
            </div>
        </div>
    );
}

export default Home;