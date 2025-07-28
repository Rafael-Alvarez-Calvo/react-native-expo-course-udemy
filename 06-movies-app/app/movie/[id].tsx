import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovie } from "@/presentation/hooks/useMovie";
import ActivityLoader from "@/presentation/components/ActivityLoader";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCastHorizontalList from "@/presentation/components/movie/MovieCastHorizontalList";

const MovieDetails = () => {
  const safeArea = useSafeAreaInsets();

  const { id } = useLocalSearchParams();

  const { movieQuery, movieCastQuery } = useMovie(+id);

  if (
    movieQuery.isLoading ||
    !movieQuery.data ||
    movieCastQuery.isLoading ||
    !movieCastQuery.data
  ) {
    return <ActivityLoader />;
  }

  return (
    <ScrollView className="pb-10" style={{ paddingTop: safeArea.top }}>
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />

      <MovieDescription movie={movieQuery.data} />

      <MovieCastHorizontalList cast={movieCastQuery.data} />
    </ScrollView>
  );
};

export default MovieDetails;
