
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AnimeDetail.css";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="anime-detail">Loading...</div>;
  if (!anime) return <div className="anime-detail">Anime not found</div>;

  return (
    <div className="anime-detail">
      <img src={anime.images?.jpg?.image_url} alt={anime.title} />
      <h1>{anime.title}</h1>
      <p><strong>Episodes:</strong> {anime.episodes ?? "Unknown"}</p>
      <p><strong>Status:</strong> {anime.status}</p>
      <p><strong>Score:</strong> {anime.score ?? "N/A"}</p>
      <p><strong>Rank:</strong> {anime.rank ?? "N/A"}</p>
      <p><strong>Duration:</strong> {anime.duration}</p>
      <p><strong>Rating:</strong> {anime.rating}</p>
      <p><strong>Synopsis:</strong> {anime.synopsis || "No synopsis available."}</p>
    </div>
  );
};

export default AnimeDetail;
