import { nowPLayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/topRated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: () => nowPLayingAction(),
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
  });

  const popularQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
    getNextPageParam: (_, pages) => pages.length + 1,
    queryFn: ({ pageParam }) => popularMoviesAction({ page: pageParam }),
  });

  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top-rated"],
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
    getNextPageParam: (_, pages) => pages.length + 1,
    queryFn: ({ pageParam }) => topRatedMoviesAction({ page: pageParam }),
  });

  const upcomingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "upcoming"],
    staleTime: 1000 * 60 * 60 * 24, // Mantener la data cacheada por 24 hour
    getNextPageParam: (_, pages) => pages.length + 1,
    queryFn: ({ pageParam }) => upcomingMoviesAction({ page: pageParam }),
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
