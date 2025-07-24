
import React, { useEffect, useState } from 'react';
import './Genres.css';
import { useNavigate } from 'react-router-dom'; 

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then(res => res.json())
      .then(data => setGenres(data.data));
  }, []);

  const handleGenreClick = (genreId, genreName) => {
    navigate(`/genre/${genreId}`, {
      state: { genreId, genreName },
    });
  };

  return (
    <div className="genres-container">
      <h2 className="section-heading">Anime Genres</h2>
      <div className="genres-grid">
        {genres.map((genre) => (
          <div
            key={genre.mal_id}
            className="genre-card"
            onClick={() => handleGenreClick(genre.mal_id, genre.name)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{genre.name}</h3>
            <p>• {genre.count.toLocaleString()} anime</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
