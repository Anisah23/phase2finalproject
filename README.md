## phase2finalproject
A sleek and interactive single-page Anime Recommendation Web App built with React. Explore seasonal anime, search by genres, view detailed info about your desired anime, and manage your favorites seamlessly.

## Features
# Landing Page
- Faded background slideshow of popular anime
- "Discover" button to navigate to main app

# Home Page
- Displays seasonal anime (Fall 2019 by default)
- Each anime shown with poster, title, and description
- Add or remove anime from your favorites
- Clickable cards to view detailed anime info

# Genres Page
- Lists all anime genres from the Jikan API
- Clicking a genre displays all anime in that category
- Search filter and favorites support included

# Favorites Page
- Shows all your favorited anime using json-server
- Search filter to find favorites easily
- "Edit Favorites" mode with multi-select delete
- Full detail view supported

# Anime Detail View
- Full anime details from Jikan API
-Includes number of episodes, genres, score, and synopsis

## Tech Stack
- Frontend: React (with Vite), React Router, Custom CSS
- Backend (Mock): JSON Server
- APIs: Jikan API

## Installation and Setup
1. Clone the repository:
- git clone the application from github into your local machine
- cd into the application
2. Install dependencies:
- npm install
3. Start the frontend:
- npm run dev
4. Start the backend server:
- npm install -g json-server
- json-server --watch db.json --port 3000/npm run server
5. Ensure db.json is in your root directory.

## Author
- Anisah23,jeshurunmuchugingugi,Nate23-Q,Ryan Mwai
- github repository: https://github.com/Anisah23/phase2finalproject
- live link: https://phase2finalproject-kixo9dt7z-anisah23s-projects.vercel.app/

## License
- MIT LICENSE