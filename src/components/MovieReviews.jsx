import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../services/api"; 

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch((err) => {
        console.error("Error loading reviews:", err);
        setError("Failed to load reviews.");
      });
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available for this movie.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p><strong>{author}</strong>:</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;

