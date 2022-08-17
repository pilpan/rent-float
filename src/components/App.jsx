import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edithouse from './Edithouse';
import Footer from './Footer';
import Login from './Login';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Register from './Register';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/houses/:id" element={<Edithouse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
