import MovieCard from "../Component/MovieCard";
import { useState, useEffect } from "react";
import { SearchMovies, getPopularMovies } from "../Services/api";
import "../Component/css/Home.css";

function Home() {
  const [SearchQuery, SetSearchQuery] = useState("");
  const [movies, SetMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const PopularMovies = await getPopularMovies();
        SetMovies(PopularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies...");
      } finally {
        setloading(false);
      }
    };
    loadPopularMovies();
  }, []);
  console.log(movies);

  const HandleSearch = async (e) => {
    e.preventDefault();
    if (!SearchQuery.trim()) return;
    if (loading) return;
    setloading(true);
    try {
      const searchResults = await SearchMovies(SearchQuery);
      SetMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search movie");
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <div className="home">
        <form onSubmit={HandleSearch} className="Search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="Search-input"
            value={SearchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
          />
          <button type="submit" className="Search-btn">
            Search
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
