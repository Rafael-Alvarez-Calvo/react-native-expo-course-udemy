import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import items from "./slidesData";

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnabled) return;

    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    if (currentIndex >= items.length - 1) {
      setIsScrollEnabled(true);
    }
  };

  const scrollNextSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index, animated: true });

    if (index < items.length) {
      flatListRef.current?.scrollToIndex({ index });
      setCurrentSlideIndex(index);
    }
  };

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
        renderItem={({ item }) => <SlideItem item={item} />}
      />

      {currentSlideIndex < items.length - 1 && (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => scrollNextSlide(currentSlideIndex + 1)}
        >
          Siguiente
        </ThemedButton>
      )}

      {currentSlideIndex === items.length - 1 && (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          onPress={() => router.dismiss()}
        >
          Finalizar
        </ThemedButton>
      )}
    </ThemedView>
  );
};

export default SlidesScreen;
