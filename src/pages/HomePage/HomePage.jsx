import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../services/api";
import css from "./HomePage.module.css"; 

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
<ul className={css.trendingList}>
  {[...trending]
    .sort((a, b) => (a.title || a.name).localeCompare(b.title || b.name))
    .map((movie) => (
      <li key={movie.id} className={css.trendingItem}>
        <Link to={`/movies/${movie.id}`} className={css.trendingLink}>
          {movie.title || movie.name}
        </Link>
      </li>
    ))}
</ul>
<img
  src="/images/banner-949944_1920.jpg"
  alt="Movies banner"
  className={css.banner}
/>

    </div>
  );
};

export default HomePage;
