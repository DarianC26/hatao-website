import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav.js'
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className='nav-wrapper'>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
