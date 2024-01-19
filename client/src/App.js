//import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//import Axios from 'axios';

//routes
import Home from './routes/Home'
import Register from './routes/Register'

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/register" index element={<Register />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
