import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Здесь должен быть реальный fetch, пока заглушка:
    setCast([
      { id: 1, name: "Actor One", character: "Hero" },
      { id: 2, name: "Actor Two", character: "Villain" },
    ]);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(({ id, name, character }) => (
          <li key={id}>
            <p>
              <strong>{name}</strong> as {character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
