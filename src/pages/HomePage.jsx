import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "../services/api";

const HomePage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(setTrending)
      .catch((err) => console.error("Failed to load trending movies:", err));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {trending.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
