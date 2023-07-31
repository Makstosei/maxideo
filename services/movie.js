const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}}`,
  },
};

const fetchMovieApi = async (pathName, query = "") => {
  try {
    const response = await fetch(`${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query}`, options);

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
  return fetchMovieApi("/genre/movie/list");
};

const getPopularMovies = async () => {
  return fetchMovieApi("/movie/popular");
};

const getTopRatedMovies = async () => {
  return fetchMovieApi("/movie/top_rated");
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`);
};

export { fetchMovieApi, getSingleCategory, getCategories, getPopularMovies, getTopRatedMovies, getMovie };
