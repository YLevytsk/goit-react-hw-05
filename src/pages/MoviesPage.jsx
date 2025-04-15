import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const currentQuery = searchParams.get("query");
    if (!currentQuery) return;

    // Заглушка — здесь мог бы быть fetch
    const mockResults = [
      { id: 1, title: "Movie One" },
      { id: 2, title: "Movie Two" },
      { id: 3, title: "Another Movie" },
    ];

    const filtered = mockResults.filter(movie =>
      movie.title.toLowerCase().includes(currentQuery.toLowerCase())
    );

    setMovies(filtered);
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === "") return;
    setSearchParams({ query });
  };

  return (
    <div>
      <h1>Search Movies</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Enter movie title..."
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
