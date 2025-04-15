import { useParams, Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Заглушка. Здесь мог бы быть fetch по movieId
    setMovie({
      id: movieId,
      title: "Sample Movie Title",
      overview: "This is a sample movie overview.",
      release_date: "2024-05-01",
    });
  }, [movieId]);

  const handleGoBack = () => navigate(-1);

  if (!movie) return <div>Loading movie details...</div>;

  return (
    <div>
      <button onClick={handleGoBack}>← Go back</button>

      <h1>{movie.title}</h1>
      <p><strong>Release date:</strong> {movie.release_date}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>

      <hr />

      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <hr />

      {/* Вложенные маршруты */}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
