// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import Home from './componentes/home/home';
import GetComponent from './componentes/get-table/table';
import PostComponent from './componentes/post-form/form';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<PostComponent />} />
              <Route path="/list" element={<GetComponent />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
