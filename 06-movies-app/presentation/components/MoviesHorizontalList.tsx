import { View, Text } from "react-native";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { FlatList } from "react-native";
import MoviePoster from "./MoviePoster";

interface MoviesHorizontalListProps {
  title: string;
  movies: Movie[];
}

const MoviesHorizontalList = ({ title, movies }: MoviesHorizontalListProps) => {
  return (
    <View className="mt-5 mb-4">
      {title && (
        <Text className="text-3xl font-bold px-4 mb-3 text-blue-500">
          {title}
        </Text>
      )}

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
      />
    </View>
  );
};

export default MoviesHorizontalList;
