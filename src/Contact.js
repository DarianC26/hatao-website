import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div class="containerform">
            <div className='contact-title'>
                <h1>Contact Us</h1>
                <h2>For Any Questions Or Inquiries Send an Email!</h2>
            </div>

            <div className='contact-form'>
                <form target="_blank" action="https://formsubmit.co/hataonyc@gmail.com" method="POST" id='contact-form'>
                    <input name='name' type='text' className='form-control' placeholder='Full Name' required></input><br></br>
                    <input name='email' type='text' className='form-control' placeholder='Email Address' required></input><br></br>
                    <textarea name='message' className='form-control' placeholder="Message" rows="4" required></textarea><br></br>

                    <input type='submit' className='form-control submit' value='SEND MESSAGE'></input>
                </form>
            </div>
        </div>
    );
}

export default Contact;