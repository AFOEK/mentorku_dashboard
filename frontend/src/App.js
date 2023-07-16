import './App.css';
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/dashboard" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;