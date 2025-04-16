import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(setTrending)
      .catch((err) => console.error("Failed to load trending movies:", err));
  }, []);

  return (
    <div className={css.container}>
      <h3 className={css.heading}>Trending today</h3>
      <MovieList
        movies={[...trending].sort((a, b) =>
          (a.title || a.name).localeCompare(b.title || b.name)
        )}
      />
      <img
        src="/images/banner-949944_1920.jpg"
        alt="Movies banner"
        className={css.banner}
      />
    </div>
  );
};

export default HomePage;

