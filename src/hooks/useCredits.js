import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCredits = (movieId) => {
  return useQuery({
    queryKey: ["credits", movieId],
    queryFn: () =>
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=42d3f8d886180928e42d0cabfb523b63`
        )
        .then((res) => res.data),
  });
};

export default useCredits;
