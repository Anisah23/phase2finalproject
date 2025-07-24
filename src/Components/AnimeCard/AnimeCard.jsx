import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnimeCard.css";

const AnimeCard = ({
  anime,
  onAddToFavorites,
  onRemoveFromFavorites,
  isFavorite = false,
  showRemove = false, 
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/anime/${anime.mal_id || anime.id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (showRemove && onRemoveFromFavorites) {
      onRemoveFromFavorites(anime.id);
    } else if (onAddToFavorites) {
      onAddToFavorites(anime);
    }
  };

  return (
    <div className="anime-card" onClick={handleCardClick}>
      <img
        src={anime.image || anime.images?.jpg?.image_url}
        alt={anime.title}
        className="anime-img"
      />
      <h3 className="anime-title">{anime.title}</h3>
      {(onAddToFavorites || showRemove) && (
        <button className="fav-btn" onClick={handleButtonClick}>
          {showRemove ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      )}
    </div>
  );
};

export default AnimeCard;
