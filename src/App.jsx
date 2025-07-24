import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorites/Favorites";
import Genres from "./Components/Genres/Genres";
import AnimeDetail from "./Components/AnimeDetail/AnimeDetail";
import GenreAnimeList from "./Components/GenreAnimeList/GenreAnimeList";
import Footer from "./Components/Footer/Footer"; 

function App() {
  const location = useLocation(); 
  const showFooter = location.pathname !== "/"; 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/genre/:id" element={<GenreAnimeList />} />
      </Routes>
      {showFooter && <Footer />} 
    </>
  );
}

export default App;
