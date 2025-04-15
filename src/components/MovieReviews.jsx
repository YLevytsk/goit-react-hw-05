import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Здесь мог бы быть fetch по movieId — пока заглушка
    setReviews([
      {
        id: 1,
        author: "Jane Doe",
        content: "Great movie! Loved the cinematography and acting.",
      },
      {
        id: 2,
        author: "John Smith",
        content: "Interesting story but a bit too long for my taste.",
      },
    ]);
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p><strong>{author}</strong></p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
