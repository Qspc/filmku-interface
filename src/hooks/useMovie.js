import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovieById, getMovies, createMovie, deleteMovie, updateMovie } from "api/apiService";

export const useGetById = (id) => {
  return useQuery({
    queryKey: ["film", id],
    queryFn: async () => {
      const res = await getMovieById(id);
      return res;
    },
  });
};

export const useMovies = (params) => {
  return useQuery({
    queryKey: ["movies", params],
    queryFn: () => getMovies(params),
    keepPreviousData: true,
  });
};

export const useCreateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMovie,
    onSuccess: () => {
      queryClient.invalidateQueries(["movies"]);
    },
  });
};

export const useUpdateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMovie,
    onSuccess: () => {
      queryClient.invalidateQueries(["movies"]);
    },
  });
};

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries(["movies"]);
    },
  });
};
