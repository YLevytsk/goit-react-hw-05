import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/api";
import css from "./MovieDetailsPage.module.css"; // ✅ импорт CSS-модуля

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch((err) => {
        console.error("Error loading movie details:", err);
      });
  }, [movieId]);

  const handleGoBack = () => navigate(-1);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={css.container}>
      <button onClick={handleGoBack} className={css.backBtn}>← Go back</button>

      <h1 className={css.title}>{movie.title}</h1>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>

      <hr />

      <h2 className={css.sectionTitle}>Additional information</h2>
      <ul className={css.infoLinks}>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>

      <hr />

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
