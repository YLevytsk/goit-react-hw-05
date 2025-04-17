import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMovieDetails } from "../../services/api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch((err) => {
        console.error("Error loading movie details:", err);
      });
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current} className={css.goBackBtn}>
        ← Go back
      </Link>

      <h1>{movie.title}</h1>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
      </p>

      <hr />
      <h2 className={css.additionalTitle}>Additional information</h2>

      <ul className={css.additionalLinks}>
        <li>
          <Link to="cast" className={css.link}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" className={css.link}>Reviews</Link>
        </li>
      </ul>
      <hr />

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

