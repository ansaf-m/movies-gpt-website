import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    // ✅ Load favourites immediately on first render (not after)
    try {
      const stored = localStorage.getItem("favourites");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse favourites:", error);
      return [];
    }
  });

  // ✅ Whenever favourites change, sync them with localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // ✅ Add / Remove / Check
  const addToFavourites = (movie) => {
    setFavourites((prev) => {
      if (prev.some((fav) => fav.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFavourites = (movieID) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavourites = (movieID) => {
    return favourites.some((movie) => movie.id === movieID);
  };

  return (
    <MovieContext.Provider
      value={{ favourites, addToFavourites, removeFavourites, isFavourites }}
    >
      {children}
    </MovieContext.Provider>
  );
};
