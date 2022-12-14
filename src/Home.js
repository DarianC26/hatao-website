import React from 'react';
import './Home.css';
import image1 from './images/image1.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/fries.png';
import image0 from './images/bbqshrimp.png';
import tape from './images/tape.png';


function Home() {
    var n = 0;
    const images = [];
    images[0] = image0;
    images[1] = image1;
    images[2] = image3;
    images[3] = image4;

    function scrollToMenu() {
        var elmntToView = document.getElementById("menu");
        elmntToView.scrollIntoView();
    }

    function scrollToMap() {
        var elmntToView = document.getElementById("finder");
        elmntToView.scrollIntoView();
    }

    function test(num) {
        if(num === 1 && (n + num === images.length)) {
            n = 0;
        }
        else if(num === -1 && (n + num < 0)){
            n = images.length - 1;
        }
        else {
            n = n + num;
        }
        const temp = document.getElementById("test");
        temp.src = images[n];
    }

    return (
        <div className='container'>
            <div className='intro-banner'>
                <div className='intro-text'>
                    <h1>Welcome to</h1>
                    <span>HA✩TAO</span>
                    <div className='underline'></div>
                    <div className='find-us'>
                        <p>Shrimpin' ain't easy. So come find us at your nearest location!</p>
                        <button className='btn' onClick={scrollToMap}>Find Us</button>
                    </div>
                </div>
                <div className='menu-btn-wrapper'>
                    <button className='menu-btn' onClick={scrollToMenu}><i className="fa fa-angle-down" aria-hidden="true"></i></button>
                </div>
            </div>
            
            <div className='menu' id='menu'>
                <div className='gallery-container'>
                    <div className='gallery-text'>
                        <div className='sample-text'>
                            <h1>SPICY BBQ SHRIMPS LIKE YOU'VE NEVER TASTED BEFORE</h1>
                            <h2>Ha-tao means Shrimp Head</h2>
                            <p>The prized morsel of crustacean is known to hold delicious and intense flavors.</p>
                            <br></br>
                            <p>Our signature dish, Asian BBQ Shrimp is a perfect representation of our food - savory, spicy, and complex</p>
                        </div>
                    </div>
                    <div className='slideshow'>
                        <i className="fa fa-angle-left" aria-hidden="true" onClick={() => test(-1)}></i>
                        <img className='tape' src={tape} alt=''></img>
                        <img className='picture' id='test' src={image0} alt=''></img>
                        <i className="fa fa-angle-right" aria-hidden="true" onClick={() => test(1)}></i>
                    </div>
                </div>
            </div>

            <div className='location' id='finder'>
                <div className='find-us-wrapper'>
                    <h1>Visit Us At Smorgasburg</h1>
                </div>
                <div className='map-wrapper'>
                    <iframe
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdY9eD7iLu0V3kC60fpwZrGUYLTDky79Y&q=Harborside+Pl,Jersey+City,NJ" title='myframe' className='map'>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;