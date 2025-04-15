import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api"; // путь скорректируй, если файл в подкаталоге

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
    <div>
      <button onClick={handleGoBack}>← Go back</button>

      <h1>{movie.title}</h1>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>

      <hr />

      <h2>Additional information</h2>
      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>

      <hr />

      <Outlet /> {/* Тут будут отображаться Cast и Reviews */}
    </div>
  );
};

export default MovieDetailsPage;

