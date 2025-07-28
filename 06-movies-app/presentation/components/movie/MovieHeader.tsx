import { router } from "expo-router";
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface MovieHeaderProps {
  poster?: string; // Assuming poster is a string URL
  originalTitle?: string;
  title?: string;
}

const MovieHeader = ({ poster, originalTitle, title }: MovieHeaderProps) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.1)", "rgba(58, 130, 246, 0.2)"]}
        start={[0, 0]}
        style={{
          ...styles.posterGradient,
          height: screenHeight * 0.63,
        }}
      />
      <View style={styles.arrowBack}>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="#3a82f6"
            className="shadow"
          />
        </Pressable>
      </View>

      <View style={{ height: screenHeight * 0.7 }}>
        <View className="flex-1 rounded-b-[25px] overflow-hidden shadow-lg shadow-blue-500/20">
          <Image
            source={{ uri: poster }}
            className="flex-1"
            resizeMode="cover"
          />
        </View>
        <View className="px-5 mt-6">
          <Text className="text-md font-normal text-blue-400 mb-1">
            - {originalTitle} -
          </Text>
          <Text className="font-semibold text-3xl text-white">{title}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  posterGradient: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    width: "100%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  arrowBack: {
    position: "absolute",
    top: 20,
    left: 15,
    elevation: 9,
    zIndex: 99,
  },
});

export default MovieHeader;
