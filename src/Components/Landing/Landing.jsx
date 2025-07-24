import React, { useEffect, useState } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

const shuffleArray = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const Landing = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => {
        const urls = data.data.map((anime) => anime.images.jpg.large_image_url);
        const shuffled = shuffleArray(urls);
        setImages(shuffled);
        const initialIndex = Math.floor(Math.random() * shuffled.length);
        setCurrentImageIndex(initialIndex);

       
        const img = new Image();
        img.src = shuffled[initialIndex];
        img.onload = () => setLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setFadeIn(false); 

      const nextIndex = (currentImageIndex + 1) % images.length;
      const nextImage = new Image();
      nextImage.src = images[nextIndex];

      nextImage.onload = () => {
        setCurrentImageIndex(nextIndex);
        setLoaded(true);
        setFadeIn(true); 
      };
    }, 6000); 

    return () => clearInterval(interval);
  }, [currentImageIndex, images]);

  const handleDiscover = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      {images.length > 0 && loaded && (
        <div
          className={`background-image ${fadeIn ? "fade-in" : "fade-out"}`}
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
      )}

      <div className="overlay">
        <h1 className="title">Welcome to Animetion</h1>

        <p className="quote-text">"Anime is an escape. A beautiful one."</p>

        <button className="discover-btn" onClick={handleDiscover}>
          Discover Anime
        </button>
      </div>
    </div>
  );
};

export default Landing;
