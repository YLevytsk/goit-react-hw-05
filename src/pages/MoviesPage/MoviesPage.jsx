import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import css from "./MoviesPage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";
  const [query, setQuery] = useState(queryParam);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!queryParam) return;
    searchMovies(queryParam).then(setMovies).catch(console.error);
  }, [queryParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ query });
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          className={css.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>

      <MovieList movies={movies} />

      <img
        src="/images/banner-949944_1920.jpg"
        alt="Movies banner"
        className={css.banner}
      />
    </div>
  );
};

export default MoviesPage;


