import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// ⬇️ Сюда вставь свой токен (начинается с eyJ...)
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDk1MWNkMWI1ZGExODE3YzIxY2I4YmFlNDMwNGIyMSIsIm5iZiI6MTc0NDcyMTAxOC4xMjUsInN1YiI6IjY3ZmU1NDdhOWQxZjc3OGFiODk5NmQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jqtWTziiy6RwLSCBESIcqYpyCLPYKfWuT1hBhAywWY";

const options = {
  headers: {
    Authorization: TOKEN,
  },
};

// 📈 Популярные фильмы для главной страницы
export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, options);
  return response.data.results;
};

// 🔍 Поиск по названию
export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};

// 🎬 Детали фильма
export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  return response.data;
};

// 👥 Актёрский состав
export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, options);
  return response.data.cast;
};

// 📝 Отзывы
export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, options);
  return response.data.results;
};
