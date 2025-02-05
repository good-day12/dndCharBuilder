import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HelloWorld from './HelloWorld';
import LoginPage from './login';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<HelloWorld />} />
        <Route path="/login" element = {<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;