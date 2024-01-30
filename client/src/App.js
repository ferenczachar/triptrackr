//import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { UserContextProvider } from "./UserContext"

//routes
import Home from './routes/Home'
import Register from './routes/Register'
import Login from './routes/Login'
//Logged in routes
import Dashboard from './routes/Dashboard'
import CreatePost from './routes/CreatePost'
import ShowPost from './routes/ShowPost'

function App() {
  return (
      <UserContextProvider>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/register" index element={<Register />} />
            <Route path="/login" index element={<Login />} />
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/posts/new" index element={<CreatePost />} />
            <Route path="/posts/:id" index element={<ShowPost />} />
        </Routes>
      </UserContextProvider>
  );
}

export default App;
