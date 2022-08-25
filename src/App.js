import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import React from 'react';
import Footer from './Footer.js';
import Contact from './Contact.js'

function App() {
  return (
    <BrowserRouter>
      <div className='nav-wrapper'>
        <Nav />
      </div>
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
