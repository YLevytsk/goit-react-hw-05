import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCredits } from "../services/api";

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
    <div>
      <h2>Cast</h2>
      {cast.length === 0 ? (
        <p>No cast information available.</p>
      ) : (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  width="100"
                />
              ) : (
                <div style={{ width: "100px", height: "150px", background: "#ccc" }}>
                  No photo
                </div>
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


