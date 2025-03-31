import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import AccessPage from './AccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/access" element={<AccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
