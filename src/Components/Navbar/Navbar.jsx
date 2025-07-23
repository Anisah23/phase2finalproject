import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <Link to="/" className="logo-link">
        <h1 className="logo">Animetion</h1>
      </Link>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/genres">Genres</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
