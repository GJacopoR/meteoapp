import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home/component';
import Navbar from './components/Navbar/component';
import City from './view/City/component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <Home /> } />
          <Route path="/:city" element={ <City/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
