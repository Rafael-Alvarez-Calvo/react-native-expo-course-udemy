import { View, Text, Image } from "react-native";
import React from "react";
import { Cast } from "@/infrastructure/interfaces/movie.interface";

interface ActorCardProps {
  actor: Cast;
}

const ActorCard = ({ actor }: ActorCardProps) => {
  return (
    <View className="mr-6 w-[100px]">
      {actor.avatar ? (
        <Image
          source={{ uri: actor.avatar }}
          className="w-[100px] h-[150px] rounded-2xl shadow-blue-500 shadow-xl"
        />
      ) : (
        <View className="w-[100px] h-[150px] bg-gray-800 rounded-2xl shadow-blue-500 shadow-xl justify-center items-center">
          <Text className="text-white text-md text-center">No Image</Text>
        </View>
      )}

      <View>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          className="font-bold text-md text-blue-500 mt-2"
        >
          {actor.name}
        </Text>
        <Text className="text-sm font-semibold text-white mt-1">
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

export default ActorCard;
