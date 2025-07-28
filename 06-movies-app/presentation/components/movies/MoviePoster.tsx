import { router } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";

interface MoviePosterProps {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({
  id,
  poster,
  smallPoster = false,
  className,
}: MoviePosterProps) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: poster }}
        className="w-full h-full rounded-2xl shadow-xl shadow-blue-500"
        resizeMode="cover"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
      />
    </Pressable>
  );
};

export default MoviePoster;
