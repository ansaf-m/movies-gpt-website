// import { useState } from "react";
// import "./css/MovieCard.css";
// import { useMovieContext } from "../contexts/MovieContexts";
// import { Form } from "react-router-dom";

// function MovieCard({ movie }) {
//   const { isFavourites, addToFavourites, removeFavourites } = useMovieContext();
//   const favourite = isFavourites(movie.id);
//   function onFavouriteClick(e) {
//     e.preventDefault();
//     if (favourite) removeFavourites(movie.id);
//     else addToFavourites(movie);
//   }

//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//           alt={movie.title}
//         />
//       </div>

//       <div className="movie-overlay">
//         <button
//           className={`favourite-btn ${isFavourites ? "active" : ""}`}
//           onClick={FavOnclick}
//         >
//           ❤
//         </button>
//       </div>

//       <div className="movie-info">
//         <h3>{movie.original_title}</h3>
//         <p>{movie.release_date?.split("-")[0]}</p>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;

import "./css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";

function MovieCard({ movie }) {
  const { isFavourites, addToFavourites, removeFavourites } = useMovieContext();
  const favourite = isFavourites(movie.id); // ✅ returns true/false

  const onFavouriteClick = (e) => {
    e.preventDefault();
    if (favourite) removeFavourites(movie.id);
    else addToFavourites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-overlay">
        {/* ✅ Now toggle between white (not favorite) and red (favorite) */}
        <button
          className={`favourite-btn ${favourite ? "active" : ""}`}
          onClick={onFavouriteClick}
        >
          ❤
        </button>
      </div>

      <div className="movie-info">
        <h3>{movie.original_title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
