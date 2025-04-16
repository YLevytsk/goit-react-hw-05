import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../services/api";
import css from "./MovieReviews.module.css"; // ✅ импорт СТИЛЕЙ

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
    <div className={css.container}> {/* ✅ использование css */}
      <h3 className={css.title}>Reviews</h3> {/* ✅ использование css */}
      {reviews.length === 0 ? (
        <p>No reviews available for this movie.</p>
      ) : (
        <ul className={css.reviewList}> {/* ✅ использование css */}
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}> {/* ✅ использование css */}
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
