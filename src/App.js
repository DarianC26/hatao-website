import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className='nav-wrapper'>
        <Nav />
      </div>
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
