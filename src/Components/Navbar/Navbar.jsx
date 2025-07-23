import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Animetion</h2>
      <ul className="nav-links">
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/genres">Genres</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
