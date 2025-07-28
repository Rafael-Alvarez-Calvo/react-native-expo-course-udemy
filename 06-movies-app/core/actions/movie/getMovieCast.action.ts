import { movieApi } from "@/core/api/movie.api";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieCastAction = async (id: number) => {
    try {
        const { data } = await movieApi.get<MovieDBCreditsResponse>(`/${id}/credits`);

        return data.cast.map(MovieMapper.fromMovieCastToEntity);

    } catch (error) {
        console.error("Error fetching cast:", error);
        throw error;
    }
};