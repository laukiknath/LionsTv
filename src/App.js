import './index.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Pageses/About';
import Home from './Pageses/Home';
import BMovie from './Pageses/BMovie';
import HMovie from './Pageses/HMovie';
import Login from './Pageses/Login';
import Register from './Pageses/Register';
function App() {
  return (
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/bmovie" element={<BMovie/>}/>
          <Route path="/hmovie" element={<HMovie/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
     <Footer/>
     </Router>
    
  );
}

export default App;
