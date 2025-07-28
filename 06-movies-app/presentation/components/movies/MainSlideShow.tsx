import { useRef } from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, useWindowDimensions } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface MainSlideShowProps {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: MainSlideShowProps) => {
  const carouselRef = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={carouselRef}
        width={200} // Adjust width as width of cards
        height={350} // Adjust height as height of cards
        data={movies}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={false} />
        )}
      />
    </View>
  );
};

export default MainSlideShow;
