import React, { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Home.css";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/2019/fall?sfw")
      .then((res) => res.json())
      .then((data) => setAnimeList(data.data || []));

    fetch("http://localhost:3000/favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  const handleAddToFavorites = (anime) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.mal_id === anime.mal_id);
    if (isAlreadyFavorite) {
      alert("Already in favorites!");
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
      .then((res) => res.json())
      .then((newFav) => {
        setFavorites((prev) => [...prev, newFav]);
        alert("Added to favorites!");
      })
      .catch(() => {
        alert("Failed to add to favorites.");
      });
  };

  const filteredList = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      <h2 className="section-title">Fall 2019 Anime</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="anime-grid">
        {filteredList.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            anime={anime}
            onAddToFavorites={() => handleAddToFavorites(anime)}
            isFavorite={favorites.some((fav) => fav.mal_id === anime.mal_id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
