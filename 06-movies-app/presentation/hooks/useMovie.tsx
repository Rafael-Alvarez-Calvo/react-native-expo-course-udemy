import { getMovieByIdAction } from "@/core/actions/movie/getMovieById.action";
import { getMovieCastAction } from "@/core/actions/movie/getMovieCast.action";
import { useQuery } from "@tanstack/react-query";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const useMovie = (id: number | string) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

  const movieCastQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getMovieCastAction(+id),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });

  return { movieQuery, movieCastQuery };
};
