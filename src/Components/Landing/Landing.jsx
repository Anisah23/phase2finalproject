import React, { useEffect, useState } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

const shuffleArray = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const Landing = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quote, setQuote] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => {
        const urls = data.data.map((anime) => anime.images.jpg.large_image_url);
        const shuffled = shuffleArray(urls);
        setImages(shuffled);
        setCurrentImageIndex(Math.floor(Math.random() * shuffled.length)); // Start randomly
      });
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          images.length > 0 ? (prevIndex + 1) % images.length : 0
        );
        setFadeIn(true);
      }, 500); 
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    let isMounted = true;

    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.animechan.io/v1/quotes/random");
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        if (isMounted) {
          setQuote(data.quote);
        }
      } catch (err) {
        console.error("Error fetching quote:", err.message);
        if (isMounted) {
          setQuote("Anime is an escape. A beautiful one.");
        }
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 45000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const handleDiscover = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      {images.length > 0 && (
        <div
          className={`background-image ${fadeIn ? "fade-in" : "fade-out"}`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
      )}

      <div className="overlay">
        <h1 className="title">Welcome to Animetion</h1>

        {quote && (
          <div className="quote-box">
            <p className="quote-text">“{quote}”</p>
          </div>
        )}

        <button className="discover-btn" onClick={handleDiscover}>
          Discover Anime
        </button>
      </div>
    </div>
  );
};

export default Landing;
