import { Cast, DetailMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBCast } from "../interfaces/moviedb-credits.response";
import { MovieDBDetailResponse } from "../interfaces/moviedb-movieDetail-response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        };
    }

    static fromTheMovieDBToDetailMovie = (movie: MovieDBDetailResponse): DetailMovie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres.map(genre => genre.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map(company => company.name),
        };
    }

    static fromMovieCastToEntity = (actor: MovieDBCast): Cast => {
        return {
            id: actor.id,
            name: actor.name,
            character: actor.character ?? 'No character',
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : '',
        };
    }
};