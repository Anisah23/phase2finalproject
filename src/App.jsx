import React, { useState } from "react";
import GenreSidebar from "./assets/Sidebar/sidebar";
import '../src/App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  function handleGenreSelect(genre) {
    setSelectedGenre(genre);
    console.log("Selected genre:", genre);
    // Fetch anime based on genre here
  }

  return (
    <div className="flex">
      <GenreSidebar onSelectGenre={handleGenreSelect} />
    </div>
  );
}

export default App;
