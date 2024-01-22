//import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { CookiesProvider } from 'react-cookie'
//import Axios from 'axios';

//routes
import Home from './routes/Home'
import Register from './routes/Register'
import Login from './routes/Login'

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/register" index element={<Register />} />
            <Route path="/login" index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
