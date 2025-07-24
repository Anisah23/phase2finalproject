import React, { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  const handleRemove = (id) => {
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFavorites((prev) => prev.filter((fav) => fav.id !== id));
    });
  };

  const filteredFavorites = favorites.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="favorites-page">
      <h2 className="section-title">Your Favorites</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Search favorites..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="anime-grid">
        {filteredFavorites.map((anime) => (
         <AnimeCard
  key={anime.id}
  anime={anime}
  showRemove={true} 
  onRemoveFromFavorites={() => handleRemove(anime.id)}
/>

        ))}
      </div>
    </div>
  );
};

export default Favorites;
