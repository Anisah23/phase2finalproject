import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<div>Home Page Coming Soon</div>} />
        <Route path="/genres" element={<div>Genres Page Coming Soon</div>} />
        <Route path="/favorites" element={<div>Favorites Page Coming Soon</div>} />
      </Routes>
    </>
  );
}

export default App;
