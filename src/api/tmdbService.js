import axios from "axios";

const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const getMoviePoster = async (id) => {
  const res = await tmdbClient.get(`/movie/${id}`);
  return `https://image.tmdb.org/t/p/w500${res.data.poster_path}`;
};
