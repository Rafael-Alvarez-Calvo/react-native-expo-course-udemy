import { movieApi } from "@/core/api/movie.api";
import { MovieDBDetailResponse } from "@/infrastructure/interfaces/moviedb-movieDetail-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDBDetailResponse>(`/${id}`, {
            params: {
                id,
            },
        });

        const movie = MovieMapper.fromTheMovieDBToDetailMovie(data);
        console.log(id)

        return movie;

    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};