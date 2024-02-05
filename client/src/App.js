//import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { UserContextProvider } from "./UserContext"
import { QueryContextProvider } from "./QueryContext"

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
        <QueryContextProvider>
          <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/register" index element={<Register />} />
              <Route path="/login" index element={<Login />} />
              <Route path="/dashboard" index element={<Dashboard />} />
              <Route path="/posts/new" index element={<CreatePost />} />
              <Route path="/posts/:id" index element={<ShowPost />} />
          </Routes>
        </QueryContextProvider>
      </UserContextProvider>
  );
}

export default App;
