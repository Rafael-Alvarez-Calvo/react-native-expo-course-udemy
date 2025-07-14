import { nowPLayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/topRated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: () => nowPLayingAction(),
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: () => topRatedMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
  });

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => upcomingMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
