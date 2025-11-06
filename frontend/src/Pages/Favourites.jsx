import "../Component/css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../Component/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext(); // ✅ get favourites from context

  return (
    <div className="favourites-container">
      <h2>Your Favourite Movies ❤️</h2>

      {favourites.length === 0 ? (
        <p>No movies added yet. Go add some from Home!</p>
      ) : (
        <div className="movie-grid">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
