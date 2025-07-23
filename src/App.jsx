import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing'; 

function App() {
  return (
    <> <Navbar />
    <Landing />
    </>
    
     
  );
}

export default App;
