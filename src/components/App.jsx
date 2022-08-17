import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Edithouse from './Edithouse';
import Favorite from './Favorite';
import Login from './Login';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Register from './Register';

function App({ userSession }) {
  const [authState, setAuthState] = useState(userSession || null);
  return (
    <div className="container">
      <Navbar authState={authState} setAuthState={setAuthState} />
      <Routes>
        <Route path="/" element={<MainPage authState={authState} />} />
        <Route path="/login" element={<Login setAuthState={setAuthState} />} />
        <Route path="/signup" element={<Register setAuthState={setAuthState} />} />
        <Route path="/houses/:id" element={<Edithouse />} />
        <Route path="/favorite/:id" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
