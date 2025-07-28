import { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { View, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { Cast } from "@/infrastructure/interfaces/movie.interface";
import ActorCard from "./ActorCard";

interface MovieCastHorizontalListProps {
  cast: Cast[];
  loadNextPage?: () => void;
}

const MovieCastHorizontalList = ({
  cast,
  loadNextPage,
}: MovieCastHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [cast]);

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
    <View className="mx-5 mt-5 mb-14">
      <FlatList
        keyExtractor={(item, i) => `${item.id}-${i}`}
        data={cast}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
        onScroll={handleOnScroll}
      />
    </View>
  );
};

export default MovieCastHorizontalList;
