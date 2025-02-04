import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HelloWorld from './HelloWorld';
import LoginPage from './login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<HelloWorld />} />
        <Route path="/login" element = {<LoginPage />} />
      </Routes>


      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;