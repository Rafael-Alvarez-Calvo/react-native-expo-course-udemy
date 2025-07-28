import { View, Text } from "react-native";
import { DetailMovie } from "@/infrastructure/interfaces/movie.interface";

import { Ionicons } from "@expo/vector-icons";
import { Formatter } from "@/config/helpers/formatter";

interface MovieDescriptionProps {
  movie: DetailMovie;
}

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  return (
    <View className="mx-5 mt-3">
      <View className="flex flex-row">
        <Ionicons
          name="star"
          size={15}
          color="#3a82f6"
          className="mr-1 pt-[4px]"
        />
        <Text className="text-lg font-semibold text-white">
          {movie.rating.toFixed(1)}
        </Text>

        <View className="flex flex-row ml-3">
          {movie.genres &&
            movie.genres.map((genre, index) => (
              <Text
                key={genre}
                className={`text-md font-normal text-white pt-[2px] px-4 rounded-2xl ${index > 0 ? "ml-2" : ""} bg-blue-500`}
              >
                {genre}
              </Text>
            ))}
        </View>
      </View>

      <Text className="text-lg font-normal text-white mt-3">
        {movie.description}
      </Text>

      <Text className="text-lg font-bold text-white mt-3">
        Presupuesto:{" "}
        <Text className="font-semibold text-blue-500">
          {Formatter.formatCurrency(movie.budget)}
        </Text>
      </Text>
    </View>
  );
};

export default MovieDescription;
