
import './App.css';
import React from 'react';
import  { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Hero } from './Routes/Hero';
import { Inventory } from './Routes/Inventory';
import { More } from './Routes/More';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<More/>}/>
        <Route path='/Inventory' element={<Inventory/>}/>
        <Route path='/Hero' element={<Hero/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
