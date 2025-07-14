import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovies";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/MainSlideShow";
import MoviesHorizontalList from "@/presentation/components/MoviesHorizontalList";

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
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={60} />
      </View>
    );
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
          movies={popularQuery.data ?? []}
        />

        <MoviesHorizontalList
          title="Mejores Calificadas"
          movies={topRatedQuery.data ?? []}
        />

        <MoviesHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
        />
        <MoviesHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
