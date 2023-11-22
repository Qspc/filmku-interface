import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetMovies = () => {
  return useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?page=${pageParam}&api_key=42d3f8d886180928e42d0cabfb523b63&language=en-US`
        )
        .then((res) => res.data),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    refetchOnWindowFocus: false,
  });
};

export default useGetMovies;
