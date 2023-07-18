import './App.css';
import logo from './assets/logo.png'
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const link = () => {
    window.location.href = "/"
  }
  return(
    <div className='App'>
      <div className='App-header'>
        <img className="App-logo" alt="mentorku" onClick={link} src={logo}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/dashboard" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <footer>Build with {String.fromCodePoint('0x1F496')} AFÖÉK @ 2023</footer>
    </div>
  );
}

export default App;