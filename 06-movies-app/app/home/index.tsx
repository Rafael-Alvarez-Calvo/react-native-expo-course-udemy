import { View, Text, ScrollView } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import ActivityLoader from "@/presentation/components/ActivityLoader";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (
    nowPlayingQuery.isLoading ||
    popularQuery.isLoading ||
    topRatedQuery.isLoading ||
    upcomingQuery.isLoading
  ) {
    // If the data is still loading, show a loading indicator
    return <ActivityLoader />;
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 text-blue-500">
          Movies App
        </Text>

        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        <MoviesHorizontalList
          title="Populares"
          loadNextPage={popularQuery.fetchNextPage}
          movies={
            popularQuery.data?.pages.flatMap((page) => page as Movie[]) ?? []
          }
        />

        <MoviesHorizontalList
          title="Mejores Calificadas"
          movies={
            topRatedQuery.data?.pages.flatMap((page) => page as Movie[]) ?? []
          }
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MoviesHorizontalList
          title="Próximamente"
          movies={
            upcomingQuery.data?.pages.flatMap((page) => page as Movie[]) ?? []
          }
          loadNextPage={upcomingQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
