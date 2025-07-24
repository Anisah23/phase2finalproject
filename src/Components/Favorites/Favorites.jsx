import React, { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

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

  const handleDeleteSelected = () => {
    selectedIds.forEach((id) => handleRemove(id));
    setSelectedIds([]);
    setIsEditing(false);
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFavorites = favorites.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="favorites-page">
      <h2 className="section-title">Your Favorites</h2>
      <div className="favorites-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search favorites..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel Edit" : "Edit Favorites"}
        </button>
        {isEditing && selectedIds.length > 0 && (
          <button className="delete-selected-btn" onClick={handleDeleteSelected}>
            Delete Selected ({selectedIds.length})
          </button>
        )}
      </div>

      <div className="anime-grid">
        {filteredFavorites.map((anime) => (
          <div key={anime.id} className="anime-wrapper">
            {isEditing && (
              <input
                type="checkbox"
                checked={selectedIds.includes(anime.id)}
                onChange={() => toggleSelect(anime.id)}
                className="edit-checkbox"
              />
            )}
            <AnimeCard
              anime={anime}
              showRemove={!isEditing}
              onRemoveFromFavorites={() => handleRemove(anime.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
