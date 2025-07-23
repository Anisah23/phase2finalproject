import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing'; 
import React, { useState } from "react";
import GenreSidebar from "./Components/Sidebar/sidebar";
import '../src/App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    console.log("Selected genre:", genre);
    // Fetch anime based on genre here
  }

  return (
    <div className="flex">
      <GenreSidebar onSelectGenre={handleGenreSelect} />
    </div>
  );
}

export default App;

