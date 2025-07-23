import React from "react";
import './sidebar.css'
const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mecha",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

function GenreSidebar({ onSelectGenre }) {
  return (
    <aside className="aside-side">
      <h2 className="header">Genres</h2>
      <ul className="genre-ul">
          <li><button className="genre">Action</button></li>
          <li><button className="genre">horro</button></li>
          <li><button className="genre">Love</button></li>
          <li><button className="genre">Scifi</button></li>
          <li><button className="genre">Hentai</button></li>
          <li><button className="genre">Romance</button></li>
      </ul>
    </aside>
  );
}

export default GenreSidebar;
