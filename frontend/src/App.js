import './App.css';
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div className='wrapper'>
      <h1>Dashboard</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;