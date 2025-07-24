import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./GenreAnimeList.css";

const GenreAnimeList = () => {
  const location = useLocation();
  const { genreId, genreName } = location.state || {};

  const [animeList, setAnimeList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (genreId) {
      fetch(`https://api.jikan.moe/v4/anime?genres=${genreId}`)
        .then((res) => res.json())
        .then((data) => setAnimeList(data.data || []))
        .catch((err) => console.error("Error fetching genre anime:", err));
    }
  }, [genreId]);

  useEffect(() => {
    fetch("http://localhost:3000/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data))
      .catch((err) => console.error("Error fetching favorites:", err));
  }, []);

  const handleAddToFavorites = (anime) => {
    const alreadyFavorite = favorites.some((fav) => fav.mal_id === anime.mal_id);
    if (alreadyFavorite) {
      alert("This anime is already in your favorites.");
      return;
    }

    const animeData = {
      mal_id: anime.mal_id,
      title: anime.title,
      image: anime.images?.jpg?.image_url,
    };

    fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(animeData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add to favorites");
        }
        return res.json();
      })
      .then((newFavorite) => {
        setFavorites((prev) => [...prev, newFavorite]);
        alert(`${anime.title} added to favorites!`);
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while adding to favorites.");
      });
  };

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!genreId) {
    return (
      <div className="genre-anime-container">
        <h2 className="section-heading">No genre selected.</h2>
      </div>
    );
  }

  return (
    <div className="genre-anime-container">
      <h2 className="section-heading">Anime in Genre: {genreName}</h2>

      <input
        type="text"
        className="genre-search"
        placeholder="Search anime..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="anime-grid">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              onAddToFavorites={() => handleAddToFavorites(anime)}
              isFavorite={favorites.some((fav) => fav.mal_id === anime.mal_id)}
            />
          ))
        ) : (
          <p style={{ color: "white", marginTop: "2rem" }}>
            No anime found for this search.
          </p>
        )}
      </div>
    </div>
  );
};

export default GenreAnimeList;
