import { movieApi } from "@/core/api/movie.api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
}

export const topRatedMoviesAction = async ({ page = 1 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
      params: {
        page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;

  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    throw error;
  }
};
