import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useMovie = (movieId) => {
  return useQuery({
    queryKey: ["movies", movieId],
    queryFn: () =>
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=42d3f8d886180928e42d0cabfb523b63`
        )
        .then((res) => res.data),
  });
};

export default useMovie;
