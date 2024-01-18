import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Axios from 'axios';

function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5000/api/test').then((response) => {
      setUserList(response.data)
    });
  }, []);
  return (
    <div>
      <ul>
      {userList.map((user) => {
        return (
        <li key={user.id}>{user.name}</li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
