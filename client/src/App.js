//import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { ProtectedRoute } from './controllers/ProtectedRoute'

//context
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
import EditPost from './routes/EditPost'
import DeletePost from './routes/DeletePost'

function App() {
  return (
      <UserContextProvider>
        <QueryContextProvider>
          <Routes>
              {/* Unprotected routes */}
              <Route path="/" index element={<Home />} />
              <Route path="/register" index element={<Register />} />
              <Route path="/login" index element={<Login />} />
              <Route path="/posts/:id" index element={<ShowPost />} />
              
              {/* Protected routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/posts/new" element={<CreatePost />} />
                <Route path="/posts/:id/edit" element={<EditPost />} />
                <Route path="/posts/:id/delete" element={<DeletePost />} />
              </Route>
          </Routes>
        </QueryContextProvider>
      </UserContextProvider>
  );
}

export default App;
