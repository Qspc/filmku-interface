// src/api/movieService.js
import apiClient from "./apiClient";

export const getMovieById = async (id) => {
  const res = await apiClient.get(`/movies/${id}`);
  return res.data.content;
};

export const getMovies = async (params) => {
  const res = await apiClient.get(`/movies`, { params });
  return res.data;
};

export const createMovie = async ({ body, apiKey }) => {
  const res = await apiClient.post("/movies", body, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  return res.data;
};

export const updateMovie = async (id, body) => {
  const res = await apiClient.put(`/movies/${id}`, body);
  return res.data;
};

export const deleteMovie = async (id) => {
  const res = await apiClient.delete(`/movies/${id}`);
  return res.data;
};
