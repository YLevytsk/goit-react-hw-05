import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../../services/api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch((err) => {
        console.error("Error loading cast:", err);
        setError("Failed to load cast.");
      });
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <div className={css.container}>
      <h3 className={css.title}>Cast</h3>
      {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul className={css.castList}>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={css.castItem}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  className={css.castImg}
                />
              ) : (
                <div className={css.noPhoto}>No photo</div>
              )}
              <p>
                <strong>{name}</strong> as {character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
