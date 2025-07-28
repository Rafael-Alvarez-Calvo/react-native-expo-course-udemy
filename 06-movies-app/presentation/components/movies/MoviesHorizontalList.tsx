import { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import {
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import MoviePoster from "./MoviePoster";
import { Movie } from "@/infrastructure/interfaces/movie.interface";

interface MoviesHorizontalListProps {
  title?: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

const MoviesHorizontalList = ({
  title,
  movies,
  loadNextPage,
}: MoviesHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const inEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!inEndReached) {
      return;
    }

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View className="mt-5 mb-4">
      {title && (
        <Text className="text-3xl font-bold px-4 mb-3 text-blue-500">
          {title}
        </Text>
      )}

      <FlatList
        keyExtractor={(item, i) => `${item.id}-${i}`}
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
        onScroll={handleOnScroll}
      />
    </View>
  );
};

export default MoviesHorizontalList;
