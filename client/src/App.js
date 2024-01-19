import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Axios from 'axios';

//routes
import Home from './routes/Home'

function App() {
  return (
  <div>
    <Home />
  </div>
  );
}

export default App;
